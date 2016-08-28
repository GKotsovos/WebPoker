import { connect } from 'react-redux'
import { initialState, deal, getWinner, fold } from '../../actions/Poker/actions'
import FaceUpHand from './FaceUpHand'

const mapActionCreators = {
  fold: (player) => fold(player),
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapActionCreators)(FaceUpHand)
