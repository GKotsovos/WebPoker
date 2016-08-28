import React, {Component} from 'react';
import Styles from './styles/cards.css'
import classnames from 'classnames'
import cardClassName from './cardClassName'

export class FaceUpCard extends Component{
  render(){
    const suits = {
      hearts: '♥', spades: '♠', diams: '♦', clubs: '♣'
    }
    const ranks = {
      2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11: 'J', 12: 'Q', 13:'K', 14: 'A'
    }
    return(
        <span className={cardClassName.front(ranks[this.props.rank], this.props.suit)}>
          <span className={Styles.rank}>{ranks[this.props.rank]}</span>
           <span className={Styles.suit} dangerouslySetInnerHTML={{__html: `&${this.props.suit};`}} />
       </span>


    );
  }
}

export default FaceUpCard;
