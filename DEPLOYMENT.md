# Contact Manager - Render Deployment Guide

## 🚀 Deploying to Render

### Prerequisites
1. MongoDB Atlas account with a cluster
2. Render account
3. GitHub repository with your code

### Step 1: MongoDB Atlas Setup
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Navigate to **Network Access**
3. Click **"Add IP Address"**
4. For production, add `0.0.0.0/0` (allows all IPs) OR add specific Render IPs
5. Get your connection string from **Database > Connect > Connect your application**

### Step 2: Render Deployment
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `contact-manager` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for production)

### Step 3: Environment Variables
Add these environment variables in Render:
- `NODE_ENV` = `production`
- `MONGODB_URI` = `your_mongodb_connection_string`
- `PORT` = (automatically set by Render)

### Step 4: Deploy
1. Click **"Create Web Service"**
2. Render will automatically build and deploy your app
3. Your app will be available at: `https://your-app-name.onrender.com`

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Seed the database
npm run seed
```

## 📋 API Endpoints

- `GET /` - Homepage
- `GET /health` - Health check (for Render)
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/:id` - Get contact by ID
- `POST /api/contacts` - Create new contact
- `PUT /api/contacts/:id` - Update contact
- `DELETE /api/contacts/:id` - Delete contact

## 🐛 Troubleshooting

### Common Issues:
1. **Database Connection Error**: Ensure MongoDB Atlas IP whitelist includes `0.0.0.0/0`
2. **Build Fails**: Check that all dependencies are in `package.json`
3. **App Crashes**: Check Render logs for error details

### Health Check:
Visit `https://your-app.onrender.com/health` to verify deployment status.
