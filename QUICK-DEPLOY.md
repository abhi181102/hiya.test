# Quick Render Deployment Guide

## Step 1: Connect GitHub Repository
1. Go to [render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your repository: `abhi181102/hiya.test`

## Step 2: Configure Deployment
- **Name**: `contact-manager-api`
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

## Step 3: Set Environment Variables
Add these in Render dashboard:
```
MONGODB_URI=mongodb+srv://abhi69432_db_user:abhi181102@cluster0.5ggwd0v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=production
```

## Step 4: Deploy!
Click "Create Web Service" and wait for deployment.

## Step 5: Test Your API
Once deployed, test these endpoints:
- `https://your-app-name.onrender.com/api/contacts`
- `https://your-app-name.onrender.com/api/contacts?lastname=Jayswal`

## Troubleshooting
- If deployment fails, check the logs in Render dashboard
- Make sure MongoDB Atlas allows connections from Render's IP ranges
- Verify all environment variables are set correctly

---
**Author**: Hiyaben Hareshbhai Jayswal
