import React, {Component} from 'react';
import FaceUpHand from './FaceUpHand'
import FaceDownHand from './FaceDownHand'
import classnames from 'classnames'
import FaceUpCard from './FaceUpCard'
import Deck from './Deck';
import _ from 'underscore'

export class Game extends Component{
  render(){
    return(
      <div>
        <button onClick={() => this.props.deal()}>click me</button>
        <button onClick={() => this.props.getWinner()}>evaluate</button>
        <button onClick={() => this.props.initialState()}>reset</button>
        <Deck />
      </div>
    )
  }
}

export default Game;
