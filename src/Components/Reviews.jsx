import React, { useEffect, useState } from "react";
import Review from "./Review";
const Reviews = () => {
    const [allReviews, setReviews] = useState([])
    useEffect(() =>{
            fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            <div className="mt-12">
            <h1 className="text-2xl lg:text-4xl font-bold mb-12 text-center">Popular Reviews by Peer</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {
                    allReviews.map(allreview => <Review allreview={allreview}></Review>)
                }
            </div>
        </div>
        </div>
    );
};

export default Reviews;