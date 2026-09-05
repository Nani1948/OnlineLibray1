import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import BookList from "../components/BookList.jsx";


//Browse book page component

function BrowseBooks(){
    //Get books from Redux store
     const books=useSelector((state)=>state.books);
     //Get category from URL

     const {category}=useParams();

     //Store the search text
     const[searchTerm ,setSearchTerm]=useState("");
     //Filter books based on select category
     const categoryBooks=category? books.filter((book)=>book.category===category):books;

// Filter books based on  text
const filteredBooks = categoryBooks.filter(
    (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
);
     return(<main>
     {/* Page heading */}
            <section className="browse-header">
                <h1>Browse Books</h1>

                {/* Search bar */}
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </section>
            {/*Display filtered book*/}
            <BookList books={filteredBooks}/>
        </main>
    );
}

export default BrowseBooks;
