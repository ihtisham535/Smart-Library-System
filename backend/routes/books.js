import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

// GET /api/books - Retrieve all books from the database
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json({
      success: true,
      count: books.length,
      data: books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch books',
      error: error.message
    });
  }
});

// POST /api/books - Add a new book to the database
router.post('/', async (req, res) => {
  try {
    const { title, author, isbn, year } = req.body;

    // Validate required fields
    if (!title || !author || !isbn || !year) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: title, author, isbn, and year'
      });
    }

    // Check if book with same ISBN already exists
    const existingBook = await Book.findOne({ isbn });
    if (existingBook) {
      return res.status(400).json({
        success: false,
        message: 'A book with this ISBN already exists'
      });
    }

    // Create new book
    const book = await Book.create({
      title,
      author,
      isbn,
      year: parseInt(year)
    });

    res.status(201).json({
      success: true,
      message: 'Book added successfully',
      data: book
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error.message
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to add book',
      error: error.message
    });
  }
});

// DELETE /api/books/:id - Remove a book by its ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Check if book exists
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    // Delete the book
    await Book.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: book
    });
  } catch (error) {
    // Handle invalid ObjectId format
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid book ID format'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to delete book',
      error: error.message
    });
  }
});

export default router;

