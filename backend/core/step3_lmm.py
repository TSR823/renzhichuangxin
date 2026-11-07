import pandas as pd
import os
import json
from openai import OpenAI

# ================= 1. 配置大模型 =================
# 请把 sk-你的API_KEY填在这里 换成你申请的 DeepSeek 或 通义千问 的 Key
client = OpenAI(
    api_key=("DEEPSEEK_API_KEY","未配置") 
    base_url="https://api.deepseek.com/v1" # 如果用通义千问，改为 https://dashscope.aliyuncs.com/compatible-mode/v1
)

# ================= 2. 重新读取数据（保证独立运行） =================
data_dir = 'data'
output_dir = 'output'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

records = pd.read_csv(os.path.join(data_dir, '作答记录.csv'))
materials = pd.read_csv(os.path.join(data_dir, '题目与材料.csv'))

# 合并清洗逻辑（与 step1 保持一致）
merged = pd.merge(records, materials[['材料编号', '主题编号', '满分', '题干或内容', '指标编号']], on='材料编号', how='left', suffixes=('_记录', '_题目'))
valid_data = merged[merged['评分状态'] == '已评分'].copy()
valid_data['得分率'] = valid_data['得分'] / valid_data['满分_题目']
# 修正异常
valid_data.loc[valid_data['得分'] > valid_data['满分_题目'], '得分率'] = 1.0

# ================= 3. 核心：生成双视角建议 =================
def generate_dual_advice(student_id, case_type):
    s_data = valid_data[valid_data['学生编号'] == student_id]
    
    # 构造数据文本
    data_text = ""
    for _, row in s_data.iterrows():
        data_text += f"- 指标:{row['指标编号']}, 题目:{row['材料编号']}, 题干:{row['题干或内容']}, 得分:{row['得分']}/{row['满分_题目']}\n"
        
    prompt = f"""
    你是一个资深初中数学教研专家。请根据提供的学生作答数据，出具一份学情诊断与学习建议。
    
    【学生编号】: {student_id}
    【案例类型】: {case_type}
    【作答明细】:
    {data_text}
    
    【赛题核心要求（必须严格遵守）】:
    1. 如果【案例类型】是“记录不足”或发现数据缺失，绝对不能判定学生“未掌握”，必须建议“补充观察”或“诊断性练习”。
    2. 建议必须具体到给定的题目材料，不能捏造不存在的题号。
    3. 必须包含实施顺序。
    
    【输出要求】: 严格输出 JSON 格式，不要带任何 Markdown 标记（如 ```json ），结构如下：
    {{
        "student_view": {{
            "summary": "面向学生的鼓励性话语和学情大白话总结",
            "suggestions": [
                {{
                    "sequence": 1,
                    "material_id": "QXXX",
                    "action": "具体让学生做什么（如：复习课本/重做此题/做诊断练习）",
                    "reason": "用通俗语言解释为什么推荐这个"
                }}
            ]
        }},
        "teacher_view": {{
            "diagnosis": "面向教师的专业学情诊断（指出知识漏洞、能力缺陷或数据覆盖问题）",
            "teaching_suggestions": [
                "给教师的教学实施建议，如：建议课堂重点关注.../针对该生可布置... "
            ],
            "observation_needed": "如果信息不足，指出需要教师进一步观察什么环节；如果记录充足，填'无需补充观察'",
            "adjustable_points": "指出教师可以如何灵活调整此建议（如：若学生觉得Q001太难，可替换为Q002）"
        }}
    }}
    """
    
    print(f"⏳ 正在请求大模型分析学生 {student_id} ({case_type})...")
    response = client.chat.completions.create(
        model="deepseek-chat", # 如果用通义千问，改为 qwen-turbo
        messages=[{"role": "user", "content": prompt}],
        response_format={ "type": "json_object" },
        temperature=0.3
    )
    
    return json.loads(response.choices[0].message.content)

# ================= 4. 跑通典型案例并保存 =================
# D04：部分得分典型； D17：记录不足典型
# 你可以根据 step1 跑出来的结果，自行添加表现较好的学生编号
cases = {
    'D04': '部分得分（步骤扣分）',
    'D17': '记录不足（仅4题全对）'
}

final_output = {}

for sid, ctype in cases.items():
    try:
        result = generate_dual_advice(sid, ctype)
        final_output[sid] = result
        
        print(f"\n✅ 学生 {sid} ({ctype}) 的诊断报告生成成功！")
        print("-" * 50)
        print(f"【学生端摘要】: {result['student_view']['summary']}")
        print(f"【教师端诊断】: {result['teacher_view']['diagnosis']}")
        print("-" * 50)
        
    except Exception as e:
        print(f"❌ 学生 {sid} 报错了：{e}")

# ================= 5. 导出为前端所需的 M5 JSON =================
with open(os.path.join(output_dir, 'M5_advices.json'), 'w', encoding='utf-8') as f:
    json.dump(final_output, f, ensure_ascii=False, indent=2)

print(f"\n🎉 大功告成！M5 成果包已导出至 {output_dir}/M5_advices.json")