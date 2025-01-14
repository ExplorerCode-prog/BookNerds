import BookCard from "../components/BookCard";
import "../css/Home.css";
import { useState, useEffect } from "react";
import { getPopularBooks } from "../services/api";

function Home({ searchQuery }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularBook = async () => {
      try {
        const popularBook = await getPopularBooks();
        console.log(popularBook); // Log the response for debugging

        // Ensure the API response is an array
        if (Array.isArray(popularBook)) {
          setBooks(popularBook);
        } else {
          setError("Invalid data format received");
        }
      } catch (err) {
        setError("Failed to load popular books");
      } finally {
        setLoading(false);
      }
    };

    fetchPopularBook();
  }, []);

  useEffect(() => {
    if (!searchQuery) return; // Only search if there's a query
  
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const searchResults = await getSearchBook(searchQuery);
        if (Array.isArray(searchResults)) {
          setBooks(searchResults);
        } else {
          setError("Invalid data format received");
        }
      } catch (err) {
        setError("Failed to search books");
      } finally {
        setLoading(false);
      }
    };
  
    fetchBooks();
  }, [searchQuery]);
  

  return (
    <div className="home">
      <h1>Popular Books</h1>

      {/* Show loading state */}
      {loading && <p>Loading...</p>}

      {/* Show error state */}
      {error && <p>{error}</p>}

      <div className="book-grid">
        {!searchQuery && books.length === 0 && !loading && !error ? (
          <p>No books available</p>
        ) : (
          books.map((book) => (
            <BookCard book={book} key={book.id || book.title} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
