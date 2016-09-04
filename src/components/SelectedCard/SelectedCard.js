import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Styles from 'styles/Cards/cards.css';
import cardClassName from 'styles/Cards/cardClassName';
import FaceUpCard from 'components/FaceUpCard';

const suits = {
  hearts: '♥', spades: '♠', diams: '♦', clubs: '♣'
}

const ranks = {
  2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11: 'J', 12: 'Q', 13:'K', 14: 'A'
}

export const SelectedCard = ({rank, suit}) => (
  <strong>
    <FaceUpCard rank={rank} suit={suit} />
  </strong>
)

SelectedCard.propTypes = {
  rank: PropTypes.number.isRequired,
  suit: PropTypes.string.isRequired
};

export default SelectedCard;
