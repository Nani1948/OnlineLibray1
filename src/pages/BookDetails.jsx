import { useSelector } from "react-redux";
import { Link,useParams} from "react-router-dom";

// Book details
function BookDetails() {
  // Get book list from redux
  const books = useSelector((state) => state.books);

  // Get book ID and categroy from URL
  const { category,id } = useParams();

  // Find the selected book
  const book = books.find(
    (book) => book.category === category
     && book.id===Number(id));

// If book is not found
  if (!book) {
    return (
      <main>
        <h1>Book not found</h1>
        <Link to="/books">
          Back to Browse Books </Link>
      </main>
    );
  }
 return (
        <main className="book-details">
            <h1>{book.title}</h1>

            <p>
                <strong>Author:</strong> {book.author}
            </p>

            <p>
                <strong>Category:</strong> {book.category}
            </p>

            <p>
                <strong>Description:</strong> {book.description}
            </p>

            <p>
                <strong>Rating:</strong> ⭐ {book.rating}
            </p>

            <Link to="/books">Back to Browse Books</Link>
        </main>
    );
}
export default BookDetails;