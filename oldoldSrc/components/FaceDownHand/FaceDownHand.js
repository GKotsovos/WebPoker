import React from 'react';
import FaceDownCard from '../FaceDownCard'
import Styles from '../../styles/Cards/cards.css';
import classnames from 'classnames'

export const FaceDownHand = () => (
  <div className={`${Styles.playingCards} ${Styles.simpleCards}`}>
    <FaceDownCard />
    <FaceDownCard />
    <FaceDownCard />
    <FaceDownCard />
    <FaceDownCard />
  </div>
)

export default FaceDownHand
