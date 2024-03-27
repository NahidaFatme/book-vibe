import { Outlet } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Home></Home> */}
        </div>
    );
};

export default Root;