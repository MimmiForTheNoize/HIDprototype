import * as React from 'react';

import {Link} from "react-router-dom";

const SingleResult = ({ result }) => {

    /*
    loop bez. der rating des jeweiligen Kindergartens und dann in der div
     */

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
                           <div className='detailstars'>
                               {displayStarsForRanking(result.rating)}

                           </div>
                           <h4 className="header">{result.heading}</h4>
                           <p>{result.location}</p>
                           <p>{result.private === true ? "Der Kindergarten ist privat": "Der Kindergarten ist öffentlich"}</p>
                           <p>{result.content}</p>
                       </div>
                       <div className="card-action">
                           <Link to={'detailpage'}>
                               <button className='waves-effect waves-light btn-large moreBtn'>Mehr</button>
                           </Link>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default SingleResult

/*
   <i className="material-icons">star</i>
                               <i className="material-icons">star</i>
                               <i className="material-icons">star</i>
                               <i className="material-icons">star</i>
                               <i className="material-icons">star_half</i>
 */
