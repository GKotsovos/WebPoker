import React, { PropTypes } from 'react';
import Deck from 'components/Deck';
import FaceDownHand from 'components/FaceDownHand';
import CommunityCards from '../../containers/CommunityCardsContainer';
import Player from '../Player';
import Styles from './Styles/poker.css';
import _ from 'underscore';

export const Poker = ({ deal, getWinner, initialState, poker }) => (
  <div>
    <button onClick={() => deal()}>deal</button>
    <button onClick={() => getWinner()}>winner</button>
    <button onClick={() => initialState()}>reset</button>
    {/*}<FaceDownHand />*/}
    <CommunityCards />
    {poker.players.map((player) => <Player player={player} />)}
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
