import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Options from '../../containers/OptionsContainer';
import FaceUpHand from '../../containers/FaceUpHandContainer';

export const Player = ({ player }) => (
  <div>
    <FaceUpHand hand={player.hand}/>
    <Options player={player} />
  </div>
)

Options.propTypes = {
  player: PropTypes.object.isRequired
};

export default Player;
