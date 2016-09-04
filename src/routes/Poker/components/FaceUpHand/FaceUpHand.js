import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Styles from 'styles/Cards/cards.css';
import FaceUpCard from 'components/FaceUpCard';
import SelectedCard from 'components/SelectedCard';
import _ from 'underscore';

export const FaceUpHand = ({ hand, selected }) => (
  <div className={`${Styles.playingCards} ${Styles.simpleCards}`}>
    {
      hand.map((card) => _.contains(selected, card.id) ?
                          <SelectedCard rank={card.weight} suit={card.suit} /> :
                          <FaceUpCard rank={card.weight} suit={card.suit} />)
    }
  </div>
)

FaceUpHand.propTypes = {
  hand: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired
};

export default FaceUpHand;
