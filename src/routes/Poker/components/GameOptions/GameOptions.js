import React, { PropTypes } from 'react';
import _ from 'underscore';

export const GameOptions = ({ deal, getWinner, initialState }) => (
  <div>
    <button onClick={() => deal()}>deal</button>
    <button onClick={() => getWinner()}>winner</button>
    <button onClick={() => initialState()}>reset</button>
  </div>
)

GameOptions.propTypes = {
  deal: React.PropTypes.func.isRequired,
  getWinner: React.PropTypes.func.isRequired,
  initialState: React.PropTypes.func.isRequired
};

export default GameOptions;
