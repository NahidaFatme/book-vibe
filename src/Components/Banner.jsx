import { NavLink } from "react-router-dom";
const Banner = () => {
    return (
        <div className="mt-12">
           <div className="hero h-[550px] bg-base-200 px-4 lg:px-32 py-4 lg:py-20 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/Ld3628t/1.png" className=" lg:w-[400px] lg:h-[394px]" />
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl lg:text-6xl font-bold pb-4 lg:pb-12">Books to freshen up your bookshelf</h1>
                        <NavLink to="/ListedBooks">
                        <button className="rounded-xl bg-[#23BE0A] text-xl text-white px-12 lg:px-7 py-2 lg:py-5">View The List</button>
                        </NavLink> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;