# 🌐 Blackcoffer Interactive Data Visualization Dashboard

A full-stack MERN (MongoDB, Express, React, Node.js) application for visualizing and filtering insights from structured business data.

---

## Features

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
##  Tech Stack

| Layer        | Tech                          |
|--------------|-------------------------------|
| Backend      | Node.js, Express, MongoDB     |
| Frontend     | React, Vite, Tailwind CSS     |
| Charts       | Chart.js, react-chartjs-2     |
| Export Tools | html2canvas, jsPDF, papaparse |
| Dev Tools    | Axios, Vitest, ESLint         |

---

##  Run Locally

### Backend
```bash
cd backend
npm install
# Add .env file: MONGO_URI=<your MongoDB URI>
npm start


### Frontend
cd frontend
npm install
npm run dev



API Endpoint
GET /api/data?topic=oil&end_year=2022&country=India



Deployment
Backend: Render
Frontend: Vercel


Author
Neha