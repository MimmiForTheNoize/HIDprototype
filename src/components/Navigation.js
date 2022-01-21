import * as React from 'react';
import { Link } from 'react-router-dom'
import violetpanda from "../img/violetpanda.png";

const Navigation = () => {


    return (
        <div>

            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <h2 className='right KidzEdTitle col s5'>KidzEd Checker</h2>
                        <ul className="left navItems col s3">
                            <li className='items'><Link to={'/'}>Home</Link></li>
                            <li className='items'><Link to={'/quizz'}>Quizz</Link></li>
                            <li className='items'>Login</li>
                        </ul>

                        <div className='row headerDiv'>
                            <img className='bearLogo right' src={violetpanda} alt={'violet Panda'} />
                        </div>
                    </div>

                </nav>
            </div>

        </div>
    )
}

export default Navigation;
