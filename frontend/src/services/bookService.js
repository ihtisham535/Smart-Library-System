import axios from 'axios';

// API base URL - adjust if your backend runs on a different port
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Book service functions

// Fetch all books from the backend
export const getAllBooks = async () => {
  try {
    const response = await api.get('/books');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add a new book to the library
export const addBook = async (bookData) => {
  try {
    const response = await api.post('/books', bookData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a book by its ID
export const deleteBook = async (bookId) => {
  try {
    const response = await api.delete(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

