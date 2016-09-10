import React from 'react';
import classnames from 'classnames';
import Styles from 'styles/Cards/cards.css';

export const FaceDownCard = () => (
  <span className={`${Styles.card} ${Styles.back}`}>*</span>
)

export default FaceDownCard;
