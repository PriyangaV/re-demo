import React from 'react';
import PropTypes from 'prop-types';


const FancyButton = ({type, onClick, ...props}) => {
    return <button {...props} type={type} onClick={onClick}>Click Here</button>
}

FancyButton.defaultProps = {
    type: 'button',
}

FancyButton.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func.isRequired
}

export {FancyButton};