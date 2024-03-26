import { Outlet } from "react-router-dom";
import Home from "./Components/Home";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
        </div>
    );
};

export default Root;