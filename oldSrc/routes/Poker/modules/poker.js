import {PokerHand, evaluate} from '../Model/poker.js'

export const INITIAL_STATE = 'INITIAL_STATE'
export const DEAL = 'DEAL';
export const GET_WINNER = 'GET_WINNER';
export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';

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

export function changeVisibility(id){
  return{
    type: CHANGE_VISIBILITY,
    payload: id
  }
}

export const actions = {
  initialState,
  deal,
  getWinner,
  changeVisibility
}

const ACTION_HANDLERS = {
  [INITIAL_STATE]: (state, action) => {
    return {
      hand: []
    }
  },

  [DEAL]: (state, action) => {
    console.log("creating new Hand inside reducer");
    console.log(state.hand)
    return {
      ...state,
      hand: [...state.hand, new PokerHand().cards]
    }
  },

  [GET_WINNER]: (state, action) => {
    return Object.assign({}, state, {evaluation: evaluate(state.hand)})
  },

  [CHANGE_VISIBILITY]: (state, action) => {
    return state.hand
  }
}
export const initialState2 = {
  hand: []
}
export default function pokerReducer (state = initialState2, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
