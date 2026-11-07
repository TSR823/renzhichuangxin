# 数小伴智能学情诊断系统
## 项目目录结构
--/
├── backend/ # 后端
│ ├── api/ # 接口代码目录
│ ├── core/ # 业务脚本
│ │ ├── step1_explore.py
│ │ ├── step2_group_analysis.py
│ │ └── step3_lmm.py
│ ├── data/ # 原始数据
│ ├── output/ # 输出结果
│ ├── server.py # 后端服务入口
│ └── .gitignore
├── frontend/ # 前端页面（html/js/css）
└── README.md # 项目说明

## 环境依赖
Python 3.8+
需要安装的依赖包（后续补充）

## 启动后端服务
```bash
# 1. 进入项目根目录
cd './--'

# 2. 进入后端文件夹
cd backend

# 3. 启动服务
python server.py

## Git 协作流程
```bash
#1. 写代码前先拉取最新代码
git pull

#2.修改代码后提交上传
git add .
git commit -m "描述本次修改内容"
git push
