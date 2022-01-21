import * as React from 'react';
import { BsFillHandThumbsUpFill } from "react-icons/bs";
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

                            <div className='row reviewElemUpper'>

                                <div className=' col s2 date right'>
                                    {review.date}
                                </div>

                                <div className='col s2 right'>
                                    <p className="header">{review.name}</p>
                                </div>


                            </div>



                            <div className='row'>

                                <div className= 'col s2 reviewRanking left'>
                                    <p className='reviewStars'>{displayStarsForRanking(review.reviewRating)}</p>
                                </div>

                                <div className='col s8 searchtitle center'>
                                    <p>{review.title}</p>
                                </div>
                            </div>

                            <p>{review.reviewContent}</p>


                        </div>
                        <div className="card-action">
                            <div className='right'>
                                <p className='helpful'> <BsFillHandThumbsUpFill /> {review.helpful} Fanden den Beitrag hilfreich</p>
                            </div>
                            <div className='reviewBtn'>
                                <button className='waves-effect waves-light btn-large moreBtn'>Mehr</button>
                            </div>

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
