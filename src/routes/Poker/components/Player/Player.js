import React, { PropTypes } from 'react';
import classnames from 'classnames';
import PlayerOptions from '../../containers/PlayerOptionsContainer';
import FaceUpHand from '../../containers/FaceUpHandContainer';
import _ from 'underscore';

export const Player = ({ players, addPlayer }) => (
  <div>
    {
      _.map(players, (player, key) =>
          player.active ? [
                            !_.isEmpty( player.hand) &&
                            player.move != 'fold' &&
                            <FaceUpHand hand={ player.hand } />,
                            <PlayerOptions player={ player } />
                          ] :
                          <button onClick={() => addPlayer(key)}>Join</button>
      )
    }
  </div>
)

Player.propTypes = {
  players: PropTypes.array.isRequired,
  addPlayer: PropTypes.func.isRequired
};

export default Player;
