import * as React from 'react';

import {Link} from "react-router-dom";

const SingleReview = ({ review }) => {


    const displayStarsForRanking = (starRating) => {
        let icons = [];
        for(let i = 0; i < starRating; i++){
            icons.push(<i className="material-icons">star</i>);
        }
        return icons;
    }


    return (
        <div>
            <div className="col s12 m7">
                <div className="card horizontals">
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className='date'>
                                {review.date}
                            </div>
                            <h4 className="header">{review.name}</h4>
                            <p>{displayStarsForRanking(review.reviewRating)}</p>
                            <p>{review.title}</p>
                            <p>{review.reviewContent}</p>
                            <p>{review.helpful}</p>
                        </div>
                        <div className="card-action">
                            <button className='waves-effect waves-light btn-large moreBtn'>Mehr</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleReview

/*
   <i className="material-icons">star</i>
                               <i className="material-icons">star</i>
                               <i className="material-icons">star</i>
                               <i className="material-icons">star</i>
                               <i className="material-icons">star_half</i>
 */
