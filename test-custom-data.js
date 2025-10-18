/**
 * Quick API Test Script
 * Tests the API endpoints with the seeded dummy data
 */

const http = require('http');

const baseURL = 'http://localhost:3000';

// Test GET all contacts
function testGetAllContacts() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/contacts',
      method: 'GET'
    };
    
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const data = JSON.parse(body);
          console.log('✅ GET /contacts - Success!');
          console.log(`   Found ${data.count} contacts`);
          console.log(`   First contact: ${data.data[0].firstName} ${data.data[0].lastName}`);
          resolve(data);
        } catch (e) {
          console.log('❌ GET /contacts - Error parsing response');
          resolve(null);
        }
      });
    });
    
    req.on('error', (error) => {
      console.log('❌ GET /contacts - Connection error:', error.message);
      resolve(null);
    });
    
    req.end();
  });
}

// Test GET contacts filtered by last name
function testFilterContacts() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/contacts?lastname=Jayswal',
      method: 'GET'
    };
    
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const data = JSON.parse(body);
          console.log('✅ GET /contacts?lastname=Jayswal - Success!');
          console.log(`   Found ${data.count} contacts with last name "Jayswal"`);
          if (data.data.length > 0) {
            console.log(`   Contact: ${data.data[0].firstName} ${data.data[0].lastName}`);
          }
          resolve(data);
        } catch (e) {
          console.log('❌ GET /contacts?lastname=Jayswal - Error parsing response');
          resolve(null);
        }
      });
    });
    
    req.on('error', (error) => {
      console.log('❌ GET /contacts?lastname=Jayswal - Connection error:', error.message);
      resolve(null);
    });
    
    req.end();
  });
}

// Run tests
async function runTests() {
  console.log('🧪 Testing Contact Manager API with Custom Dummy Data');
  console.log('====================================================\n');
  
  await testGetAllContacts();
  console.log('');
  await testFilterContacts();
  
  console.log('\n🎉 API testing completed!');
  console.log('\n📋 Available contacts (by Hiyaben Hareshbhai Jayswal):');
  console.log('   • Hiya H Jayswal - jhiya@gmail.com (Ontario)');
  console.log('   • Dhruv V Patel - dpatel@gmail.com (Ontario)');
  console.log('   • Maya H Jayswal - jayswalm@gmail.com (Ontario)');
}

runTests();
