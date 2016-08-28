import React, {Component} from 'react';
import Styles from './styles/cards.css';
import FaceUpCard from './FaceUpCard'
import classnames from 'classnames'
import _ from 'underscore'

export class FaceUpHand extends Component{
  render(){
    console.log(this.props.game)
    return (
      <div className={`${Styles.playingCards} ${Styles.simpleCards}`}>
        {hand}
      </div>
    );
  }
}

export default FaceUpHand;
