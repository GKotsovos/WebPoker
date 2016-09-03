import React, { PropTypes } from 'react';
import classnames from 'classnames';
import FaceUpHand from 'components/FaceUpHand';

export const CommunityCards = ({ communityCards }) => (
  <div>
    <FaceUpHand hand={communityCards} />
  </div>
)

CommunityCards.propTypes = {
  cards: PropTypes.object.array
};

export default CommunityCards;
