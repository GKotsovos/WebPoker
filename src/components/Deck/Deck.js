import React from 'react';
import classnames from 'classnames';
import Styles from 'styles/Cards/cards.css'
import FaceDownCard from 'components/FaceDownCard';

export const Deck = () => (
  <div className={`${Styles.playingCards} ${Styles.simpleCards}`}>
    <ul className={Styles.deck}>
      <li><FaceDownCard /></li>
      <li><FaceDownCard /></li>
      <li><FaceDownCard /></li>
      <li><FaceDownCard /></li>
      <li><FaceDownCard /></li>
      <li><FaceDownCard /></li>
      <li><FaceDownCard /></li>
      <li><FaceDownCard /></li>
      <li><FaceDownCard /></li>
      <li><FaceDownCard /></li>
    </ul>
  </div>
)

export default Deck;
