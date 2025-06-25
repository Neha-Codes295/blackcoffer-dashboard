# 🌐 Blackcoffer Interactive Data Visualization Dashboard

A full-stack MERN (MongoDB, Express, React, Node.js) application for visualizing and filtering insights from structured business data.

---

## 📊 Features

- 📁 Backend: Express API with MongoDB + dynamic filtering
- 📈 Frontend: React + Vite + TailwindCSS + Chart.js
- 🎛️ Filters: Topic, End Year, Region, Country
- 🔄 Reset Filters
- 📤 Export: CSV + PDF download
- 📱 Responsive layout for mobile/tablet
- 🧠 Analytics Summary: Total entries, unique topics, countries
- ✅ Deploy-ready (Render + Vercel)
- 🧪 Unit test example included

---

## 🚀 Live Demo

- 🔗 **Frontend App**: [https://blackcoffer-dashboard-omega.vercel.app/](https://blackcoffer-dashboard-omega.vercel.app/)
- 🔗 **Backend API**: [https://blackcoffer-dashboard-lkrq.onrender.com/api/data](https://blackcoffer-dashboard-lkrq.onrender.com/api/data)

> ℹ️ Use the backend API above to test filters directly in Postman or browser. Example:
https://blackcoffer-dashboard-lkrq.onrender.com/api/data?topic=oil&country=India


---

## 📦 Tech Stack

| Layer        | Tech                          |
|--------------|-------------------------------|
| Backend      | Node.js, Express, MongoDB     |
| Frontend     | React, Vite, Tailwind CSS     |
| Charts       | Chart.js, react-chartjs-2     |
| Export Tools | html2canvas, jsPDF, papaparse |
| Dev Tools    | Axios, Vitest, ESLint         |

---

## 🧪 Run Locally

### Backend
```bash
cd backend
npm install
# .env should have:
# MONGO_URI=mongodb://localhost:27017/blackcoffer
npm start


### Frontend
cd frontend
npm install
npm run dev


Features Summary
Multi-Chart Dashboard: Bar, Line, Pie

Filters: Dynamic dropdowns (topic, region, etc.)

Reset Filters Button

Analytics Summary Card

Export Charts: PDF and CSV

Mobile Friendly Design

Connected to MongoDB Atlas via Render

📤 Deployment
Backend: Render

Frontend: Vercel

👩‍💻 Author
Neha Bhatia
Software Engineer (Full-stack) Assignment
Blackcoffer