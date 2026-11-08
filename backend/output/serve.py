import os
import json
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
CORS(app)  # 允许前端跨域请求

# ================= 1. 大模型配置 =================
# 部署时，请在 Render 的环境变量中配置 LLM_API_KEY
API_KEY = os.environ.get('LLM_API_KEY', 'sk-这里可以填你本地的key用来测试_但传GitHub前务必删掉')
BASE_URL = "https://api.deepseek.com/v1"  # 如果用通义千问，改为阿里云地址
MODEL_NAME = "deepseek-chat"              # 如果是通义千问，改为 qwen-turbo

client = OpenAI(api_key=API_KEY, base_url=BASE_URL)

# ================= 2. 内存数据库与数据加载 =================
db = {
    "records": None,
    "materials": None
}

def init_data():
    # 动态获取当前脚本所在目录，完美解决 Mac/Win/云端 路径不一致的问题
    base_dir = os.path.dirname(os.path.abspath(__file__))
    data_dir = os.path.join(base_dir, 'data')
    
    try:
        # 加上 encoding='utf-8'，防止中文乱码
        records_path = os.path.join(data_dir, '作答记录.csv')
        materials_path = os.path.join(data_dir, '题目与材料.csv')
        
        db["records"] = pd.read_csv(records_path, encoding='utf-8')
        db["materials"] = pd.read_csv(materials_path, encoding='utf-8')
        print("✅ 数据加载成功！")
    except Exception as e:
        print(f"❌ 数据加载失败，请检查路径: {e}")

# 启动时加载数据
init_data()

# ================= 3. 接口 1：全局大屏数据 =================
@app.route('/api/dashboard', methods=['GET'])
def get_dashboard():
    if db["records"] is None:
        return jsonify({"status": "error", "message": "数据未加载"}), 500
        
    records = db["records"].copy()
    
    # 基础学情计算（这里假设你的CSV里有'得分'和'满分'）
    # 如果列名不同，请根据实际CSV修改
    if '得分' in records.columns and '满分' in records.columns:
        records['得分率'] = records['得分'] / records['满分']
        # 防止得分大于满分（异常数据清洗）
        records.loc[records['得分'] > records['满分'], '得分率'] = 1.0
        
        # 计算主题平均分（假设有'主题编号'列）
        if '主题编号' in records.columns:
            theme_avg = records.groupby('主题编号')['得分率'].mean() * 100
        else:
            theme_avg = pd.Series(dtype=float)
    else:
        theme_avg = pd.Series(dtype=float)

    return jsonify({
        "status": "success",
        "total_records": len(records),
        "theme_avg": theme_avg.round(2).to_dict()
    })

# ================= 4. 接口 2：提交新成绩并触发AI评价 =================
@app.route('/api/submit_record', methods=['POST'])
def submit_record():
    new_record = request.json
    
    # 数据校验与默认值兜底（防止前端漏传报错）
    student_id = new_record.get('学生编号', '未知')
    question_id = new_record.get('题目编号', '未知')
    answer = new_record.get('答案', '')
    score = new_record.get('得分', 0)
    full_score = new_record.get('满分', 10)

    try:
        # 1. 拼装 Prompt，让 AI 扮演老师给予鼓励
        prompt = f"""
        你是一个初中数学老师。学生【{student_id}】刚刚完成了一道题目【{question_id}】。
        他提交的答案是：{answer}，得到了 {score}/{full_score} 分。
        请给他一段简短的反馈，指出错误原因（如果没有错就表扬），并给一句鼓励的话。字数在 50 字以内。
        """
        
        # 2. 调用大模型
        response = client.chat.completions.create(
            model=MODEL_NAME,
            messages=[
                {"role": "system", "content": "你是一个鼓励型的初中数学老师。"},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7
        )
        
        ai_feedback = response.choices[0].message.content.strip()
        
        # 3. 将新记录追加到内存数据库中（可选，刷新就没了）
        global db
        if db["records"] is not None:
            new_row = pd.DataFrame([new_record])
            db["records"] = pd.concat([db["records"], new_row], ignore_index=True)

        return jsonify({
            "status": "success",
            "ai_feedback": ai_feedback
        })
        
    except Exception as e:
        print(f"AI 评价失败: {e}")
        return jsonify({"status": "error", "message": str(e)}), 500

# ================= 5. 接口 3：举一反三（AI出题） =================
@app.route('/api/generate_practice', methods=['POST'])
def generate_practice():
    data = request.json
    kp = data.get('knowledge_point', '一元一次方程') # 默认给个数学知识点兜底

    # 核心 Prompt：强力约束大模型只能出七年级数学题，且严格返回 JSON
    prompt = f"""
    你是一个专业的初中（七年级）数学老师。
    请针对七年级数学知识点【{kp}】出一道中等难度的单选题。
    注意：绝对不要出物理、化学或其他学科的内容，只能是七年级数学！
    你必须严格输出以下 JSON 格式，不要包含任何 Markdown 标记（如 ```json）或多余的废话：
    {{
        "question": "题目内容",
        "options": ["A. xxx", "B. xxx", "C. xxx", "D. xxx"],
        "answer": "A",
        "explanation": "详细解析内容"
    }}
    """

    try:
        response = client.chat.completions.create(
            model=MODEL_NAME,
            messages=[
                {"role": "system", "content": "你是一个严格输出 JSON 的七年级数学出题机器人。"},
                {"role": "user", "content": prompt}
            ],
            temperature=0.8
        )
        
        result_text = response.choices[0].message.content.strip()
        
        # 防御性清理：有时候大模型会手贱加上 ```json 和 ```
        if result_text.startswith("```json"):
            result_text = result_text[7:]
        if result_text.endswith("```"):
            result_text = result_text[:-3]
            
        # 把大模型返回的字符串转成 JSON 对象再吐给前端
        question_data = json.loads(result_text.strip())
        
        return jsonify({
            "status": "success",
            "data": question_data
        })
        
    except Exception as e:
        print(f"AI 出题失败: {e}")
        return jsonify({"status": "error", "message": str(e)}), 500

# ================= 6. 启动服务 =================
if __name__ == '__main__':
    # 适配本地调试和 Render 云端部署
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)












































































































































































































