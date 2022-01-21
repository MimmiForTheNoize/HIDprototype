import PropTypes from "prop-types";
import * as React from 'react';



const RouteIf = ({color, text, onClick, className, star, title } ) => {

    if(star || title) {
        return (
            <button>sdlkfjös</button>
        )
    } else {
        return (
            <button>sdfssssdf</button>
        )
    }

}


export default RouteIf;

/*
<Link to={'search'}>
                <PrimaryBtn color={'red'} text={'Suche Starten'} className = {'waves-effect waves-light btn-large center landingPageBtn'} />
            </Link>
 */
