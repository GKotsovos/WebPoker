import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Styles from 'styles/main.css';
import _ from 'underscore';

export const WinningMessage = ({ winner, winningMessage }) => (
  <div className={Styles.winningMessage}>
    <h3>{ _.isEmpty(winner) ? null : winningMessage }</h3>
  </div>
)

WinningMessage.propTypes = {
  winner: PropTypes.object.isRequired,
  winningMessage: PropTypes.string.isRequired
};

export default WinningMessage;
