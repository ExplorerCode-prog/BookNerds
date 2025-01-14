import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getSearchBook } from "../services/api";

function NavBar({ onSearch }) {
  const [search, setSearch] = useState("");
  const [Loading, SetLoading] = useState(false);

  const HandleSearch = (e) => {
    e.preventDefault();

    if (Loading) return;
    if (!search.trim()) return;

    SetLoading(true);

    try {
      const fetchBook = async (search) => {
        const book = await getSearchBook(search);
        onSearch(book);
      };
      fetchBook(search);
    } catch (err) {
      console.log("Failed to Search the book", err);
    } finally {
      SetLoading(false);
    }
  };

  return (
    <div className="navbar">
      <div className="nav-brand">
        <img src="/src/assets/Caticon.png" class="icon"></img>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>
      <div className="search-book">
        <form className="search-form" onSubmit={HandleSearch}>
          <input
            className="search-input"
            placeholder="Search books..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button className="search-btn" type="submit">
            Search...
          </button>
        </form>
      </div>
    </div>
  );
}
export default NavBar;
