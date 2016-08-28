import { connect } from 'react-redux'
import { fold } from '../../modules/poker'
import FaceUpHand from 'components/FaceUpHand'

const mapActionCreators = {
  fold: (player) => fold(player),
}

export default connect(null, mapActionCreators)(FaceUpHand)
