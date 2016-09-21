import React, { PropTypes } from 'react';
import classes from './CoreLayout.scss';
import 'styles/core.scss';

export const CoreLayout = ({ children }) => (
  <div>
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default CoreLayout;
