import { connect } from 'react-redux';
import { initialState, deal, getWinner, fold } from '../modules/poker';
import CommunityCards from '../components/CommunityCards';

const mapStateToProps = (state) => ({
  communityCards: state.poker.communityCards,
  selected: state.poker.winningCards
});

export default connect(mapStateToProps, null)(CommunityCards);
