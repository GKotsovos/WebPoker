import React from 'react';
import classnames from 'classnames';
import Styles from 'styles/Cards/cards.css';

export const FaceDownCard = () => (
  <div className={`${Styles.card} ${Styles.back}`}>*</div>
)

export default FaceDownCard;
