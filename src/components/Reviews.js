import * as React from 'react';
import PrimaryBtn from "./PrimaryBtn";
import { Link } from 'react-router-dom'
import {useState} from "react";
import reviewsJson from "../Data/reviews.json";
import AllReviews from "./AllReviews";

const Reviews = () => {
    const [reviews, setReviews] = useState(reviewsJson);


    return (
        <div className='mainDiv'>

            <div className='row'>
                <p className=' left searchtitle rezensiontitle col s6'>Rezensionen zu Kindergarten Sonnenschein</p>
             <div className='col s6'>
                 <p className='calltoActionRezension'>Erstelle jetzt eine Rezenssion</p>
                 <Link to='/detailpage/detailpage/reviews/addreview'>
                     <PrimaryBtn color={'red'} text={'Rezension erstellen'} className = {'waves-effect waves-light btn-large center landingPageBtn'}/>
                 </Link>
             </div>

            </div>

            <div className='container'>
                <AllReviews reviews={reviews}/>
            </div>


        </div>
    )
}

export default Reviews
