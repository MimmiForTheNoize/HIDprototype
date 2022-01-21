import * as React from 'react';
import {Link} from "react-router-dom";
const Footer = () => {


    return (

        <div className='footerColor'>
            <div className='footerWrapper'>
                <div className="push"></div>
                <footer className="page-footer">

                        <div className="row" style={{background: '#6a1b9a', marginBottom: 0}}>
                            <div className="col l6 s12">
                                <h5 className="white-text">KidzEdChecker</h5>
                                <p className="grey-text text-lighten-4">Wir finden die beste Betreuung für dein Kind</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li className='items'><Link to={'/'}>Home</Link></li>
                                    <li className='items'><Link to={'/quizz'}>Quizz</Link></li>
                                    <li className='items'>Über uns</li>
                                    <li className='items'>Login</li>
                                </ul>
                            </div>
                        </div>

                    <div className="footer-copyright">
                        <div className="container">
                            © 2014 Copyright 2022
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    )
}

export default Footer;
