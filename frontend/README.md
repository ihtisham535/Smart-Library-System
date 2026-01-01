# Frontend Application - Smart Library System

This is the React frontend for the Smart Library System built with Vite.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Make sure the backend server is running on `http://localhost:5000`

3. (Optional) Create a `.env` file if backend runs on different URL:
```env
VITE_API_URL=http://localhost:5000/api
```

4. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port Vite assigns)

## Features

- **Book Entry Form** - Add new books with:
  - Book Title
  - Author Name
  - ISBN Number
  - Publication Year

- **Book List Display** - View all books in card format with:
  - Book details (title, author, ISBN, year)
  - Delete functionality for each book

- **Responsive Design** - Works on all screen sizes (320px and above)
- **Dynamic Updates** - UI updates without page reload
- **Error Handling** - User-friendly error messages
- **Modern UI** - Clean and intuitive interface

## Components

- **App.jsx** - Main application component managing state
- **BookForm.jsx** - Form component for adding new books
- **BookList.jsx** - Component for displaying books in card format

## Services

- **bookService.js** - API service functions for:
  - Fetching all books (GET)
  - Adding a new book (POST)
  - Deleting a book (DELETE)

## Styling

- Responsive CSS with mobile-first approach
- Custom styling for forms and cards
- Hover effects and transitions
- Works on screens 320px and above
