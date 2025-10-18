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
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// --------------------
// Routes
// --------------------
const contactsRouter = require('./routes/contacts');
app.use('/api/contacts', contactsRouter);

// --------------------
// Root Route
// --------------------
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;