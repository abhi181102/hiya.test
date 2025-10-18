# Deployment Instructions

## Heroku Deployment

### Prerequisites
1. Install Heroku CLI
2. Create a Heroku account
3. Set up MongoDB Atlas database

### Steps

1. **Login to Heroku**
   ```bash
   heroku login
   ```

2. **Create Heroku App**
   ```bash
   heroku create your-contact-manager-api
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI="your-mongodb-atlas-connection-string"
   heroku config:set NODE_ENV="production"
   ```

4. **Deploy to Heroku**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push heroku main
   ```

5. **Open the App**
   ```bash
   heroku open
   ```

## Azure Deployment

### Prerequisites
1. Install Azure CLI
2. Create an Azure account
3. Set up MongoDB Atlas database

### Steps

1. **Login to Azure**
   ```bash
   az login
   ```

2. **Create Resource Group**
   ```bash
   az group create --name contact-manager-rg --location eastus
   ```

3. **Create App Service Plan**
   ```bash
   az appservice plan create --name contact-manager-plan --resource-group contact-manager-rg --sku FREE
   ```

4. **Create Web App**
   ```bash
   az webapp create --resource-group contact-manager-rg --plan contact-manager-plan --name your-contact-manager-api --runtime "NODE|18-lts"
   ```

5. **Set Environment Variables**
   ```bash
   az webapp config appsettings set --resource-group contact-manager-rg --name your-contact-manager-api --settings MONGODB_URI="your-mongodb-atlas-connection-string" NODE_ENV="production"
   ```

6. **Deploy Code**
   ```bash
   # Using Azure CLI
   az webapp deployment source config --resource-group contact-manager-rg --name your-contact-manager-api --repo-url https://github.com/yourusername/your-repo --branch main --manual-integration
   
   # Or using Git
   git remote add azure https://your-app.scm.azurewebsites.net:443/your-app.git
   git push azure main
   ```

## MongoDB Atlas Setup

1. **Create Account**: Go to [mongodb.com](https://www.mongodb.com) and create an account
2. **Create Cluster**: Create a new cluster (free tier available)
3. **Create Database User**: 
   - Go to Database Access
   - Add new user with read/write permissions
4. **Whitelist IP**: 
   - Go to Network Access
   - Add IP address (0.0.0.0/0 for all IPs, or specific IPs)
5. **Get Connection String**:
   - Go to Clusters
   - Click Connect
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

## Environment Variables

Create a `.env` file locally with:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/contact-manager?retryWrites=true&w=majority
PORT=3000
NODE_ENV=development
```

For production deployment, set these as environment variables in your hosting platform.

## Testing Deployment

After deployment, test your API endpoints:

1. **Health Check**: `GET https://your-app-url.herokuapp.com/contacts`
2. **Create Contact**: `POST https://your-app-url.herokuapp.com/contacts`
3. **Filter Contacts**: `GET https://your-app-url.herokuapp.com/contacts?lastname=Doe`

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist settings
   - Ensure database user has correct permissions

2. **Port Issues**
   - Heroku automatically sets PORT environment variable
   - Azure uses PORT 80/443
   - Update your code to use `process.env.PORT || 3000`

3. **Build Failures**
   - Check package.json dependencies
   - Ensure all required packages are listed
   - Verify Node.js version compatibility

### Logs

**Heroku**:
```bash
heroku logs --tail
```

**Azure**:
```bash
az webapp log tail --resource-group contact-manager-rg --name your-contact-manager-api
```
