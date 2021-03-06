import React from 'react';
import classnames from 'classnames';
import Styles from 'styles/Cards/cards.css';
import FaceDownCard from 'components/FaceDownCard';

export const FaceDownHand = () => (
  <div className={`${Styles.playingCards} ${Styles.simpleCards}`}>
    <FaceDownCard />
    <FaceDownCard />
    <FaceDownCard />
    <FaceDownCard />
    <FaceDownCard />
  </div>
)

export default FaceDownHand;
