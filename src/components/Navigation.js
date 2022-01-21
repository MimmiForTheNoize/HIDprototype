import * as React from 'react';
import { Link } from 'react-router-dom'
import newGreenPanda from "../img/newGreenPanda.png";

const Navigation = () => {


    return (
        <div>

            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <ul className="right hide-on-med-and-down navItems">
                            <li className='items'><Link to={'/'}>Home</Link></li>
                            <li className='items'><Link to={'/quizz'}>Quizz</Link></li>
                            <li className='items'>Login</li>
                        </ul>
                    </div>
                    <div className='row headerDiv'>
                        <div className='col s6'>
                            <img className='bearLogo' src={newGreenPanda} alt={'Green Panda'} />
                        </div>
                        <div className='col s6 mainHeading'>
                            <h2 className='right KidzEdTitle'>KidzEd Checker</h2>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Navigation;
