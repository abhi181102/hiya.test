# Render Deployment Checklist

## Pre-Deployment Checklist ✅

### 1. Code Preparation
- [ ] All code is committed to Git repository
- [ ] Code is pushed to GitHub/GitLab/Bitbucket
- [ ] All dependencies are in package.json
- [ ] No sensitive data in code (use environment variables)

### 2. MongoDB Atlas Setup
- [ ] MongoDB Atlas account created
- [ ] Cluster created (free tier is fine)
- [ ] Database user created with read/write permissions
- [ ] IP whitelist includes 0.0.0.0/0 (all IPs)
- [ ] Connection string obtained

### 3. Environment Variables Ready
- [ ] MONGODB_URI (your Atlas connection string)
- [ ] NODE_ENV=production

## Render Deployment Steps

### 1. Create Render Account
- [ ] Go to [render.com](https://render.com)
- [ ] Sign up with GitHub/GitLab/Bitbucket
- [ ] Verify email if required

### 2. Create Web Service
- [ ] Click "New +" → "Web Service"
- [ ] Connect your repository
- [ ] Select the correct branch (usually main/master)

### 3. Configure Service
- [ ] **Name**: contact-manager-api (or your preferred name)
- [ ] **Environment**: Node
- [ ] **Build Command**: npm install
- [ ] **Start Command**: npm start
- [ ] **Instance Type**: Free (for testing) or Starter (for production)

### 4. Set Environment Variables
- [ ] Click "Advanced" → "Environment Variables"
- [ ] Add MONGODB_URI with your Atlas connection string
- [ ] Add NODE_ENV=production

### 5. Deploy
- [ ] Click "Create Web Service"
- [ ] Wait for build to complete (2-5 minutes)
- [ ] Check logs for any errors

## Post-Deployment Testing

### 1. Basic Health Check
- [ ] Visit your Render URL
- [ ] Should see Express default page or API response

### 2. API Endpoint Testing
- [ ] Test GET /contacts
- [ ] Test POST /contacts (create a contact)
- [ ] Test GET /contacts?lastname=X (filter)
- [ ] Test PUT /contacts/:id (update)
- [ ] Test DELETE /contacts/:id (delete)

### 3. Update Documentation
- [ ] Update README.md with your Render URL
- [ ] Test all links work correctly

## Troubleshooting Common Issues

### Build Failures
- [ ] Check package.json has all dependencies
- [ ] Verify Node.js version compatibility
- [ ] Check build logs in Render dashboard

### Database Connection Issues
- [ ] Verify MongoDB Atlas connection string
- [ ] Check IP whitelist includes all IPs (0.0.0.0/0)
- [ ] Ensure database user has correct permissions
- [ ] Check environment variables are set correctly

### Service Not Starting
- [ ] Verify start command is "npm start"
- [ ] Check package.json has start script
- [ ] Review application logs for errors

## Final Steps

### 1. Update Assignment Submission
- [ ] Update README.md with live site URL
- [ ] Commit and push changes
- [ ] Test all endpoints work on live site

### 2. Prepare for Submission
- [ ] GitHub repository is public
- [ ] Invite eduardojaime as collaborator
- [ ] Post repository link on Blackboard
- [ ] Post live site link on Blackboard

## Render URL Format
Your deployed application will be available at:
`https://your-app-name.onrender.com`

## Free Tier Limitations
- Services sleep after 15 minutes of inactivity
- Cold start takes ~30 seconds
- Limited to 750 hours per month
- Perfect for assignment submission!
