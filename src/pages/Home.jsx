import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard.jsx";

//Home page component
function Home() {
    //Get the book list from Redux store
    const books = useSelector((state) => state.books);

    const categories=[
        "Mystery",
        "Sci-Fi",
        "Romance",
        "Fantasy",
        "Fiction",
        "Non-Fiction",
        "Self-Help"

    ];
    //Display the first 4 books as popular books
    const  popularBooks=books.slice(0,4);
    return(<main>
        {/*Welcome */}
        <section className="welcome-section">
            <h1>Welcome to the Online Library</h1>
            <p>Discover a world of knowledge and imagination at your fingertips. Explore our vast collection of books across various genres and categories. Whether you're a fiction enthusiast, a history buff, or a science lover, we have something for everyone. Start your reading journey today!</p>
        </section>

        {/*Book Categories */}
        <section className="categories-section">
            <h2>Browse Categories</h2>
             {/* Create a link for each category */}
             {categories.map((category) => (
                <Link key={category} to={`/books/${category}`}>
                    {category}
                </Link>
            ))}
        </section>

        {/*Popular Books */}
        <section className="popular-books">
            <h2>Popular Books</h2>
            {/* Display the popular books using the BookCard component */}
               <div className="book-list">
                  {popularBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
               </div>
              
        
        </section>
    </main>
    );
}
export default Home;
