import "../css/info.css"

function Info() {
  return (
    <div className="info-page">
      <div className="book-cover">
        <img src={book.cover} alt={book.title}></img>
      </div>
      <div className="book-page-info">
      <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <h3>{book.published_date}</h3>
        <p>{book.description}</p>
      </div>
      <div className="book-link">
        <a href="" className="link">
          Click here to buy..
        </a>
      </div>
    </div>
  );
}

export default Info;
