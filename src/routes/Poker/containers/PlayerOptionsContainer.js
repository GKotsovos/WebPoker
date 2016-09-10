import { connect } from 'react-redux';
import { fold, check, call, bid, leave } from '../modules/poker';
import PlayerOptions from '../components/PlayerOptions';

const mapActionCreators = {
  fold: (player) => fold(player),
  check: (id) => check(id),
  call: (id) => call(id),
  bid: (amount) => bid(amount),
  leave: (id) => leave(id)
};

export default connect(null, mapActionCreators)(PlayerOptions);
