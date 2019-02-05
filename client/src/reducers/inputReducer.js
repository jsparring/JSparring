import { UPDATE_INPUT } from '../actions/actionTypes';

const initialState = {
  input: ''
}

export function inputReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_INPUT:
      return {input: action.input};
    default:
      return state;
  }
}