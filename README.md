# 🚆 Find My Train

A modern, full-stack, responsive web application for searching trains, and finding routes between stations.

---

## 🌐 Live Website
  
   Primary - https://find-my-train.vercel.app/
  
   Mirror   - https://antigravity-railway-tracking.web.app
  

---

## ✨ Features

- **Train Search**: Real-time auto-suggestions for train names and numbers  
- **Route Search**: Find trains between source and destination stations  
- **Station Info**: Search for station details including platform count  
- **Modern UI**: Clean design, dark mode support, and smooth animations  

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)  
- Tailwind CSS v3  
- Axios  
- Framer Motion  
- Lucide React  

### Backend
- Node.js  
- Express.js  

### Data
- Mock JSON files simulating a live railway system  

---

## 🚀 How to Run Locally

### 1. Start the Backend Server

Open a terminal and navigate to the `backend` folder:

```bash
cd backend
npm install
npm start
```

The backend server will start on:  
👉 http://localhost:5000  

---

### 2. Start the Frontend Application

Open a new terminal and navigate to the `frontend` folder:

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on:  
👉 http://localhost:5173  

---

## 📁 Folder Structure

```
Find-My-Train/
│
├── backend/
│   ├── server.js          # Express app entry point
│   ├── routes/
│   │   └── api.js         # API endpoints
│   └── data/              # Mock JSON data
│
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI elements
│   │   ├── pages/         # Application routes
│   │   └── App.jsx        # Root component
│
└── README.md
```

---

## ⚙️ Environment Variables (Optional)

Create a `.env` file in frontend:

```
VITE_API_BASE_URL=http://localhost:5000
```

---

## 🚀 Future Improvements

- Integration with real railway APIs  
- Live train tracking  
- Save favorite routes  
- Mobile app version  

---

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch  
3. Commit your changes  
4. Push to your branch  
5. Open a Pull Request  

---

## 👨‍💻 Author

**Shubham Gaonkar**  
Computer Engineering Student  

---

⭐ If you like this project, give it a star!

