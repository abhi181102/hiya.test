/**
 * Seed Script for Contact Manager API
 * This script populates the MongoDB database with sample contact data
 * Run with: npm run seed
 */

require('dotenv').config();
const mongoose = require('mongoose');
const Contact = require('./models/Contact');

// Sample contact data
const sampleContacts = [
  {
    firstName: 'John',
    middleName: 'Michael',
    lastName: 'Smith',
    emailAddress: 'john.smith@email.com',
    phoneNumber: '555-0101',
    addressLine1: '123 Main Street',
    addressLine2: 'Apt 4B',
    province: 'Ontario',
    postcode: 'K1A 0A6',
    country: 'Canada'
  },
  {
    firstName: 'Sarah',
    middleName: 'Elizabeth',
    lastName: 'Johnson',
    emailAddress: 'sarah.johnson@email.com',
    phoneNumber: '555-0102',
    addressLine1: '456 Oak Avenue',
    addressLine2: '',
    province: 'British Columbia',
    postcode: 'V6B 1A1',
    country: 'Canada'
  },
  {
    firstName: 'Michael',
    middleName: 'David',
    lastName: 'Brown',
    emailAddress: 'michael.brown@email.com',
    phoneNumber: '555-0103',
    addressLine1: '789 Pine Road',
    addressLine2: 'Suite 200',
    province: 'Alberta',
    postcode: 'T2P 1J9',
    country: 'Canada'
  },
  {
    firstName: 'Emily',
    middleName: 'Grace',
    lastName: 'Davis',
    emailAddress: 'emily.davis@email.com',
    phoneNumber: '555-0104',
    addressLine1: '321 Elm Street',
    addressLine2: '',
    province: 'Quebec',
    postcode: 'H1A 1A1',
    country: 'Canada'
  },
  {
    firstName: 'David',
    middleName: 'Robert',
    lastName: 'Wilson',
    emailAddress: 'david.wilson@email.com',
    phoneNumber: '555-0105',
    addressLine1: '654 Maple Drive',
    addressLine2: 'Unit 15',
    province: 'Manitoba',
    postcode: 'R3C 1A1',
    country: 'Canada'
  },
  {
    firstName: 'Lisa',
    middleName: 'Marie',
    lastName: 'Anderson',
    emailAddress: 'lisa.anderson@email.com',
    phoneNumber: '555-0106',
    addressLine1: '987 Cedar Lane',
    addressLine2: '',
    province: 'Saskatchewan',
    postcode: 'S4P 1A1',
    country: 'Canada'
  },
  {
    firstName: 'Robert',
    middleName: 'James',
    lastName: 'Taylor',
    emailAddress: 'robert.taylor@email.com',
    phoneNumber: '555-0107',
    addressLine1: '147 Birch Boulevard',
    addressLine2: 'Apt 8C',
    province: 'Nova Scotia',
    postcode: 'B3H 1A1',
    country: 'Canada'
  },
  {
    firstName: 'Jennifer',
    middleName: 'Ann',
    lastName: 'Thomas',
    emailAddress: 'jennifer.thomas@email.com',
    phoneNumber: '555-0108',
    addressLine1: '258 Spruce Street',
    addressLine2: '',
    province: 'New Brunswick',
    postcode: 'E3B 1A1',
    country: 'Canada'
  },
  {
    firstName: 'Christopher',
    middleName: 'Lee',
    lastName: 'Jackson',
    emailAddress: 'chris.jackson@email.com',
    phoneNumber: '555-0109',
    addressLine1: '369 Willow Way',
    addressLine2: 'Suite 100',
    province: 'Newfoundland',
    postcode: 'A1A 1A1',
    country: 'Canada'
  },
  {
    firstName: 'Amanda',
    middleName: 'Rose',
    lastName: 'White',
    emailAddress: 'amanda.white@email.com',
    phoneNumber: '555-0110',
    addressLine1: '741 Ash Avenue',
    addressLine2: '',
    province: 'Prince Edward Island',
    postcode: 'C1A 1A1',
    country: 'Canada'
  }
];

// Connect to MongoDB
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/contact-manager';
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected for seeding');
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    process.exit(1);
  }
};

// Seed the database
const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Clear existing contacts
    await Contact.deleteMany({});
    console.log('🗑️  Cleared existing contacts');
    
    // Insert sample contacts
    const insertedContacts = await Contact.insertMany(sampleContacts);
    console.log(`✅ Successfully inserted ${insertedContacts.length} contacts`);
    
    // Display inserted contacts
    console.log('\n📋 Inserted Contacts:');
    insertedContacts.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.emailAddress}`);
    });
    
    console.log('\n🎉 Database seeding completed successfully!');
    console.log('\n📊 Database Statistics:');
    console.log(`   Total Contacts: ${await Contact.countDocuments()}`);
    
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
  } finally {
    // Close database connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
};

// Main execution
const main = async () => {
  console.log('🚀 Contact Manager API - Database Seeder');
  console.log('=====================================\n');
  
  await connectDB();
  await seedDatabase();
};

// Run the seeder
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { seedDatabase, sampleContacts };