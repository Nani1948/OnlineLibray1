import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/bookSlice.js";

//Add Book Page
function AddBook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //Store form data
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "",
        description: "",
        rating: "",
    });
    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate all fields
        if (
            !formData.title ||
            !formData.author ||
            !formData.category ||
            !formData.description ||
            !formData.rating
        ) {
            alert("Please fill in all fields");
            return;
        }

        // Create new book
        const newBook = {
            id: Date.now(),
            title: formData.title,
            author: formData.author,
            category: formData.category,
            description: formData.description,
            rating: Number(formData.rating),
        };

        // Add book to Redux
        dispatch(addBook(newBook));

        // Navigate to Browse Books
        navigate("/books");
    };

    return (
        <main className="add-book">
            <h1>Add New Book</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Book Title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={formData.author}
                    onChange={handleChange}
                />


                <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    value={formData.rating}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />



                <button type="submit">Add Book</button>
            </form>
        </main>
    );
}
export default AddBook;
