import React, {Component} from 'react';
import FaceDownCard from './FaceDownCard'
import Styles from './styles/cards.css';
import classnames from 'classnames'

export class FaceDownHand extends Component{
  render(){
    return (
      <div className={`${Styles.playingCards} ${Styles.simpleCards}`}>
        <FaceDownCard />
        <FaceDownCard />
        <FaceDownCard />
        <FaceDownCard />
        <FaceDownCard />
      </div>
    );
  }
}

export default FaceDownHand
