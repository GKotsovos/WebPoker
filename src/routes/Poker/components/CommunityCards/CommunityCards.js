import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Styles from 'styles/Cards/cards.css';
import Styles2 from 'styles/main.css'
import FaceUpCard from 'components/FaceUpCard';
import SelectedCard from 'components/SelectedCard';
import FaceDownCard from 'components/FaceDownCard';
import _ from 'underscore';

export const CommunityCards = ({ communityCards, selected }) => (
  <div className={`${Styles.playingCards} ${Styles.simpleCards} ${Styles2.communityCards}`}>
    {
      !_.isEmpty(communityCards) &&
      _.map(communityCards, (card) =>
            card.visible ? _.contains(selected, card.id) ?
                              <SelectedCard rank={card.weight} suit={card.suit} /> :
                              <FaceUpCard rank={card.weight} suit={card.suit} /> :
                           <FaceDownCard/>)
    }
  </div>
)

CommunityCards.propTypes = {
  communityCards: PropTypes.array.isRequired
};

export default CommunityCards;
