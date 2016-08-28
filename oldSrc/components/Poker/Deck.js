import React, {Component} from 'react';
import Styles from './styles/cards.css';
import classnames from 'classnames'
import FaceDownCard from './FaceDownCard';

export class Deck extends Component{
  render(){
    return (
      <div className={`${Styles.playingCards} ${Styles.simpleCards}`} onClick={this.props.onClick}>
        <ul className={Styles.deck}>
          <li><FaceDownCard /></li>
          <li><FaceDownCard /></li>
          <li><FaceDownCard /></li>
          <li><FaceDownCard /></li>
          <li><FaceDownCard /></li>
          <li><FaceDownCard /></li>
          <li><FaceDownCard /></li>
          <li><FaceDownCard /></li>
          <li><FaceDownCard /></li>
          <li><FaceDownCard /></li>
        </ul>
      </div>
    )
  }
}

export default Deck;
