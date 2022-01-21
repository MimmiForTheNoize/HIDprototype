import * as React from 'react';
import { Link } from 'react-router-dom'

const ItemContainer = () => {


    return (
        <div className='featured'>
            <div>
                <div className="col s12 m7">
                    <div className="card horizontals">
                        <div className="card-stacked">
                            <div className="card-content">
                                <div className='landingpageStars'>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                </div>
                                <h4 className="header">This is a Heading</h4>
                                <p>Wien</p>
                                <p>privat</p>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="card-action ">
                                <Link to={'detailpage'}>
                                    <button className='waves-effect waves-light btn-large moreBtn'>Mehr</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemContainer;
