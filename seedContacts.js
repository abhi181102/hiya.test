// seedContacts.js
// Script to seed sample contacts into MongoDB Atlas
// Author: Hiyaben Hareshbhai Jayswal

require('dotenv').config();  // Load environment variables
const mongoose = require('mongoose');
const Contact = require('./models/contact'); // Contact model

// --------------------
// Connect to MongoDB
// --------------------
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ MongoDB Connected Successfully for Seeding'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// --------------------
// Sample contacts data
// --------------------
const sampleContacts = [
    {
        firstName: 'Hiya',
        middleName: 'H',
        lastName: 'Jayswal',
        emailAddress: 'jhiya@gmail.com',
        phoneNumber: '2499893705',
        addressLine1: '132 steel ln',
        addressLine2: 'Apt 4B',
        province: 'Ontario',
        postcode: 'L4N 6Z7',
        country: 'Canada'
    },
    {
        firstName: 'Dhruv',
        middleName: 'V',
        lastName: 'Patel',
        emailAddress: 'dpatel@gmail.com',
        phoneNumber: '2000053507',
        addressLine1: '113 gumm st',
        addressLine2: 'B 2',
        province: 'Ontario',
        postcode: 'L4M 812',
        country: 'Canada'
    },
    {
        firstName: 'Maya',
        middleName: 'H',
        lastName: 'Jayswal',
        emailAddress: 'jayswalm@gmail.com',
        phoneNumber: '8160635203',
        addressLine1: '541 main st',
        addressLine2: 'Maa A3',
        province: 'Ontario',
        postcode: 'L3R 4H1',
        country: 'Canada'
    }
];

// --------------------
// Seed function
// --------------------
const seedContacts = async () => {
    try {
        // Optional: Clear existing contacts first
        await Contact.deleteMany({});
        console.log('🗑️ Existing contacts cleared');

        // Insert sample contacts
        const inserted = await Contact.insertMany(sampleContacts);
        console.log(`✅ ${inserted.length} contacts inserted successfully`);

        // Close connection
        mongoose.connection.close();
    } catch (error) {
        console.error('❌ Error seeding contacts:', error);
    }
};

// Run the seed function
seedContacts();
