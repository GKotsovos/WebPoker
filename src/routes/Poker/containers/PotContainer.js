import { connect } from 'react-redux';
import Pot from '../components/Pot';

const mapStateToProps = (state) => ({
  pot: state.poker.pot
});

export default connect(mapStateToProps, null)(Pot);
