# Contact Manager API - Render Deployment Configuration

## Environment Variables Required

Set these in your Render dashboard:

```
MONGODB_URI=mongodb+srv://abhi69432_db_user:abhi181102@cluster0.5ggwd0v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=production
PORT=10000
```

## Build Command
```
npm install
```

## Start Command
```
npm start
```

## Deployment Steps

1. Connect your GitHub repository to Render
2. Set the environment variables above
3. Deploy!

## API Endpoints

- `GET /api/contacts` - List all contacts
- `GET /api/contacts?lastname=Smith` - Filter by last name
- `POST /api/contacts` - Create new contact
- `PUT /api/contacts/:id` - Update contact
- `DELETE /api/contacts/:id` - Delete contact

## Database Seeding

After deployment, you can seed the database by running:
```bash
npm run seed
```

## Author
Hiyaben Hareshbhai Jayswal
