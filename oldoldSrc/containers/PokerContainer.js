import { connect } from 'react-redux'
import { initialState, deal, getWinner, fold } from '../actions/Poker/actions'
//import { deal } from '../modules/poker'
//import { getWinner } from '../modules/poker'

import Game from '../components/Poker'

const mapActionCreators = {
  initialState: () => initialState(),
  deal: () => deal(),
  getWinner: () => getWinner(),
  fold: () => fold()
}

const mapStateToProps = (state) => ({
  game: state.game
})

exports.game = connect(mapStateToProps, mapActionCreators)(Game)
