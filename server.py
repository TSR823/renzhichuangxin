from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import json
import os
from openai import OpenAI

app = Flask(__name__)
CORS(app) # 允许前端跨域请求

# ================= 1. 大模型配置 =================
# 本地测试时，你可以直接在这里填 Key；但推送到 GitHub 前，必须改成环境变量读取
API_KEY = os.environ.get("LLM_API_KEY", "这里填你的真实Key") 
BASE_URL = "https://api.deepseek.com/v1" # 如果用通义千问，改为阿里云地址
MODEL_NAME = "deepseek-chat" # 如果用通义千问，改为 qwen-turbo

client = OpenAI(api_key=API_KEY, base_url=BASE_URL)

# ================= 2. 内存数据库 =================
db = {
    "records": None,
    "materials": None
}

def init_data():
    data_dir = 'data'
    try:
        # 加上 encoding='utf-8'，解决 Mac 读取中文乱码
        db["records"] = pd.read_csv(os.path.join(data_dir, '作答记录.csv'), encoding='utf-8')
        db["materials"] = pd.read_csv(os.path.join(data_dir, '题目与材料.csv'), encoding='utf-8')
        print("✅ 数据加载成功！")
    except Exception as e:
        print(f"❌ 数据加载失败，请检查路径: {e}")

# ================= 3. 接口 1：全局大屏数据 =================
@app.route('/api/dashboard', methods=['GET'])
def get_dashboard():
    records = db["records"].copy()
    materials = db["materials"].copy()
    
    merged = pd.merge(records, materials[['材料编号', '主题编号', '满分']], on='材料编号', how='left', suffixes=('_记录', '_题目'))
    valid = merged[merged['评分状态'] == '已评分'].copy()
    valid['得分率'] = valid['得分'] / valid['满分_题目']
    valid.loc[valid['得分'] > valid['满分_题目'], '得分率'] = 1.0
    
    theme_avg = valid.groupby('主题编号_记录')['得分率'].mean() * 100
    
    return jsonify({
        "status": "success",
        "total_records": len(valid),
        "theme_avg": theme_avg.round(2).to_dict()
    })

# ================= 4. 接口 2：提交新成绩并触发AI评价 =================
@app.route('/api/submit_record', methods=['POST'])
def submit_record():
    new_record = request.json
    
    try:
        new_row = pd.DataFrame([new_record])
        new_row['记录编号'] = f"NEW_{len(db['records'])}"
        new_row['评分状态'] = '已评分'
        db["records"] = pd.concat([db["records"], new_row], ignore_index=True)
        
        student_data = db["records"][db["records"]['学生编号'] == new_record['学生编号']]
        
        prompt = f"""
        学生{new_record['学生编号']}刚完成了新作答，得了{new_record['得分']}分。
        历史作答：{student_data[['材料编号', '得分']].tail(5).to_json(force_ascii=False)}。
        请用鼓励的语气，给学生一句简短的反馈（50字以内），指出接下来重点复习什么。
        """
        
        response = client.chat.completions.create(
            model=MODEL_NAME,
            messages=[{"role": "user", "content": prompt}]
        )
        
        return jsonify({
            "status": "success",
            "ai_feedback": response.choices[0].message.content
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

# ================= 5. 接口 3：AI 现场出题 =================
@app.route('/api/generate_practice', methods=['POST'])
def generate_practice():
    data = request.json
    kp = data.get("knowledge_point", "代数式")
    
    prompt = f"""
    你是一个初中数学老师，请针对知识点【{kp}】出一道中等难度的选择题。
    必须严格输出 JSON 格式：
    {{
        "question": "题目内容",
        "options": ["A. xxx", "B. xxx", "C. xxx", "D. xxx"],
        "answer": "A",
        "explanation": "解析内容"
    }}
    """
    
    try:
        response = client.chat.completions.create(
            model=MODEL_NAME,
            messages=[{"role": "user", "content": prompt}],
            response_format={ "type": "json_object" }
        )
        return jsonify({"status": "success", "data": json.loads(response.choices[0].message.content)})
    except Exception as e:
         return jsonify({"status": "error", "message": str(e)})

if __name__ == '__main__':
    init_data()
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)