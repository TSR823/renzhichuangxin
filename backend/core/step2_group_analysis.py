import pandas as pd
import os
import json

# ================= 1. 读取与清洗数据 =================
data_dir = 'data'
output_dir = 'output'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

records = pd.read_csv(os.path.join(data_dir, '作答记录.csv'))
materials = pd.read_csv(os.path.join(data_dir, '题目与材料.csv'))
students = pd.read_csv(os.path.join(data_dir, '模拟学生.csv')) # 需要这个表拿班级信息

# 合并数据
merged = pd.merge(records, materials[['材料编号', '指标编号', '满分']], on='材料编号', how='left', suffixes=('_记录', '_题目'))
merged = pd.merge(merged, students[['学生编号', '模拟班级编号']], on='学生编号', how='left')

# 剔除无效记录并算得分率
valid_data = merged[merged['评分状态'] == '已评分'].copy()
valid_data['得分率'] = valid_data['得分'] / valid_data['满分_题目']
# 修正异常
valid_data.loc[valid_data['得分'] > valid_data['满分_题目'], '得分率'] = 1.0

# ================= 2. 计算群体学情 =================
print("========= 开始计算班级群体学情 =========")

# 按 班级 -> 指标 分组，计算平均得分率
group_metrics = valid_data.groupby(['模拟班级编号', '指标编号']).agg(
    参与人数=('学生编号', 'nunique'),  # 多少人做了这个指标
    作答总次数=('记录编号', 'count'),  # 总共做了多少题
    群体平均得分率=('得分率', 'mean')
).reset_index()

# 格式化输出看看效果
for class_id in group_metrics['模拟班级编号'].unique():
    print(f"\n🏫 【班级 {class_id}】各知识点掌握情况：")
    class_data = group_metrics[group_metrics['模拟班级编号'] == class_id]
    
    for _, row in class_data.iterrows():
        # 标红一下薄弱项（平均得分率低于60%）
        status = "🔴 薄弱" if row['群体平均得分率'] < 0.6 else "🟢 良好"
        print(f"  - 指标 {row['指标编号']}: 得分率 {row['群体平均得分率']:.2%} ({status})")

# ================= 3. 找出两个班的差异 =================
print("\n========= 班级差异对比分析 =========")

# 将数据透视，方便对比 DC01 和 DC02
pivot_df = group_metrics.pivot(index='指标编号', columns='模拟班级编号', values='群体平均得分率')

# 计算两个班在每个指标上的差距绝对值
if 'DC01' in pivot_df.columns and 'DC02' in pivot_df.columns:
    pivot_df['分差(绝对值)'] = abs(pivot_df['DC01'] - pivot_df['DC02'])
    
    # 找出差异最大的知识点
    max_diff_metric = pivot_df['分差(绝对值)'].idxmax()
    max_diff_val = pivot_df['分差(绝对值)'].max()
    
    print(f"⚠️ 两个班差异最大的知识点是: {max_diff_metric}，分差高达 {max_diff_val:.2%}")
    print(f"   DC01 得分率: {pivot_df.loc[max_diff_metric, 'DC01']:.2%}")
    print(f"   DC02 得分率: {pivot_df.loc[max_diff_metric, 'DC02']:.2%}")

# ================= 4. 导出为 JSON 给前端 =================
print("\n========= 导出群体分析结果 =========")

# 处理 NaN 值，转成字典列表
group_result = group_metrics.to_dict(orient='records')
# 把 numpy 的 float 转成 python 原生 float，防止 json 报错
for item in group_result:
    item['群体平均得分率'] = float(item['群体平均得分率'])

with open(os.path.join(output_dir, 'M4_group_analysis.json'), 'w', encoding='utf-8') as f:
    json.dump(group_result, f, ensure_ascii=False, indent=2)

print(f"✅ 群体分析数据已成功保存至 {output_dir}/M4_group_analysis.json")