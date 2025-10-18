/**
 * Contact Model
 * Defines the schema for contact information in MongoDB
 * Maps to the contacts collection in the database
 */

const mongoose = require('mongoose');

// Define the contact schema based on the requirements
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  middleName: {
    type: String,
    trim: true,
    maxlength: [50, 'Middle name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },
  emailAddress: {
    type: String,
    required: [true, 'Email address is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  phoneNumber: {
    type: String,
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  addressLine1: {
    type: String,
    trim: true,
    maxlength: [100, 'Address line 1 cannot exceed 100 characters']
  },
  addressLine2: {
    type: String,
    trim: true,
    maxlength: [100, 'Address line 2 cannot exceed 100 characters']
  },
  province: {
    type: String,
    trim: true,
    maxlength: [50, 'Province cannot exceed 50 characters']
  },
  postcode: {
    type: String,
    trim: true,
    maxlength: [20, 'Postcode cannot exceed 20 characters']
  },
  country: {
    type: String,
    trim: true,
    maxlength: [50, 'Country cannot exceed 50 characters']
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create and export the Contact model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
