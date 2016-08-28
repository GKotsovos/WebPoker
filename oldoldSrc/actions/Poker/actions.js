export const INITIAL_STATE = 'INITIAL_STATE'
export const DEAL = 'DEAL';
export const GET_WINNER = 'GET_WINNER';
export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
export const FOLD = 'FOLD';

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
