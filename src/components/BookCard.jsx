import "../css/BookCard.css";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <div className="book-image">
        <img 
          src={book.book_image}  
          alt={book.title || 'Book Cover'}
        />
      </div>
      <div className="book-info">
        <h1>{book.title}</h1>  {/* book_title field */}
        <h2>{book.author}</h2>  {/* book_author field */}
      </div>
    </div>
  );
}

export default BookCard;
