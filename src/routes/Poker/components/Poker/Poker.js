import React, { PropTypes } from 'react';
import GameOptions from '../../containers/GameOptionsContainer';
import Pot from '../../containers/PotContainer';
import CommunityCards from '../../containers/CommunityCardsContainer';
import Players from '../../containers/PlayerContainer';
import WinningMessage from '../../containers/WinningMessageContainer';
import _ from 'underscore';

export const Poker = () => (
  <div>
    <GameOptions />
    <Pot />
    <CommunityCards />
    <Players />
    <WinningMessage />
  </div>
)

export default Poker;
