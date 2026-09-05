import {Link} from "react-router-dom";

function BookCard({ book }) {
  return (
    <article className="book-card">
      <header>
        <h2>{book.title}</h2>
      </header>
      <section>
       <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Description: {book.description}</p>
      <p>Rating: ⭐ {book.rating}</p>
      </section>
     <footer>
        <Link to={`/books/${book.category}/${book.id}`}>View Details</Link>
     </footer>
      
    </article>
  );
}


export default BookCard;