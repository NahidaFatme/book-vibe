import React, { useEffect, useState } from "react";
import Book from "./Book";
const Books = () => {
    const [allBooks, setAllBooks] = useState([])
    useEffect(() =>{
            fetch('books.json')
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, []);
    return (
        <div className="mt-12">
            <h1 className="text-4xl font-bold mb-12 text-center">Books</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {
                allBooks.map(allBook => <Book key={allBook.bookId} allBook={allBook}> </Book>)
            }
            </div>
        </div>
    );
};

export default Books;