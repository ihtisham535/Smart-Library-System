# Smart Library System

## Assignment Information

**Subject:** Full Stack Web Development Lab  
**Course Code:** CS-  
**Class:** BSCS (A)  
**Semester:** 5  
**Date:*01-01-26*   
**FM Name:** M. Rashaf Jamil  

## Submission Guideline


- Complete source code (frontend and backend)
- README.md file with setup and run instructions + Output screenshots
- GitHub repository link (written in a text file)

In case of any ambiguity, make suitable assumptions.

---

## Project Description

A Smart Library System built with the MERN stack (MongoDB, Express, React, Node.js) that allows librarians to manage a collection of books. The application enables users to:
- Add new books to the library
- View all available books
- Remove books from the collection

The system is implemented as a Single Page Application (SPA) with a responsive design that works on screens 320px and above.

## Project Structure

```
.
├── backend/              # Node.js/Express backend server
│   ├── config/          # Database configuration
│   ├── models/          # MongoDB models (Book.js)
│   ├── routes/          # API routes (books.js)
│   ├── middleware/      # Error handling middleware
│   ├── server.js        # Main server file
│   └── package.json     # Backend dependencies
│
└── frontend/            # React frontend application
    ├── src/
    │   ├── components/  # React components (BookForm, BookList)
    │   ├── services/    # API service functions (bookService.js)
    │   ├── App.jsx      # Main app component
    │   └── main.jsx     # Entry point
    └── package.json     # Frontend dependencies
```

## Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **CSS3** - Styling (responsive design)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB ( MongoDB Atlas account)

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend folder:
```env
MONGODB_URI=your_mongodb_connection_string_here
PORT=5000
FRONTEND_URL=http://localhost:5173
```

4. Get your MongoDB Atlas connection string:
   - **Detailed setup instructions:** See [MONGODB_ATLAS_SETUP.md](./MONGODB_ATLAS_SETUP.md) for step-by-step guide
   - **Quick setup:**
     - Sign up/Login at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
     - Create a free cluster
     - Create a database user (username and password)
     - Whitelist your IP address (use 0.0.0.0/0 for development)
     - Click "Connect" → "Connect your application"
     - Copy the connection string
     - Replace `<password>` with your database user password
     - Add `/librarydb` before `?` to specify database name
     - Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/librarydb?retryWrites=true&w=majority`

5. Update the `.env` file with your MongoDB connection string

6. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Create a `.env` file in the frontend folder if backend runs on different URL:
```env
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or the port Vite assigns)

## How to Run the Application

1. **Start the Backend:**
   - Open a terminal
   - Navigate to `backend` folder
   - Run `npm start`
   - Wait for "Server is running on port 5000" message

2. **Start the Frontend:**
   - Open another terminal
   - Navigate to `frontend` folder
   - Run `npm run dev`
   - Open the URL shown in terminal (usually `http://localhost:5173`)

3. **Use the Application:**
   - Fill in the book form with:
     - Book Title
     - Author Name
     - ISBN Number
     - Publication Year
   - Click "Add Book" to add a book
   - View all books in the library below the form
   - Click "Delete" button to remove a book

## API Endpoints

### Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Retrieve all books from the database |
| POST | `/api/books` | Add a new book to the database |
| DELETE | `/api/books/:id` | Remove a book by its ID |

### Request/Response Examples

**GET /api/books**
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

**POST /api/books**
```json
// Request Body
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "978-0-7432-7356-5",
  "year": 1925
}

// Response
{
  "success": true,
  "message": "Book added successfully",
  "data": { ... }
}
```

**DELETE /api/books/:id**
```json
{
  "success": true,
  "message": "Book deleted successfully",
  "data": { ... }
}
```

## Features Implemented

### Frontend (React SPA)
- ✅ Functional component for book entry form with all required fields
- ✅ Functional component to display books in card format
- ✅ Proper component structure with props passing
- ✅ Mobile-responsive layout (works on 320px and above)
- ✅ Styled form with proper spacing, borders, and visual hierarchy
- ✅ Delete button with hover effects
- ✅ useState hook for form inputs and book list
- ✅ useEffect hook to fetch books on component mount
- ✅ Dynamic UI updates without page reload

### Backend (Node.js + Express)
- ✅ Express server configured on port 5000
- ✅ body-parser middleware for JSON parsing
- ✅ CORS middleware for cross-origin requests
- ✅ POST route `/api/books` to add new books
- ✅ GET route `/api/books` to retrieve all books
- ✅ DELETE route `/api/books/:id` to remove books
- ✅ MongoDB connection using Mongoose
- ✅ Book schema with fields: title, author, isbn, year
- ✅ Try-catch blocks for error handling
- ✅ User-friendly error messages

### Code Quality
- ✅ Meaningful comments explaining key logic
- ✅ Proper error handling in both frontend and backend
- ✅ Clean code structure and organization

## Error Handling

The application includes comprehensive error handling:
- **Backend:** Try-catch blocks in all routes with appropriate HTTP status codes
- **Frontend:** Error messages displayed to users for failed operations
- **Validation:** Required field validation and duplicate ISBN checking

## Responsive Design

The application is fully responsive and tested for:
- Desktop screens (1200px+)
- Tablets (768px - 1024px)
- Mobile devices (320px - 767px)
- Very small screens (320px minimum)

## GitHub Repository

[Add your GitHub repository link here]

Example format:
```
https://github.com/yourusername/smart-library-system
```

## Output Screenshots

[Add screenshots of your application here]
- Home page with book form
- Book list display
- Mobile responsive view
- Error messages (if any)

## Troubleshooting

### CORS Error
If you see a CORS error like "Access-Control-Allow-Origin", the backend is now configured to:
- Allow all localhost ports in development mode (5173, 5174, 3000, etc.)
- If you need to specify exact ports, set `FRONTEND_URL` in backend `.env` file

**Solution:** Restart your backend server after any CORS configuration changes.

### MongoDB Connection Error
- Make sure your `.env` file has the correct `MONGODB_URI`
- Verify your MongoDB Atlas cluster is running (not paused)
- Check that your IP address is whitelisted in MongoDB Atlas
- Ensure your database user password is correct
- See [MONGODB_ATLAS_SETUP.md](./MONGODB_ATLAS_SETUP.md) for detailed setup

### Port Already in Use
If port 5000 is already in use:
- Change `PORT=5000` to another port in backend `.env` file
- Update frontend `bookService.js` API_BASE_URL accordingly

### Books Not Loading
- Check browser console for errors
- Verify backend server is running on port 5000
- Check that MongoDB connection is successful (check backend console)
- Verify CORS is properly configured

## Notes

- The application uses MongoDB Atlas for data persistence
- All API calls are made using Axios
- The frontend is built with React and Vite
- The backend uses Express.js with Mongoose for database operations
- CORS is configured to allow all localhost ports in development
- For production, update CORS configuration to allow only specific origins

## License

ISC

---

**Note:** Make sure both backend and frontend servers are running simultaneously for the application to work properly. The backend must be started first to establish the MongoDB connection.
