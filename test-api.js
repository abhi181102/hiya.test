/**
 * API Test Script
 * Simple test script to verify all CRUD operations work correctly
 * Run this after starting the server to test the endpoints
 */

const http = require('http');

const baseURL = 'http://localhost:3000';
let createdContactId = '';

// Helper function to make HTTP requests
function makeRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const parsedBody = JSON.parse(body);
          resolve({ status: res.statusCode, data: parsedBody });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });
    
    req.on('error', reject);
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

// Test functions
async function testCreateContact() {
  console.log('Testing POST /contacts...');
  
  const contactData = {
    firstName: 'John',
    lastName: 'Doe',
    emailAddress: 'john.doe@test.com',
    phoneNumber: '555-1234',
    addressLine1: '123 Main St',
    province: 'Ontario',
    postcode: 'K1A 0A6',
    country: 'Canada'
  };
  
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/contacts',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const result = await makeRequest(options, contactData);
  console.log('Status:', result.status);
  console.log('Response:', result.data);
  
  if (result.data.success && result.data.data) {
    createdContactId = result.data.data._id;
    console.log('Created contact ID:', createdContactId);
  }
  
  return result.status === 201;
}

async function testGetAllContacts() {
  console.log('\nTesting GET /contacts...');
  
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/contacts',
    method: 'GET'
  };
  
  const result = await makeRequest(options);
  console.log('Status:', result.status);
  console.log('Response:', result.data);
  
  return result.status === 200;
}

async function testFilterContacts() {
  console.log('\nTesting GET /contacts?lastname=Doe...');
  
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/contacts?lastname=Doe',
    method: 'GET'
  };
  
  const result = await makeRequest(options);
  console.log('Status:', result.status);
  console.log('Response:', result.data);
  
  return result.status === 200;
}

async function testUpdateContact() {
  if (!createdContactId) {
    console.log('\nSkipping update test - no contact ID available');
    return false;
  }
  
  console.log('\nTesting PUT /contacts/' + createdContactId + '...');
  
  const updateData = {
    firstName: 'Jane',
    phoneNumber: '555-5678'
  };
  
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/contacts/' + createdContactId,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const result = await makeRequest(options, updateData);
  console.log('Status:', result.status);
  console.log('Response:', result.data);
  
  return result.status === 200;
}

async function testDeleteContact() {
  if (!createdContactId) {
    console.log('\nSkipping delete test - no contact ID available');
    return false;
  }
  
  console.log('\nTesting DELETE /contacts/' + createdContactId + '...');
  
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/contacts/' + createdContactId,
    method: 'DELETE'
  };
  
  const result = await makeRequest(options);
  console.log('Status:', result.status);
  console.log('Response:', result.data);
  
  return result.status === 200;
}

// Run all tests
async function runTests() {
  console.log('Starting API tests...\n');
  
  try {
    const results = {
      create: await testCreateContact(),
      getAll: await testGetAllContacts(),
      filter: await testFilterContacts(),
      update: await testUpdateContact(),
      delete: await testDeleteContact()
    };
    
    console.log('\n=== Test Results ===');
    console.log('Create Contact:', results.create ? 'PASS' : 'FAIL');
    console.log('Get All Contacts:', results.getAll ? 'PASS' : 'FAIL');
    console.log('Filter Contacts:', results.filter ? 'PASS' : 'FAIL');
    console.log('Update Contact:', results.update ? 'PASS' : 'FAIL');
    console.log('Delete Contact:', results.delete ? 'PASS' : 'FAIL');
    
    const passedTests = Object.values(results).filter(Boolean).length;
    const totalTests = Object.keys(results).length;
    
    console.log(`\nOverall: ${passedTests}/${totalTests} tests passed`);
    
  } catch (error) {
    console.error('Test error:', error.message);
  }
}

// Run tests if this script is executed directly
if (require.main === module) {
  runTests();
}

module.exports = { runTests };
