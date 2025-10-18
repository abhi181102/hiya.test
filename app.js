// app.js
// Main Express application setup for COMP3033 Assignment 1
// Author: Hiyaben Hareshbhai Jayswal

require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// --------------------
// Middleware
// --------------------
app.use(logger('dev'));          // Logs HTTP requests
app.use(express.json());         // Parses incoming JSON
app.use(cors());                 // Enables CORS
app.use(express.static('public'));// Serves static files (like index.html)

// --------------------
// MongoDB Connection
// --------------------
if (!process.env.MONGODB_URI) {
  console.error('❌ MONGODB_URI environment variable is required');
  process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err.message);
  if (err.message.includes('whitelist')) {
    console.error('💡 Fix: Add your current IP address to MongoDB Atlas IP whitelist');
    console.error('   Visit: https://www.mongodb.com/docs/atlas/security-whitelist/');
    console.error('   For Render: Add 0.0.0.0/0 to allow all IPs (for production)');
  }
  if (process.env.NODE_ENV === 'production') {
    console.error('🚨 Production deployment failed due to database connection');
    process.exit(1);
  }
});

// --------------------
// Routes
// --------------------
const contactsRouter = require('./routes/contacts');
app.use('/api/contacts', contactsRouter);

// --------------------
// Health Check Route (for Render)
// --------------------
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// --------------------
// Root Route
// --------------------
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;