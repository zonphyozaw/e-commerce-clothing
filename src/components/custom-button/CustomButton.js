import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn,inverted, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignIn ? 'inverted' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
  )
}

export default CustomButton
