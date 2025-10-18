# COMP3033 - Assignment 1: Contact Manager

**Author:** Hiyaben Hareshbhai Jayswal  
**Course:** Node.js Programming (COMP3033)    

---

## 🧠 Overview
A RESTful API built with Node.js, Express, and MongoDB Atlas that allows users to perform CRUD operations on a list of contacts.

---

## ⚙️ Features
- Create, Read, Update, and Delete contacts
- MongoDB Atlas cloud database
- Seed script to insert sample data
- Simple static homepage with project info
- Tested with Postman

---

## 🧩 Technologies
- Node.js + Express  
- MongoDB Atlas + Mongoose  
- CORS + Morgan + Dotenv  

---

## 🚀 How to Run
```bash
npm install
npm run seed     # seeds 3 contacts
npm start        # start the server
```

---

## 🌐 Live Deployment

🚀 **Deployed Application**: [Contact Manager API on Render](https://contact-manager-api.onrender.com)

**Deployment Platform**: Render.com  
**GitHub Repository**: <https://github.com/abhi181102/hiya.test>

---

## 📡 API Endpoints

### GET /api/contacts
- **Description**: List all contacts
- **Query Parameters**: `lastname` (optional) - Filter by last name
- **Example**: `GET /api/contacts?lastname=Jayswal`

### POST /api/contacts
- **Description**: Create a new contact
- **Body**: JSON object with contact information

### PUT /api/contacts/:id
- **Description**: Update an existing contact
- **Parameters**: `id` - MongoDB ObjectId

### DELETE /api/contacts/:id
- **Description**: Delete a contact
- **Parameters**: `id` - MongoDB ObjectId

---

## 🗄️ Sample Data
The database is seeded with 3 sample contacts:
1. **Hiya H Jayswal** - jhiya@gmail.com
2. **Dhruv V Patel** - dpatel@gmail.com
3. **Maya H Jayswal** - jayswalm@gmail.com