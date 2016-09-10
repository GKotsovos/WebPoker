import { connect } from 'react-redux';
import { deal, getWinner, initialState } from '../modules/poker';
import GameOptions from '../components/GameOptions';

const mapActionCreators = {
  deal: () => deal(),
  getWinner: () => getWinner(),
  initialState: () => initialState()
};

export default connect(null, mapActionCreators)(GameOptions);
