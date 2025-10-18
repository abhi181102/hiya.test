/**
 * Contacts Routes
 * Implements all CRUD operations for the Contact Manager API
 * Endpoints: GET, POST, PUT, DELETE /contacts
 */

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

/**
 * GET /contacts
 * Lists all contacts in the database
 * Optional query parameter: lastname (filters by last name)
 */
router.get('/', async (req, res) => {
  try {
    let query = {};
    
    // Filter by last name if provided in query parameters
    if (req.query.lastname) {
      query.lastName = { $regex: req.query.lastname, $options: 'i' }; // Case-insensitive search
    }
    
    // Find contacts based on query
    const contacts = await Contact.find(query).sort({ lastName: 1, firstName: 1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts',
      error: error.message
    });
  }
});

/**
 * POST /contacts
 * Adds a new contact to the database
 * Expects JSON object containing contact information
 */
router.post('/', async (req, res) => {
  try {
    // Validate required fields
    const { firstName, lastName, emailAddress } = req.body;
    
    if (!firstName || !lastName || !emailAddress) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: firstName, lastName, and emailAddress are required'
      });
    }
    
    // Create new contact
    const contact = new Contact(req.body);
    const savedContact = await contact.save();
    
    res.status(201).json({
      success: true,
      message: 'Contact created successfully',
      data: savedContact
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: errors
      });
    }
    
    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email address already exists'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error creating contact',
      error: error.message
    });
  }
});

/**
 * PUT /contacts/:_id
 * Updates an existing contact in the database
 * Expects contact ID in URL parameter and updated data in request body
 */
router.put('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const updateData = req.body;
    
    // Validate MongoDB ObjectId format
    if (!_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid contact ID format'
      });
    }
    
    // Find and update contact
    const contact = await Contact.findByIdAndUpdate(
      _id,
      updateData,
      { 
        new: true, // Return updated document
        runValidators: true // Run schema validators
      }
    );
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Contact updated successfully',
      data: contact
    });
  } catch (error) {
    console.error('Error updating contact:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: errors
      });
    }
    
    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email address already exists'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error updating contact',
      error: error.message
    });
  }
});

/**
 * DELETE /contacts/:_id
 * Deletes a contact from the database
 * Expects contact ID in URL parameter
 */
router.delete('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    
    // Validate MongoDB ObjectId format
    if (!_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid contact ID format'
      });
    }
    
    // Find and delete contact
    const contact = await Contact.findByIdAndDelete(_id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Contact deleted successfully',
      data: contact
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting contact',
      error: error.message
    });
  }
});

module.exports = router;
