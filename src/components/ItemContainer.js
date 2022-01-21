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
                                <div className='landingpageStars' style={{color: '#FF7F11'}}>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                </div>
                                <h4 className="header">Kindergruppe Jupiter</h4>
                                <p>Wien</p>
                                <p>privat</p>
                                <p>Die Vorbereitung auf eine solidarische Gesellschaft ist bei unserer Kindergruppe hochgeschrieben. Werte wie Sozialität und Engagement werden von unseren Pädagog:innen den Kindern gelehrt. Bei uns lernt Ihr Kind, dass, obwohl sich harte Arbeit auszahlt, besonders auf die Schwächeren unter uns Rücksicht genommen werden muss. Wenn Sie glauben, dass Kinder heutzutage in diese Richtung erzogen werden sollten, ist Ihr Kind bei uns gut aufgehoben. Schauen Sie vorbei!</p>
                            </div>
                            <div className="card-action ">
                                <Link to={'detailpage'}>
                                    <button className='waves-effect waves-light btn-large moreBtn' alt='Mehr Informationen'>Mehr</button>
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
