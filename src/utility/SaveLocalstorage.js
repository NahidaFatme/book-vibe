import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const getReadBooks = () => {
    const storedReadBooks = localStorage.getItem('read');
    if (storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    return [];
};

const saveReadBooks = id => {
    const storedReadBooks = getReadBooks();
    const storedWishlist = getWishlistBooks();
    const exist = storedReadBooks.find(bookId => bookId === id);
    const existWish = storedWishlist.find(bookId => bookId ===id);
    if(!exist && !existWish) {
        storedReadBooks.push(id);
        localStorage.setItem('read', JSON.stringify(storedReadBooks));
        toast("Book added to Readlist !!");
    }
    else if(existWish && !exist){
        const updatedWishlist = storedWishlist.filter(bookId => bookId !== id);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        storedReadBooks.push(id);
        localStorage.setItem('read', JSON.stringify(storedReadBooks));
        toast("Book added to Read from Wishlist !!");
    }
    else{
        toast.error("Book already Readlist !!");
    }
};

// -------wishlist--------

const getWishlistBooks = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if(storedWishlist){
        return JSON.parse(storedWishlist);
    }
    return [];
};

const saveWishlistBooks = id => {
    const storedWishlist = getWishlistBooks();
    const storedReadBooks = getReadBooks();
    const exist = storedWishlist.find(bookId => bookId ===id);
    const existRead = storedReadBooks.find(bookId => bookId === id);
    if(!exist && !existRead){
        storedWishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
        toast("Book added to Wishlist !!");
    }
    else if(existRead){
        toast.error("Book already in Readlist. Cannot add to Wishlist !!");
    }
    else{
        toast.error("Book already in Wishlist");
    }
};
export {getReadBooks, saveReadBooks, getWishlistBooks, saveWishlistBooks};