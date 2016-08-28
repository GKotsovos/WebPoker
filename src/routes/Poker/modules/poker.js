import { Deck, PokerHand, _getWinner } from '../model/poker';
import _ from 'underscore';

const INITIAL_STATE = 'INITIAL_STATE'
const DEAL = 'DEAL';
const GET_WINNER = 'GET_WINNER';
const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
const FOLD = 'FOLD';

export function initialState(){
  return{
    type: INITIAL_STATE
  }
}

export function deal(){
  return{
    type: DEAL
  }
}

export function getWinner(){
  return{
    type: GET_WINNER
  }
}

export function fold(player){
  return{
    type: FOLD,
    payload: player
  }
}

export const actions = {
  initialState,
  deal,
  getWinner,
  fold
}

const initState = () => {
  return {
    deck: new Deck(),
    players: [],
    winner: {}
  }
}

const ACTION_HANDLERS = {
  INITIAL_STATE: (state, action) => {
    return initState();
  },

  DEAL: (state, action) => {
    return {
      ...state,
      players: [...state.players,
                {
                  handId: state.players.length,
                  hand: state.deck.draw(5)
                }
              ]
    }
  },

  GET_WINNER: (state, action) => {
    return {
      ...state,
      winner: _getWinner(state.players)
    }
  },

  FOLD: (state, action) => {
    return {
      ...state,
      players: _.without(state.players, action.payload)
    }
  }
}

export default function pokerReducer (state = initState(), action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
