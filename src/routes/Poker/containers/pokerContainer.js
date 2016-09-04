import { connect } from 'react-redux';
import { initialState, addPlayer, deal, getWinner, fold } from '../modules/poker';
import Poker from '../components/Poker';

const mapActionCreators = {
  initialState: () => initialState(),
  addPlayer: (id) => addPlayer(id),
  deal: () => deal(),
  getWinner: () => getWinner(),
  fold: () => fold()
};

const mapStateToProps = (state) => ({
  poker: state.poker
});

export default connect(mapStateToProps, mapActionCreators)(Poker);
