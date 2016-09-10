import { connect } from 'react-redux';
import WinningMessage from '../components/WinningMessage';

const mapStateToProps = (state) => ({
  winner: state.poker.winner,
  winningMessage: state.poker.winningMessage
});

export default connect(mapStateToProps, null)(WinningMessage);
