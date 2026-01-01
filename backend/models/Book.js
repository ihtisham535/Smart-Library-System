import mongoose from 'mongoose';

// Define the Book schema with required fields
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true
  },
  isbn: {
    type: String,
    required: [true, 'ISBN number is required'],
    trim: true,
    unique: true
  },
  year: {
    type: Number,
    required: [true, 'Publication year is required'],
    min: [1000, 'Year must be a valid year'],
    max: [new Date().getFullYear(), 'Year cannot be in the future']
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Create and export the Book model
const Book = mongoose.model('Book', bookSchema);

export default Book;

