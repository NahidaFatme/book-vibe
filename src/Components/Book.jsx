import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Book = ({allBook}) => {
    if (!allBook) {
        return <div>.</div>;
    }

    const {bookName, author, image,  category, tags, rating, bookId} = allBook;

    return (
        < >
            <Link to={`/Book/${bookId}`} className="flex flex-col gap-4 p-6 border-gray-200 border-2 rounded-2xl">
                <img className="bg-[#F3F3F3] rounded-2xl h-[230px] w-auto object-contain" src={image} alt="" />
                <div className="flex justify-between">
                    {
                        tags.map(tag => <p className="text-[#23BE0A] text-base font-semibold"> {tag}</p>)
                    }
                </div>
                <h2 className="text-2xl font-bold">{bookName}</h2>
                <p className="text-base font-medium text-[#131313CC]">By: {author}</p>
                <hr />
                <div className="grow">
                    <div className="flex justify-between">
                        <p className="text-base font-medium text-[#131313CC]">{category}</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-base font-medium text-[#131313CC]">{rating}</p>
                            <AiFillStar />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Book;