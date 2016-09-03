import React, { PropTypes } from 'react';
import classnames from 'classnames';

export const Options = ({ player, fold }) => (
  <div>
    <button onClick={() => fold(player)}>fold</button>
    <button onClick={() => fold(player)}>call</button>
    <button onClick={() => fold(player)}>bid</button>
  </div>
)

Options.propTypes = {
  player: PropTypes.object.isRequired,
  fold: PropTypes.func.isRequired,
  call: PropTypes.func.isRequired,
  bid: PropTypes.func.isRequired
};

export default Options;
