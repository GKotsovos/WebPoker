import React, { PropTypes } from 'react';
import Styles from 'styles/main.css'
import _ from 'underscore';

export const GameOptions = ({ deal, getWinner, initialState }) => (
  <div className={Styles.gameOptions}>
    <button
      type="button"
      className="btn btn-default"
      onClick={() => deal()}
    >Deal</button>
    <button
      type="button"
      className="btn btn-default"
      onClick={() => getWinner()}
    >Winner</button>
    <button
      type="button"
      className="btn btn-default"
      onClick={() => initialState()}
    >Reset</button>
  </div>
)

GameOptions.propTypes = {
  deal: React.PropTypes.func.isRequired,
  getWinner: React.PropTypes.func.isRequired,
  initialState: React.PropTypes.func.isRequired
};

export default GameOptions;
