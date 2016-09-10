import { deck } from '../model/cards';
import { _getWinner, winningMessage } from '../model/texasPoker';
import _ from 'underscore';

const INITIAL_STATE = 'INITIAL_STATE';
const ADD_PLAYER = 'ADD_PLAYER';
const DEAL = 'DEAL';
const GET_WINNER = 'GET_WINNER';
const GET_WINNNG_MESSAGE = 'GET_WINNNG_MESSAGE';
const FOLD = 'FOLD';
const CHECK = 'CHECK';
const CALL = 'CALL';
const BID = 'BID';
const LEAVE = 'LEAVE';

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

export function check(id){
  return{
    type: CHECK,
    payload: id
  }
}

export function call(id){
  return{
    type: CALL,
    payload: id
  }
}

export function bid(details){
  return{
    type: BID,
    payload: details
  }
}

export function leave(id){
  return{
    type: LEAVE,
    payload: id
  }
}

export const actions = {
  initialState,
  addPlayer,
  deal,
  getWinner,
  fold,
  check,
  call,
  bid,
  leave
}

const initState = () => {
  return {
    stage: 'pregame',
    deck: deck(),
    pot: 0,
    currentMaxBid: 0,
    communityCards: [],
    players: [
              { id: 0, active: false },
              { id: 1, active: false },
              { id: 2, active: false },
              { id: 3, active: false },
              { id: 4, active: false },
              { id: 5, active: false }
             ],
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
      players: _.map(state.players, (player) =>
                  player.id == action.payload ? { ...player, active: true, move: 'waiting', money: 5000 } :
                                                player
               )
    }
  },

  DEAL: (state, action) => {
    let deck = _.first(state.deck, state.deck.length);
    const communityCards = _.chain(deck)
                            .last(5)
                            .map((card) => {
                              return { ...card, visible: true }
                            })
                            .value();
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
      players: _.map(state.players, (player, key) =>
                  player.active ? {
                                    ...player,
                                    ...hands[key],
                                    money: player.money - 250,
                                    bid: 250, move: 'thinking'
                                  } :
                                  player),
      pot: state.pot + _.filter(state.players, (player) => player.active).length * 250,
      currentMaxBid: 250
    }
  },

  GET_WINNER: (state, action) => {
    const winner = _getWinner(_.filter(state.players, (player) => player.move != 'fold' && player.active));
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
      players:  _.map(state.players, (player) =>
                  player.id == action.payload ? { ...player, move: 'fold' } : player)
    }
  },

  CHECK: (state, action) => {
    const currentPlayerBid = state.players[action.payload].bid;
    console.log(currentPlayerBid)
    return {
      ...state,
      players:  _.map(state.players, (player) =>
                  player.id == action.payload ? {
                                                  ...player, move: 'check',
                                                  bid: player.bid + (state.currentMaxBid - player.bid),
                                                  money: player.money - (state.currentMaxBid - player.bid)
                                                } :
                                                player),
      pot: state.pot + state.currentMaxBid - currentPlayerBid
    }
  },

  CALL: (state, action) => {
    console.log(state.currentMaxBid)
    return {
      ...state,
      players:  _.map(state.players, (player) =>
                  player.id == action.payload ? { ...player, move: 'call' } : player)
    }
  },

  BID: (state, action) => {
    return {
      ...state,
      players:  _.map(state.players, (player) =>
                  player.id == action.payload.id ? {
                                                     ...player, move: 'bid',
                                                     bid: player.bid + action.payload.amount,
                                                     money: player.money - action.payload.amount
                                                   } :
                                                   player),
      pot: state.pot + action.payload.amount,
      currentMaxBid: state.currentMaxBid + action.payload.amount
    }
  },

  LEAVE: (state, action) => {
    return {
      ...state,
      players: _.map(state.players, (player) =>
                  player.id == action.payload ? { ...player, active: false } :
                                                player)
    }
  },
  //UNDER CONSTRUCTION, SERVER NEEDED
  NEXT_PHASE: (state, action) => {
    const stages = [ 'pregame', 'deal', 'flop', 'turn', 'river', 'winner' ]
    return {
      ...state,
      stage: stages[action.payload],
      communityCards: _.map(communityCards, (card, key) =>
                          key - 1 <= action.payload ? { ...card, visible: true } : card),
      players: _.map(state.players, (player) =>
                  player.move != 'fold' ? { ...player, move: 'thinking' } : player)
    }
  }
}

export default function pokerReducer (state = initState(), action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
