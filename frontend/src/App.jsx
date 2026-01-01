import { useState, useEffect } from 'react';
import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import { getAllBooks, addBook, deleteBook } from './services/bookService';

function App() {
  // State to manage books list
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch books from backend on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to fetch all books from the backend
  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await getAllBooks();
      setBooks(response.data || []);
    } catch (err) {
      setError('Failed to load books. Please try again.');
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle adding a new book
  const handleBookAdded = async (bookData) => {
    try {
      setError('');
      const response = await addBook(bookData);
      
      // Update the books list with the new book (add to beginning)
      setBooks([response.data, ...books]);
      
      // Show success message (optional)
      alert('Book added successfully!');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to add book. Please try again.';
      setError(errorMessage);
      throw err; // Re-throw to let BookForm handle it
    }
  };

  // Handle deleting a book
  const handleDeleteBook = async (bookId) => {
    try {
      setError('');
      await deleteBook(bookId);
      
      // Update the books list by removing the deleted book
      setBooks(books.filter(book => book._id !== bookId));
      
      // Show success message (optional)
      alert('Book deleted successfully!');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to delete book. Please try again.';
      setError(errorMessage);
      throw err; // Re-throw to let BookList handle it
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📚 Smart Library System</h1>
        <p>Manage your book collection efficiently</p>
      </header>

      {error && <div className="global-error">{error}</div>}

      <main className="app-main">
        <BookForm onBookAdded={handleBookAdded} />
        <BookList 
          books={books} 
          onDeleteBook={handleDeleteBook}
          loading={loading}
        />
      </main>
    </div>
  );
}

export default App;
