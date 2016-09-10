import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Styles from './Styles/poker.css';
import _ from 'underscore';

export const Pot = ({ pot }) => (
  <div className={pot == 0 ? Styles.hide : ''}>
    <h3>Pot:{' '}{pot}</h3>
  </div>
)

Pot.propTypes = {
  pot: PropTypes.string.isRequired
};

export default Pot;
