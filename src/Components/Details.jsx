import { useLoaderData, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {

    const books = useLoaderData();
    const {bookId} = useParams();
    const intId = parseInt(bookId);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (books) {
            setLoading(false);
        }
    }, [books]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!books) {
        console.log('Books data is undefined');
        return <div>Error: Books data is undefined</div>;
    }

    const book = books.find(book => book.bookId === intId);

    if (!book) {
        console.log('Book not found for ID:', intId);
        return <div>Book not found</div>;
    }
    
    const handleRead = () => {
        toast("Wow so easy!");
    };

    return (
        <div>
            <div className="hero min-h-screen p-0 mt-12">
                <div className="hero-content flex-col lg:flex-row gap-12 h-full rounded-2xl">
                    <div className="bg-[#1313130D] w-2/5 h-full object-cover flex justify-center items-center rounded-2xl">
                        <img src={book.image} />
                    </div>
                    <div className="w-3/5 flex flex-col gap-4">
                        <h2 className="text-5xl font-bold">{book.bookName}</h2>
                        <p className="text-xl font-semibold text-[#3b3b3bcc]">By: {book.author}</p>
                        <hr />
                        <p className="text-xl font-semibold text-[#3b3b3bcc]">{book.category}</p>
                        <hr />
                        <p className="text-base font-medium text-[#3b3b3bcc] text-justify">
                             <span className="font-semibold text-black">Review: </span>
                             {book.review}
                        </p>
                        <div className="flex gap-4">
                            <p className="text-base font-bold text-black"> Tag </p>
                            {
                                book.tags.map(tag => <p className="text-[#23BE0A] text-base font-semibold"># {tag}</p>)
                            }
                        </div>
                        <hr />
                        <p className="text-lg font-medium text-[#3b3b3bcc]">Number of Pages : 
                         <span className="text-black font-semibold ml-4">{book.totalPages}</span></p>
                        <p className="text-lg font-medium text-[#3b3b3bcc]">Publisher :
                        <span className="text-black font-semibold ml-4">{book.publisher}</span></p>
                        <p className="text-lg font-medium text-[#3b3b3bcc]">Year of Publishing : 
                        <span className="text-black font-semibold ml-4">{book.yearOfPublishing}</span></p>
                        <p className="text-lg font-medium text-[#3b3b3bcc]">Rating : 
                        <span className="text-black font-semibold ml-4">{book.rating}</span></p>
                        <div className="flex gap-4">
                            <button onClick={handleRead} className="btn btn-transparent border-gray-200 border-2 text-lg ">Read</button>
                            <button className="btn bg-[#50B1C9] text-white text-lg">Wishlist</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;