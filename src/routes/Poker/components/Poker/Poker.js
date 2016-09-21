import React, { PropTypes } from 'react';
import GameOptions from '../../containers/GameOptionsContainer';
import Pot from '../../containers/PotContainer';
import CommunityCards from '../../containers/CommunityCardsContainer';
import Players from '../../containers/PlayerContainer';
import WinningMessage from '../../containers/WinningMessageContainer';
import Styles from 'styles/main.css';

export const Poker = () => (
  <div className={Styles.poker}>
    <GameOptions />
    <Pot />
    <CommunityCards className={Styles.communityCards}/>
    <Players />
    <WinningMessage />
  </div>
)

export default Poker;
