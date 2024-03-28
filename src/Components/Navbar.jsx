import { NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/ListedBooks">Listed Books</NavLink></li>
                        <li><NavLink to="/Reviews">Popular Reviews</NavLink></li>
                        <li><NavLink to="/PagesRead">Pages To Read</NavLink></li>
                    </ul>
                    </div>
                    <a className="text-3xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/ListedBooks">Listed Books</NavLink></li>
                    <li><NavLink to="/PagesRead">Pages To Read</NavLink></li>
                    <li><NavLink to="/Reviews">Popular Reviews</NavLink></li>
                    <li><NavLink to="/Contact">Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#23BE0A] mr-4 text-white text-lg font-semibold">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white text-lg font-semibold">Sign Up</a>
                </div>
                </div>
        </div>
    );
};

export default Navbar;