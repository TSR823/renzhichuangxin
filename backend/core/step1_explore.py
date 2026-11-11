import pandas as pd
import os
import json

# ==========================================
# 1. 设置路径与读取数据
# ==========================================
data_dir = 'data'
output_dir = 'output'

# 确保 output 文件夹存在（如果没有，自动创建）
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

print("========= 开始数据加载 =========")
records = pd.read_csv(os.path.join(data_dir, '作答记录.csv'))
materials = pd.read_csv(os.path.join(data_dir, '题目与材料.csv'))

# ==========================================
# 2. 数据合并与质量检查 (对应 M2)
# ==========================================
print("========= 开始数据合并与体检 =========")
# 合并作答记录和题目信息，处理重复列名
merged = pd.merge(records, materials[['材料编号', '主题编号', '满分', '指标编号']], 
                  on='材料编号', 
                  how='left', 
                  suffixes=('_记录', '_题目'))

# 检查缺失得分
missing_scores = merged['得分'].isna().sum()
print(f"⚠️ 缺失得分（可能未批改）的记录数: {missing_scores}")

# 剔除无效记录（只保留已评分的）
valid_data = merged[merged['评分状态'] == '已评分'].copy()

# 计算初始得分率
valid_data['得分率'] = valid_data['得分'] / valid_data['满分_题目']

# ==========================================
# 3. 深度数据清洗（处理异常得分 > 满分）
# ==========================================
print("\n========= 🚨 数据质量深度检查 =========")
# 找出异常记录
abnormal_records = valid_data[valid_data['得分'] > valid_data['满分_题目']]
print(f"发现异常记录（得分 > 满分）共 {len(abnormal_records)} 条。明细如下：")
if len(abnormal_records) > 0:
    print(abnormal_records[['记录编号', '学生编号', '材料编号', '得分', '满分_题目']])

# 修正异常得分率（强制设为 1.0）
valid_data['修正后得分率'] = valid_data['得分率']
valid_data.loc[valid_data['得分'] > valid_data['满分_题目'], '修正后得分率'] = 1.0

# ==========================================
# 4. 群体与个体学情分析 (对应 M3/M4)
# ==========================================
print("\n========= 开始学情分析 =========")

# 全体群体在 T01 主题的得分率
t01_data = valid_data[valid_data['主题编号_记录'] == 'T01']
if not t01_data.empty:
    print(f"【群体概览】全体在 T01(代数式) 平均得分率: {t01_data['修正后得分率'].mean():.2%}")

# 按学生和指标分组统计
student_metrics = valid_data.groupby(['学生编号', '指标编号']).agg(
    已答题数=('记录编号', 'count'),
    平均得分率=('修正后得分率', 'mean')
).reset_index()

# 判定薄弱状态（<60%）
student_metrics['掌握状态'] = student_metrics['平均得分率'].apply(lambda x: '薄弱' if x < 0.6 else '良好')

# 打印前5个学生的薄弱指标
for sid in ['D01', 'D02', 'D03', 'D04', 'D05']:
    weak = student_metrics[(student_metrics['学生编号'] == sid) & (student_metrics['掌握状态'] == '薄弱')]['指标编号'].tolist()
    print(f"学生 {sid} 薄弱指标: {weak if weak else '无'}")

# ==========================================
# 5. 筛选典型案例学生 (对应官方要求)
# ==========================================
print("\n========= 寻找典型案例学生 =========")

# 统计每个学生的作答量
student_total_questions = valid_data.groupby('学生编号')['记录编号'].count()

# ① 记录不足
least_student = student_total_questions.sort_values().index[0]
print(f"👉 记录不足学生: {least_student} (仅作答 {student_total_questions[least_student]} 题)")

# ② 表现较好（排除做题太少的学生，比如题数 >= 10）
stats = valid_data.groupby('学生编号').agg(题数=('记录编号', 'count'), 平均分=('修正后得分率', 'mean'))
good_students = stats[stats['题数'] >= 10].sort_values(by='平均分', ascending=False)
best_student = good_students.index[0]
print(f"👉 表现较好学生: {best_student} (作答 {good_students.iloc[0]['题数']} 题, 得分率 {good_students.iloc[0]['平均分']:.2%})")

# ③ 部分得分（得分率在 0~1 之间的记录最多的学生）
partial_records = valid_data[(valid_data['得分率'] > 0) & (valid_data['得分率'] < 1)]
partial_student = partial_records['学生编号'].value_counts().index[0]
print(f"👉 部分得分学生: {partial_student} (有 {partial_records['学生编号'].value_counts().iloc[0]} 条部分得分记录)")


# ==========================================
# 6. 导出成果物 JSON 文件（交付给前端）
# ==========================================
print("\n========= 正在导出结果文件给前端 =========")

# ① 导出数据质量报告 (M2)
quality_report = {
    "总记录数": int(len(records)),
    "有效评分记录数": int(len(valid_data)),
    "缺失得分记录数": int(missing_scores),
    "异常记录数(得分>满分)": int(len(abnormal_records)),
    "异常处理规则": "将得分大于满分的记录，修正后得分率强制置为 1.0"
}
with open(os.path.join(output_dir, 'M2_quality_report.json'), 'w', encoding='utf-8') as f:
    json.dump(quality_report, f, ensure_ascii=False, indent=2)

# ② 导出学情摘要 (M3/M4)
# 将 DataFrame 转为字典列表
metrics_dict = student_metrics.to_dict(orient='records')
with open(os.path.join(output_dir, 'M3_M4_student_metrics.json'), 'w', encoding='utf-8') as f:
    json.dump(metrics_dict, f, ensure_ascii=False, indent=2)

# ③ 导出典型案例学生名单（供后续大模型使用）
cases = {
    "记录不足": least_student,
    "表现较好": best_student,
    "部分得分": partial_student
}
with open(os.path.join(output_dir, 'cases_list.json'), 'w', encoding='utf-8') as f:
    json.dump(cases, f, ensure_ascii=False, indent=2)

print(f"✅ 成功！M2、M3、M4 结果以及典型案例名单已保存至 {output_dir} 文件夹。")