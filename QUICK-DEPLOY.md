# Quick Render Deployment Guide

## Your MongoDB Connection ✅
Your MongoDB Atlas is already configured and working:
- **Connection String**: `mongodb+srv://abhi69432_db_user:abhi181102@cluster0.5ggwd0v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
- **Status**: ✅ Connected and tested locally

## Render Deployment Steps

### 1. Go to Render.com
- Sign up/login at [render.com](https://render.com)
- Connect with your GitHub account

### 2. Create New Web Service
- Click "New +" → "Web Service"
- Connect repository: [https://github.com/abhi181102/hiya.test](https://github.com/abhi181102/hiya.test)
- Select branch: `master`

### 3. Configure Service
- **Name**: `contact-manager-api` (or your preferred name)
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: `Free` (for assignment) or `Starter` (better performance)

### 4. Set Environment Variables
Click "Advanced" → "Environment Variables" and add:

```
MONGODB_URI = mongodb+srv://abhi69432_db_user:abhi181102@cluster0.5ggwd0v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV = production
```

### 5. Deploy
- Click "Create Web Service"
- Wait 2-5 minutes for build and deployment
- Your API will be available at: `https://your-app-name.onrender.com`

## Test Your Deployment

Once deployed, test these endpoints:

1. **Health Check**: `GET https://your-app-name.onrender.com/contacts`
2. **Create Contact**: 
   ```bash
   curl -X POST https://your-app-name.onrender.com/contacts \
     -H "Content-Type: application/json" \
     -d '{
       "firstName": "John",
       "lastName": "Doe", 
       "emailAddress": "john.doe@example.com",
       "phoneNumber": "555-1234"
     }'
   ```
3. **Filter Contacts**: `GET https://your-app-name.onrender.com/contacts?lastname=Doe`

## Assignment Submission

After successful deployment:

1. **Update README.md** with your Render URL
2. **Commit and push** the update to GitHub
3. **Submit on Blackboard**:
   - GitHub Repository: [https://github.com/abhi181102/hiya.test](https://github.com/abhi181102/hiya.test)
   - Live Site: `https://your-app-name.onrender.com`

## Troubleshooting

### If deployment fails:
- Check build logs in Render dashboard
- Verify environment variables are set correctly
- Ensure MongoDB Atlas allows connections from all IPs (0.0.0.0/0)

### If API doesn't work:
- Check service logs in Render dashboard
- Verify MongoDB connection string is correct
- Test endpoints with proper HTTP methods

## Your Project Status ✅

- ✅ **GitHub Repository**: Connected and updated
- ✅ **MongoDB Atlas**: Connected and tested
- ✅ **Local Testing**: Server runs successfully
- ✅ **Code**: All CRUD endpoints implemented
- ✅ **Documentation**: Complete README and guides
- ⏳ **Render Deployment**: Ready to deploy
- ⏳ **Assignment Submission**: Ready after deployment
