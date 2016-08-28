import { connect } from 'react-redux'
import { initialState } from '../modules/poker'
import { deal } from '../modules/poker'
import { getWinner } from '../modules/poker'

import Game from 'components/Poker/Poker'

const mapActionCreators = {
  initialState: () => initialState(),
  deal: () => deal(),
  getWinner: () => getWinner()
}

const mapStateToProps = (state) => ({
  game: state.game
})

exports.game = connect(mapStateToProps, mapActionCreators)(Game)
