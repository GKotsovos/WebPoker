import React, {Component} from 'react';
import Styles from '../../styles/main.css'
import FaceUpHand from '../FaceUpHand';
import FaceDownHand from '../FaceDownHand';
import Deck from '../Deck';
import _ from 'underscore';



export const Game = (props) => (
  <div>
    <button onClick={() => props.deal()}>deal</button>
    <button onClick={() => props.getWinner()}>winner</button>
    <button onClick={() => props.initialState()}>reset</button>

    {props.game.players.map((player) => <FaceUpHand player={player} hand={player.hand}/>)}

    <div className={_.isEmpty(props.game.winner) ? Styles.hide : ''}>
      <h3>The winner is... Player {props.game.winner.id} with a {props.game.winner.combination} combination!</h3>
    </div>

  </div>
)

Game.propTypes = {
  game: React.PropTypes.object.isRequired,
  deal: React.PropTypes.func.isRequired,
  getWinner: React.PropTypes.func.isRequired,
  initialState: React.PropTypes.func.isRequired
}

export default Game;
