import React from 'react';
import Styles from '../../styles/Cards/cards.css';
import classnames from 'classnames'

export const FaceDownCard = () => (
  <div className={`${Styles.card} ${Styles.back}`}>*</div>
)

export default FaceDownCard;
