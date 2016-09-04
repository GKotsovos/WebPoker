import React, { PropTypes } from 'react';
import Deck from 'components/Deck';
import FaceDownHand from 'components/FaceDownHand';
import CommunityCards from '../../containers/CommunityCardsContainer';
import Player from '../Player';
import Styles from './Styles/poker.css';
import _ from 'underscore';

export const Poker = ({ addPlayer, deal, getWinner, initialState, poker }) => (
  <div>
  <div className={poker.pot == 0 ? Styles.hide : ''}>
    <h3>{poker.pot}</h3>
  </div>
    <button onClick={() => deal()}>deal</button>
    <button onClick={() => getWinner()}>winner</button>
    <button onClick={() => initialState()}>reset</button>
    <CommunityCards />
    <button onClick={() => addPlayer(1)}>Play</button>
    <button onClick={() => addPlayer(2)}>Play</button>
    <button onClick={() => addPlayer(3)}>Play</button>
    <button onClick={() => addPlayer(4)}>Play</button>
    <button onClick={() => addPlayer(5)}>Play</button>
    {poker.players.map((player) => <Player player={player} />)}
    <div className={_.isEmpty(poker.winner) ? Styles.hide : ''}>
      <h3>{poker.winningMessage}</h3>
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
