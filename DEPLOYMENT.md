# Deployment Guide

Follow these steps to make your "Find My Train" website live.

## 1. Prepare Your Repository
Make sure all your changes are committed and pushed to a GitHub repository.

## 2. Deploy the Backend (Express Server)
We recommend using **Render** or **Railway** for the backend.

### Using Render:
1. Log in to [Render](https://render.com/).
2. Create a **New Web Service**.
3. Connect your GitHub repository.
4. Set the following configurations:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Note down your service URL (e.g., `https://antigravity-backend.onrender.com`).

## 3. Deploy the Frontend (React App)
We recommend using **Vercel** for the frontend.

### Using Vercel:
1. Log in to [Vercel](https://vercel.com/).
2. Click **New Project** and select your GitHub repository.
3. Configure the Project:
   - **Root Directory**: `frontend`
   - **Framework Preset**: `Vite`
   - **Environment Variables**: Add a new variable:
     - **Key**: `VITE_API_URL`
     - **Value**: `[YOUR_BACKEND_URL_FROM_STEP_2]` (no trailing slash)
4. Click **Deploy**.

## 4. Final Steps
- Once both are deployed, visit your Vercel URL.
- Test the search functionality to ensure the frontend is communicating with your live backend.

---
**Note**: Since your data is currently stored in `json` files inside the `backend/data` folder, updates to the registry will require a new deployment or a persistent disk volume if you plan to add data dynamically via the web.
