# Render Deployment Instructions

## Prerequisites
1. Create a Render account at [render.com](https://render.com)
2. Set up MongoDB Atlas database
3. Have your project code in a Git repository (GitHub, GitLab, or Bitbucket)

## Steps for Render Deployment

### 1. Prepare Your Repository
Make sure your code is pushed to a Git repository (GitHub recommended).

### 2. Create MongoDB Atlas Database
1. Go to [mongodb.com](https://www.mongodb.com) and create an account
2. Create a new cluster (free tier available)
3. Create a database user with read/write permissions
4. Whitelist all IP addresses (0.0.0.0/0) for Render
5. Get your connection string

### 3. Deploy on Render

1. **Login to Render** and click "New +"

2. **Select "Web Service"**

3. **Connect your repository**:
   - Choose your Git provider (GitHub, GitLab, etc.)
   - Select your repository
   - Choose the branch (usually `main` or `master`)

4. **Configure the service**:
   - **Name**: `contact-manager-api` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free` (for testing) or `Starter` (for production)

5. **Set Environment Variables**:
   - Click "Advanced" → "Environment Variables"
   - Add the following:
     ```
     MONGODB_URI = your-mongodb-atlas-connection-string
     NODE_ENV = production
     ```

6. **Deploy**:
   - Click "Create Web Service"
   - Render will automatically build and deploy your application

### 4. Get Your Live URL
After deployment, Render will provide you with a URL like:
`https://your-app-name.onrender.com`

## Environment Variables for Render

Set these in your Render dashboard:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/contact-manager?retryWrites=true&w=majority
NODE_ENV=production
```

## Testing Your Deployment

Once deployed, test your API endpoints:

1. **Health Check**: 
   ```
   GET https://your-app-name.onrender.com/contacts
   ```

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

3. **Filter Contacts**:
   ```
   GET https://your-app-name.onrender.com/contacts?lastname=Doe
   ```

## Render-Specific Considerations

### Free Tier Limitations
- Services sleep after 15 minutes of inactivity
- Cold start takes ~30 seconds
- Limited to 750 hours per month

### Performance Tips
- Use `Starter` plan for better performance
- Consider upgrading for production use

### Automatic Deployments
- Render automatically redeploys when you push to your main branch
- You can disable auto-deploy in settings if needed

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check that `package.json` has correct dependencies
   - Ensure Node.js version compatibility
   - Check build logs in Render dashboard

2. **Database Connection Issues**:
   - Verify MongoDB Atlas connection string
   - Check IP whitelist (should include 0.0.0.0/0)
   - Ensure database user has correct permissions

3. **Service Not Starting**:
   - Check start command is correct (`npm start`)
   - Verify `package.json` has start script
   - Check application logs in Render dashboard

### Logs and Monitoring
- View logs in Render dashboard under "Logs" tab
- Monitor service health and performance
- Set up alerts for service downtime

## Update README.md

After deployment, update your README.md with your Render URL:

```markdown
## Live Site

🚀 **Deployed Application**: https://your-app-name.onrender.com
```

## Cost Considerations

- **Free Tier**: Good for development and testing
- **Starter Plan** ($7/month): Better performance, no sleep mode
- **Professional Plans**: For production applications with high traffic
