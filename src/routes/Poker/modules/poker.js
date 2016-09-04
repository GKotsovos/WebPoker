import { Deck } from '../model/cards';
import { _getWinner, winningMessage } from '../model/texasPoker';
import _ from 'underscore';

const INITIAL_STATE = 'INITIAL_STATE';
const ADD_PLAYER = 'ADD_PLAYER';
const DEAL = 'DEAL';
const GET_WINNER = 'GET_WINNER';
const GET_WINNNG_MESSAGE = 'GET_WINNNG_MESSAGE';
const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
const FOLD = 'FOLD';
const BID = 'BID';

export function initialState(){
  return{
    type: INITIAL_STATE
  }
}

export function addPlayer(id){
  return{
    type: ADD_PLAYER,
    payload: id
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

export function bid(amount){
  return{
    type: BID,
    payload: amount
  }
}

export const actions = {
  initialState,
  addPlayer,
  deal,
  getWinner,
  fold,
  bid
}

const initState = () => {
  return {
    deck: new Deck().cards,
    pot: 0,
    communityCards: [],
    players: [],
    winner: {},
    winningCards: [],
    winningMessage: ''
  }
}

const ACTION_HANDLERS = {
  INITIAL_STATE: (state, action) => {
    return initState();
  },

  ADD_PLAYER: (state, action) => {
    return {
      ...state,
      players: [...state.players, { id: action.payload }]
    }
  },

  DEAL: (state, action) => {
    let deck = _.first(state.deck, state.deck.length);
    const communityCards = _.last(deck, 5);
    deck = _.first(deck, deck.length - 5);

    const hands = _.map(state.players, () => {
      let hand =  {
        hand: _.last(deck, 2),
        realHand: [..._.last(deck, 2), ...communityCards]
      }
      deck = _.first(deck, deck.length - 2)
      return hand;
    });

    return {
      ...state,
      deck: deck,
      communityCards: communityCards,
      players: _.map(state.players, (player, key) => Object.assign(player, hands[key]))
    }
  },

  GET_WINNER: (state, action) => {
    const winner = _getWinner(state.players);
    return {
      ...state,
      winner: winner,
      winningCards: winner.cardsIds,
      winningMessage: winningMessage(winner)
    }
  },

  FOLD: (state, action) => {
    return {
      ...state,
      players: _.without(state.players, action.payload)
    }
  },

  BID: (state, action) => {
    console.log(state.pot)
    return {
      ...state,
      pot: state.pot + action.payload
    }
  },
}

export default function pokerReducer (state = initState(), action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
