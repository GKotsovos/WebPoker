import {Deck, PokerHand, getWinner} from '../../Model/poker.js';
import _ from 'underscore';

export const INITIAL_STATE = 'INITIAL_STATE'
export const DEAL = 'DEAL';
export const GET_WINNER = 'GET_WINNER';
export const FOLD = 'FOLD';

const initialState = () => {
  return {
    deck: new Deck(),
    players: [],
    winner: {}
  }
}

const ACTION_HANDLERS = {
  INITIAL_STATE: (state, action) => {
    return initialState();
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
      winner: getWinner(state.players)
    }
  },

  FOLD: (state, action) => {
    return {
      ...state,
      players: _.without(state.players, action.payload)
    }
  }
}

export default function pokerReducer (state = initialState(), action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
