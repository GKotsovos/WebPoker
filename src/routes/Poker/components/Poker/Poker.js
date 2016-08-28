import React, { PropTypes } from 'react';
import FaceUpHand from '../FaceUpHand';
import FaceDownHand from 'components/FaceDownHand';
import Deck from 'components/Deck';
import Styles from './Styles/poker.css';
import _ from 'underscore';

export const Poker = ({ deal, getWinner, initialState, poker }) => (
  <div>
    <button onClick={() => deal()}>deal</button>
    <button onClick={() => getWinner()}>winner</button>
    <button onClick={() => initialState()}>reset</button>

    {poker.players.map((player) => <FaceUpHand player={player} hand={player.hand}/>)}

    <div className={_.isEmpty(poker.winner) ? Styles.hide : ''}>
      <h3>The winner is... Player {poker.winner.id} with a {poker.winner.combination} combination!</h3>
    </div>

  </div>
)

Poker.propTypes = {
  poker: React.PropTypes.object.isRequired,
  deal: React.PropTypes.func.isRequired,
  getWinner: React.PropTypes.func.isRequired,
  initialState: React.PropTypes.func.isRequired
};

export default Poker;
