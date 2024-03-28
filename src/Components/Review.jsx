import { MdRateReview } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
const Review = ({allreview}) => {
    if (!allreview) {
        return <div>.</div>;
    }
    const {reviewer_name, book_name, review} = allreview;
    return (
        <div className="bg-[#1313130D] p-6 rounded-2xl flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col justify-center items-start lg:items-center">
                <MdRateReview className="w-12 h-12 text-red-500" />
            </div>
            <div className="grow flex flex-col gap-2">
                <div className="flex justify-between">
                    <h2 className="text-black font-bold">{book_name}</h2>
                    <h2 className="flex items-center gap-2 text-[#131313B3]"><BsPersonCircle /> {reviewer_name}</h2>
                </div>
                <hr />
                <p className="text-base text-[#131313B3]">
                    <span className="font-semibold text-[#23BE0A]">Review: </span>
                    {review}
                </p>
            </div>
        </div>
    );
};

export default Review;