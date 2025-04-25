# AWS Hackathon Chatbot Frontend

## 使用技術
前端：React + Tailwind CSS
驗證：AWS Cognito
API：AWS AppSync (GraphQL)
資料庫：AWS DynamoDB
雲端設定：AWS Amplify




## 專案結構
aws_hackathon/ ├── amplify-config.js # AWS Amplify 設定檔，連接 Cognito、AppSync、S3 等服務 ├── App.jsx # 應用主入口，負責整體畫面結構與狀態管理 ├── AuthProvider.jsx # 包裝 Cognito 驗證流程，處理登入、登出 ├── ChatList.jsx # 左側對話清單，列出用戶的所有對話 ├── ChatWindow.jsx # 右側聊天視窗，顯示選中的對話並支援發送訊息


## 功能簡介

- **用戶登入驗證**：使用 AWS Cognito 處理用戶註冊、登入、登出流程。
- **對話清單**：透過 AWS AppSync (GraphQL) 從 DynamoDB 取得使用者的聊天對話紀錄。
- **聊天視窗**：顯示聊天內容，並支援發送訊息（訊息會更新回 DynamoDB）。

## 安裝步驟


```bash
   git clone https://your-repo-url.git
   cd aws_hackathon

npm install //設定 AWS Amplify

//確保已安裝 Amplify CLI:
npm install -g @aws-amplify/cli
amplify configure

//初始化 Amplify 專案：
amplify init

//加入 Cognito 驗證：
amplify add auth

//加入 AppSync (GraphQL API)：
amplify add api

//部署到 AWS：
amplify push

npm start
```
在瀏覽器開啟 http://localhost:3000 查看應用程式。

