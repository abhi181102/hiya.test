// routes/contacts.js
// API Routes for Contact CRUD operations
// Author: Hiyaben Hareshbhai Jayswal

const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// --------------------
// GET all contacts (with optional lastname filter)
// --------------------
router.get('/', async (req, res) => {
  try {
    let query = {};
    
    // Filter by lastname if provided
    if (req.query.lastname) {
      query.lastName = { $regex: req.query.lastname, $options: 'i' };
    }
    
    const contacts = await Contact.find(query);
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error });
  }
});

// --------------------
// GET contact by ID
// --------------------
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact', error });
  }
});

// --------------------
// POST - Create new contact
// --------------------
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: '✅ Contact created successfully', contact: newContact });
  } catch (error) {
    res.status(400).json({ message: '❌ Error creating contact', error });
  }
});

// --------------------
// PUT - Update contact
// --------------------
router.put('/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: '✅ Contact updated successfully', contact: updatedContact });
  } catch (error) {
    res.status(400).json({ message: '❌ Error updating contact', error });
  }
});

// --------------------
// DELETE - Remove contact
// --------------------
router.delete('/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: '🗑️ Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: '❌ Error deleting contact', error });
  }
});

module.exports = router;