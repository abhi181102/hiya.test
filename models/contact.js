// models/contact.js
// Contact Schema for MongoDB Atlas
// Author: Hiyaben Hareshbhai Jayswal

const mongoose = require('mongoose');

// Define schema for a contact
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  addressLine1: String,
  addressLine2: String,
  province: String,
  postcode: String,
  country: String
}, { timestamps: true });

// Create model from schema
module.exports = mongoose.model('Contact', contactSchema);