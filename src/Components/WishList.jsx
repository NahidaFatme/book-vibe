import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";
const WishList = ({Wishlist}) => {
    if (!Wishlist) {
        return <div>loading.</div>;
    }
    console.log(Wishlist);
    const {image,bookName, author, yearOfPublishing, tags, totalPages, publisher, category, rating} = Wishlist;
    return (
        <div className="flex flex-col lg:flex-row gap-6 border-gray-200 border-2 p-6 rounded-2xl">
            <div className="w-[230px] h-[230px] bg-[#1313130D] rounded-2xl flex justify-center items-center">
                <img className="w-[130px] h-[172px] object-cover" src={image} alt="" />
            </div>
            <div className="flex flex-col gap-4 grow">
                <h2 className="font-bold text-3xl text-black">{bookName}</h2>
                <p className="text-base font-semibold text-[#3b3b3bcc]">By: {author}</p> 
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
                    <p className="text-base font-bold text-black"> Tag </p>
                    {
                        tags.map(tag => <p className="text-[#23BE0A] text-base font-semibold"># {tag}</p>)
                    }
                    <div className="flex gap-2 items-center">
                    <ImLocation2 />
                    <p className="text-base font-medium text-[#3b3b3bcc]"> Year of Publishing: {yearOfPublishing} </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-rows gap-6 items-start lg:items-center">
                    <div className="flex gap-2 items-center">
                    <BsFillPersonLinesFill />
                    <p className="text-base font-medium text-[#3b3b3bcc]"> Publisher: {publisher}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <RiPagesFill />
                    <p className="text-base font-medium text-[#3b3b3bcc]"> Pages: {totalPages}</p>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col lg:flex-row gap-3">
                    <button className="btn rounded-full bg-[#328EFF26] text-base text-[#328EFF] font-medium">Category: {category}</button>
                    <button className="btn rounded-full bg-[#FFAC3326] text-base text-[#FFAC33] font-medium">Rating: {rating}</button>
                    <button className="btn rounded-full bg-[#23BE0A] text-base text-white font-medium">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default WishList;