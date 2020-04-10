import React from 'react';

import './custom-button.styles.scss';

// on the form it needs type='submit' & value='Submit form' children replaces
// 'value' so it can be removed from the submit button.
// Passing ...otherProps will handle type='submit' in the form
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
