import * as React from 'react';
import ItemContainer from "./ItemContainer";
import PrimaryBtn from "./PrimaryBtn";
import { Link } from 'react-router-dom';

const Landingpage = () => {
    var size = require('window-size');

    return (
        <div className='mainDiv landingpageMain'>


            <div className='startBtn'>

             <div className='btnContainer'>
                <div>
                    <Link to='quizz' >
                        <PrimaryBtn color={'#59B176'} text={'Zum Quizz'} className = {'waves-effect waves-light btn-large center landingPageBtn'}/>
                    </Link>
                </div>

                <div> <Link to={'search'}>
                    <PrimaryBtn color={'#59B176'} text={'Suche Starten'} className = {'waves-effect waves-light btn-large center landingPageBtn quizzBtn'} />
                </Link></div>
             </div>


            </div>

            <div>
                <h3>Featured Kindergarten</h3>

                <div className='container'>
                    <ItemContainer />
                </div>
            </div>



        </div>
    )
}

export default Landingpage
