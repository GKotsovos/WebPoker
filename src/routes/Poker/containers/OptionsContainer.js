import { connect } from 'react-redux';
import { fold, bid } from '../modules/poker';
import Options from '../components/Options';

const mapActionCreators = {
  fold: (player) => fold(player),
  bid: (amount) => bid(amount)
};

export default connect(null, mapActionCreators)(Options);
