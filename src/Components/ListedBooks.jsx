import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useEffect, useState } from "react";
import {getReadBooks, getWishlistBooks} from "../utility/SaveLocalstorage";
import ReadList from './ReadList';
import WishList from './WishList';

const ListedBooks = () => {

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
        }
        
    }, [books]);
    
// ----------Wishlist data
    const [Wishlists, setWishlists ] = useState([]);
    useEffect(() => {
        const storedWishlistBooks = getWishlistBooks();
        if(books.length > 0) {
            const storedWishlist = books.filter(book => storedWishlistBooks.includes(book.bookId));
            setWishlists(storedWishlist);
            console.log(Wishlists);
        }
    }, [books]);
    ;
    console.log(Wishlists);
    return (
        
        <div>
            <div className='my-10 bg-[#1313130D] p-6 w-full  flex flex-col justify-center items-center rounded-2xl'>
                <h1 className="text-4xl font-bold">Books</h1>
            </div>

            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                <div className='flex flex-col gap-6 mt-10'>
                {
                     Reads.map(Read => <ReadList key={Read.bookId} Read={Read}></ReadList>)
                     
                }
                </div>
                </TabPanel>

                <TabPanel>
                <div className='flex flex-col gap-6 mt-10'>
                {
                     Wishlists.map(Wishlist => <WishList key={Wishlist.bookId} Wishlist={Wishlist}></WishList>)
                     
                }
                </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;