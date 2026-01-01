import { useState } from 'react';
import './BookForm.css';

function BookForm({ onBookAdded }) {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    year: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Call the parent component's callback to add the book
      await onBookAdded(formData);
      
      // Reset form after successful submission
      setFormData({
        title: '',
        author: '',
        isbn: '',
        year: ''
      });
    } catch (err) {
      // Display user-friendly error message
      setError(err.response?.data?.message || 'Failed to add book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-form-container">
      <h2 className="form-title">Add New Book</h2>
      
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-group">
          <label htmlFor="title">Book Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter book title"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author Name *</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            placeholder="Enter author name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="isbn">ISBN Number *</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            required
            placeholder="Enter ISBN number"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Publication Year *</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            min="1000"
            max={new Date().getFullYear()}
            placeholder="Enter publication year"
            className="form-input"
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary" 
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
}

export default BookForm;

