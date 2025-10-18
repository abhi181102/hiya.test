/**
 * Database Configuration
 * This file contains the MongoDB connection configuration
 * Database credentials are stored in environment variables for security
 */

const mongoose = require('mongoose');

// MongoDB connection configuration
const connectDB = async () => {
  try {
    // Connection string from environment variables
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/contact-manager';
    
    // Connect to MongoDB
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
