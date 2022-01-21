import PropTypes from "prop-types";
import * as React from 'react';



const PrimaryBtn = ({color, text, onClick, className } ) => {

    return (

            <button onClick={onClick} style={{
                backgroundColor: color}} className={className}>
                {text}</button>


)
}

PrimaryBtn.defaultProps = {
    color: 'steelblue',
}

PrimaryBtn.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,

}


export default PrimaryBtn;
