import * as React from 'react';
import SingleReview from "./SingleReview";
import {useState} from "react";
import ReviewFilter from "./ReviewFilter";

const AllReviews = ( {reviews} ) => {

    const [allReviews, setAllReviews] = useState(reviews);

    const generateReviewRatingDataForDropdown = () => {
        return [...new Set(reviews.map((review) => review.reviewRating))];
    }

    const handleFilterSelectReviewRating = (singleRating) => {
        const filteredData = reviews.filter(review => {
            if(review.rating === singleRating) {
                return review;
            }
        });
        setAllReviews(filteredData);
    };


    return (
        <div className='ReviewResults'>
            <ReviewFilter reviewRatings={generateReviewRatingDataForDropdown()}
                          onReviewRatingFilter={handleFilterSelectReviewRating} />
            <div className='reviews'>
             <>
                 {allReviews.map((review) =>(
                     <SingleReview key={review.id} review={review} />
                 ))}
             </>
            </div>

        </div>
    )
}

export default AllReviews
