import React from 'react';
import classNames from 'classnames';
import Styles from './cards.css'

const ranks = {
  2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11: 'J', 12: 'Q', 13:'K', 14: 'A'
}

export const cardClassName = {
  front: (rank, suit) => classNames(
    Styles.card,
    Styles['rank-' + rank.toString().toLowerCase()],
    Styles[suit],
  ),
  back: classNames(Styles.card, Styles.back),
};

export default cardClassName;
