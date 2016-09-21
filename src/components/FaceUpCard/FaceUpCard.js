import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Styles from 'styles/Cards/cards.css';
import cardClassName from 'styles/Cards/cardClassName'

const ranks = {
  2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11: 'J', 12: 'Q', 13:'K', 14: 'A'
}

export const FaceUpCard = ({ rank, suit }) => (
  <span className={cardClassName.front(ranks[rank], suit)}>
    <span className={Styles.rank}>{ranks[rank]}</span>
    <span className={Styles.suit} dangerouslySetInnerHTML={{__html: `&${suit};`}} />
  </span>
)

FaceUpCard.propTypes = {
  rank: PropTypes.number.isRequired,
  suit: PropTypes.string.isRequired,
};

export default FaceUpCard;
