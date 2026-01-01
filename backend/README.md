# Backend Server - Smart Library System

This is the backend server for the Smart Library System using MongoDB and Express.js.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend folder with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string_here
PORT=5000
FRONTEND_URL=http://localhost:5173
```

3. Get your MongoDB connection string:
   - **For MongoDB Atlas:**
     - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
     - Create a free cluster if you don't have one
     - Click "Connect" on your cluster
     - Choose "Connect your application"
     - Copy the connection string
     - Replace `<password>` with your database password
     - Replace `<dbname>` with your database name (e.g., `librarydb`)
   
   - **For Local MongoDB:**
     - Install MongoDB locally
     - Use connection string: `mongodb://localhost:27017/librarydb`

4. Update the `.env` file with your MongoDB connection string.

5. Run the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## API Endpoints

### GET /api/books
Retrieve all books from the database.

Response:
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "...",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "isbn": "978-0-7432-7356-5",
      "year": 1925,
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

### POST /api/books
Add a new book to the database.

Request body:
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "978-0-7432-7356-5",
  "year": 1925
}
```

Response:
```json
{
  "success": true,
  "message": "Book added successfully",
  "data": {
    "_id": "...",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0-7432-7356-5",
    "year": 1925,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### DELETE /api/books/:id
Remove a book by its ID.

Response:
```json
{
  "success": true,
  "message": "Book deleted successfully",
  "data": { ... }
}
```

## Error Handling

All routes include comprehensive error handling with try-catch blocks:
- Validation errors (400)
- Not found errors (404)
- Server errors (500)
- User-friendly error messages

## Database Schema

The Book model includes the following fields:
- `title` (String, required) - Book title
- `author` (String, required) - Author name
- `isbn` (String, required, unique) - ISBN number
- `year` (Number, required) - Publication year
- `createdAt` (Date) - Timestamp
- `updatedAt` (Date) - Timestamp
