import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useEffect, useState } from "react";
import {getReadBooks, getWishlistBooks} from "../utility/SaveLocalstorage";
import ReadList from './ReadList';
import WishList from './WishList';
import { BiDownArrow } from "react-icons/bi";

const ListedBooks = () => {

    const [Display, setDisplay] =useState([]);
    const [DisplayWishlist, setDisplayWishlist] =useState([]);
    const [books, setbooks] = useState([]);
    useEffect(() =>{
            fetch('books.json')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, []);
    if (!books) {
        return <div>loading.</div>;
    }
    
// ----------Read data
    const [Reads, setReads ] = useState([]);
    useEffect(() => {
        const storedReadBooks = getReadBooks();
        console.log(storedReadBooks);
        if(books.length > 0) {
            const storedRead = books.filter(book => storedReadBooks.includes(book.bookId));
            console.log(storedRead);
            setReads(storedRead);
            setDisplay(storedRead);
        }
        
    }, [books]);
    
// ----------Wishlist data
    const [Wishlists, setWishlists ] = useState([]);
    useEffect(() => {
        const storedWishlistBooks = getWishlistBooks();
        if(books.length > 0) {
            const storedWishlist = books.filter(book => storedWishlistBooks.includes(book.bookId));
            setWishlists(storedWishlist);
            setDisplayWishlist(storedWishlist);
        }
    }, [books]);
    ;
    
    const handleSort = filter =>{
        if(filter === 'rating'){
            const readRating = Reads.filter(Read => Read.rating).sort((a, b) => b.rating - a.rating);
            const wishlistRating = Wishlists.filter(Wishlist => Wishlist.rating).sort((a, b) => b.rating - a.rating);
            setDisplay(readRating);
            setDisplayWishlist(wishlistRating);
        }
        else if(filter === 'page'){
            const readPages = Reads.filter(Read => Read.totalPages).sort((a, b) => b.totalPages - a.totalPages);
            const wishlistPages = Wishlists.filter(Wishlist => Wishlist.totalPages).sort((a, b) => b.totalPages - a.totalPages);
            setDisplay(readPages);
            setDisplayWishlist(wishlistPages);
        }
        else if(filter === 'year'){
            const readYear = Reads.filter(Read => Read.yearOfPublishing).sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            const wishlistYear = Wishlists.filter(Wishlist => Wishlist.yearOfPublishing).sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setDisplay(readYear);
            setDisplayWishlist(wishlistYear);
        }
        // else if(filter === '') {
        //     setDisplay(Reads);
        //     setDisplayWishlist(Wishlists);
        // }
    }

    return (
        
        <div>
            <div className='my-10 bg-[#1313130D] p-6 w-full  flex flex-col justify-center items-center rounded-2xl'>
                <h1 className="text-2xl lg:text-4xl font-bold">Your Book List</h1>
            </div>
            <div className='my-8 text-center'>
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white text-xl flex gap-3">
                    Sort By
                    <BiDownArrow />
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44">
                    <li onClick={() => handleSort('rating')} className='text-base medium'><a>Rating</a></li>
                    <li onClick={() => handleSort('page')} className='text-base medium'><a>Number of pages</a></li>
                    <li onClick={() => handleSort('year')} className='text-base medium'><a>Published year</a></li>
                </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                <div className='flex flex-col gap-6 mt-10'>
                {
                     Display.map(Read => <ReadList key={Read.bookId} Read={Read}></ReadList>)
                    
                }
                </div>
                </TabPanel>

                <TabPanel>
                <div className='flex flex-col gap-6 mt-10'>
                {
                     DisplayWishlist.map(Wishlist => <WishList key={Wishlist.bookId} Wishlist={Wishlist}></WishList>)
                     
                }
                </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;