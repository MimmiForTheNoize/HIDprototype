import * as React from 'react';
import {useState} from "react";
import {hover} from "@testing-library/user-event/dist/hover";


const ReviewFilter = ({ reviewRatings, onReviewRatingFilter }) => {
    const [filters, setFilters] = useState({
        reviewRating: '',
    });

    const handleInput = (field) => (event) => {

        const { value } = event.target;

        setFilters({
            ...filters,
            [field]:value,
        });
        switch (field) {
            case "reviewRatings":
                onReviewRatingFilter(value);
                break;
            default:
                break;
        }

    };

    const handleMouseEnter = e => {

        e.target.style.background = "red"

    }

    const handleMouseLeave = e => {

        e.target.style.background = "red"
    }

        return (
        <div className='mainDiv'>
            <div className='filter container'>
                <div className='dropdown row'>
                    <div className='dropdownSelect'>
                        <label htmlFor='rating'> Bewertung</label>
                        <select  className='ratingSelect' onChange={handleInput("reviewRatings")}>
                            <option onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}   className='specialOption' value=''>Bewertungsgrad</option>
                            {reviewRatings.map(reviewRating => (
                                <option onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} value={reviewRating} key={reviewRating}>{reviewRating}</option>
                            ))}
                        </select>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ReviewFilter
