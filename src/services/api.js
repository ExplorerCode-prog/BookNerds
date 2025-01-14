const API_KEY = "---------------";
const BASE_URL =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json";  


  export const getPopularBooks = async () => {
    try {
      const response = await fetch(`${BASE_URL}?api-key=${API_KEY}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch books: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log(data); // Log the entire data to check the structure
  
      return data.results.books || [];  // Return books if results are present
    } catch (err) {
      console.error("Error fetching popular books:", err);
      return [];  // Return an empty array on error
    }
  };
  

export const getSearchBook = async (query) => {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();

  return data.results.books;
};
