import { connect } from 'react-redux';
import { addPlayer } from '../modules/poker';
import Player from '../components/Player';

const mapActionCreators = {
  addPlayer: (id) => addPlayer(id)
};

const mapStateToProps = (state) => ({
  players: state.poker.players
});

export default connect(mapStateToProps, mapActionCreators)(Player);
