import { connect } from 'react-redux';
import FaceUpHand from '../components/FaceUpHand';

const mapStateToProps = (state) => ({
  selected: state.poker.winningCards
});

export default connect(mapStateToProps, null)(FaceUpHand);
