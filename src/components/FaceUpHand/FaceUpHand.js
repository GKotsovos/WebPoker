import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Styles from 'styles/Cards/cards.css';
import FaceUpCard from 'components/FaceUpCard';

export const FaceUpHand = ({ hand, player }) => (
  <div className={`${Styles.playingCards} ${Styles.simpleCards}`}>
    {hand.map((card) => <FaceUpCard rank={card.weight} suit={card.suit} />)}
  </div>
)

FaceUpHand.propTypes = {
  hand: PropTypes.array.isRequired,
  player: PropTypes.object.isRequired
};

export default FaceUpHand;
