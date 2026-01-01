import './BookList.css';

function BookList({ books, onDeleteBook, loading }) {
  // Handle delete button click
  const handleDelete = async (bookId) => {
    // Confirm deletion
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await onDeleteBook(bookId);
      } catch (error) {
        alert('Failed to delete book. Please try again.');
      }
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="book-list-container">
        <h2 className="list-title">Library Books</h2>
        <div className="loading-message">Loading books...</div>
      </div>
    );
  }

  // Show empty state
  if (books.length === 0) {
    return (
      <div className="book-list-container">
        <h2 className="list-title">Library Books</h2>
        <div className="empty-message">
          <p>No books in the library yet.</p>
          <p>Add your first book using the form above!</p>
        </div>
      </div>
    );
  }

  // Display books in card format
  return (
    <div className="book-list-container">
      <h2 className="list-title">Library Books ({books.length})</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <div className="book-card-header">
              <h3 className="book-title">{book.title}</h3>
            </div>
            <div className="book-card-body">
              <p className="book-info">
                <span className="info-label">Author:</span>
                <span className="info-value">{book.author}</span>
              </p>
              <p className="book-info">
                <span className="info-label">ISBN:</span>
                <span className="info-value">{book.isbn}</span>
              </p>
              <p className="book-info">
                <span className="info-label">Year:</span>
                <span className="info-value">{book.year}</span>
              </p>
            </div>
            <div className="book-card-footer">
              <button
                onClick={() => handleDelete(book._id)}
                className="btn btn-delete"
                title="Delete this book"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;

