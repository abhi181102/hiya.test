# Contact Manager API

A simple Web API application that integrates with MongoDB to perform CRUD operations on contact information.

## Description

This Contact Manager API provides a RESTful interface for managing contact information. It allows you to create, read, update, and delete contacts with comprehensive validation and error handling.

## Live Site

🚀 **Deployed Application**: [Your Render deployment URL will be added here]

**Deployment Platform**: Render.com

## Features

- **Full CRUD Operations**: Create, Read, Update, and Delete contacts
- **MongoDB Integration**: Uses Mongoose ODM for database operations
- **Data Validation**: Comprehensive validation for all contact fields
- **Error Handling**: Detailed error responses with appropriate HTTP status codes
- **CORS Support**: Cross-origin resource sharing enabled
- **Environment Configuration**: Secure database credentials management

## API Endpoints

### GET /contacts
- **Description**: List all contacts in the database
- **Query Parameters**: 
  - `lastname` (optional): Filter contacts by last name (case-insensitive)
- **Response**: JSON array of contacts

### GET /contacts?lastname=Smith
- **Description**: Filter contacts by last name
- **Response**: JSON array of filtered contacts

### POST /contacts
- **Description**: Add a new contact to the database
- **Request Body**: JSON object containing contact information
- **Required Fields**: firstName, lastName, emailAddress
- **Response**: Created contact object

### PUT /contacts/:_id
- **Description**: Update an existing contact
- **Parameters**: 
  - `_id`: MongoDB ObjectId of the contact to update
- **Request Body**: JSON object containing updated contact information
- **Response**: Updated contact object

### DELETE /contacts/:_id
- **Description**: Delete a contact from the database
- **Parameters**: 
  - `_id`: MongoDB ObjectId of the contact to delete
- **Response**: Deleted contact object

## Contact Data Model

```javascript
{
  firstName: String (required),
  middleName: String (optional),
  lastName: String (required),
  emailAddress: String (required, unique),
  phoneNumber: String (optional),
  addressLine1: String (optional),
  addressLine2: String (optional),
  province: String (optional),
  postcode: String (optional),
  country: String (optional),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## Installation & Setup

### Local Development

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd contact-manager-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `env.example` to `.env`
   - Update the MongoDB connection string with your credentials:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/contact-manager?retryWrites=true&w=majority
   PORT=3000
   NODE_ENV=development
   ```

4. **Start the application**
   ```bash
   npm start
   ```

### Render Deployment

For detailed deployment instructions, see [RENDER-DEPLOYMENT.md](RENDER-DEPLOYMENT.md)

**Quick Steps:**
1. Push your code to GitHub
2. Create a Render account
3. Connect your repository
4. Set environment variables (MONGODB_URI, NODE_ENV)
5. Deploy!

## MongoDB Setup

1. Create a MongoDB Atlas account at [mongodb.com](https://www.mongodb.com)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address
5. Get your connection string and update the `MONGODB_URI` in your `.env` file

## API Usage Examples

### Create a new contact
```bash
curl -X POST http://localhost:3000/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "emailAddress": "john.doe@example.com",
    "phoneNumber": "555-1234",
    "addressLine1": "123 Main St",
    "province": "Ontario",
    "postcode": "K1A 0A6",
    "country": "Canada"
  }'
```

### Get all contacts
```bash
curl http://localhost:3000/contacts
```

### Filter contacts by last name
```bash
curl http://localhost:3000/contacts?lastname=Doe
```

### Update a contact
```bash
curl -X PUT http://localhost:3000/contacts/[CONTACT_ID] \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Doe"
  }'
```

### Delete a contact
```bash
curl -X DELETE http://localhost:3000/contacts/[CONTACT_ID]
```

## Error Handling

The API provides comprehensive error handling with appropriate HTTP status codes:

- **200**: Success
- **201**: Created successfully
- **400**: Bad request (validation errors)
- **404**: Resource not found
- **500**: Internal server error

Error responses include detailed messages and validation errors when applicable.

## Technologies Used

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: Object Document Mapper
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Development

This project was created using the Express generator and follows RESTful API conventions. All code is well-documented with comments explaining functionality and implementation details.

## License

This project is created for educational purposes as part of COMP 3033 - Web Frameworks and APIs assignment.
