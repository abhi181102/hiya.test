@echo off
echo 🚀 Setting up Contact Manager API for Render deployment...

REM Create .env file from example
if not exist .env (
    echo 📝 Creating .env file from template...
    copy env.example .env
    echo ✅ .env file created!
    echo ⚠️  Please update .env with your MongoDB Atlas connection string
) else (
    echo ✅ .env file already exists
)

REM Install dependencies
echo 📦 Installing dependencies...
npm install

echo.
echo 🎉 Setup complete!
echo.
echo Next steps:
echo 1. Update .env with your MongoDB Atlas connection string
echo 2. Push your code to GitHub
echo 3. Follow RENDER-DEPLOYMENT.md for deployment instructions
echo.
echo To test locally:
echo   npm start
echo.
echo To test API endpoints:
echo   node test-api.js
pause
