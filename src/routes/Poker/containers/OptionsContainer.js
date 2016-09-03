import { connect } from 'react-redux';
import { fold } from '../modules/poker';
import Options from '../components/Options';

const mapActionCreators = {
  fold: (player) => fold(player)
};

export default connect(null, mapActionCreators)(Options);
