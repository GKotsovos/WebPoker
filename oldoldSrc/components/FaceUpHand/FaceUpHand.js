import React from 'react';
import Styles from '../../styles/Cards/cards.css';
import FaceUpCard from '../FaceUpCard';
import classnames from 'classnames';
import _ from 'underscore';

export const FaceUpHand = ({hand, player, fold}) => (
  <div className={`${Styles.playingCards} ${Styles.simpleCards}`}>
    {hand.map((card) => <FaceUpCard rank={card.weight} suit={card.suit} />)}
    <button onClick={() => fold(player)}>fold</button>
  </div>
)

FaceUpHand.propTypes = {
  hand: React.PropTypes.array.isRequired
}

export default FaceUpHand;
