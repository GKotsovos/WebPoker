import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Styles from './Styles/poker.css';
import _ from 'underscore';

export const WinningMessage = ({ winner, winningMessage }) => (
  <div className={_.isEmpty(winner) ? Styles.hide : ''}>
    <h3>{winningMessage}</h3>
  </div>
)

WinningMessage.propTypes = {
  winner: PropTypes.object.isRequired,
  winningMessage: PropTypes.string.isRequired
};

export default WinningMessage;
