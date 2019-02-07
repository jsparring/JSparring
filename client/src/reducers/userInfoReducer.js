import { fromJS, toJS } from 'immutable';
import { ADD_USERNAME, REMOVE_USERNAME } from '../actions/userInfoActionTypes';

const initialState = fromJS({
  username: ''
});

export function userInfoReducer(state = initialState, action) {
  let tempState;
  switch (action.type) {
    case ADD_USERNAME:
      tempState = state.toJS();
      return fromJS({
        username: action.payload
      });
    case REMOVE_USERNAME:
      tempState = state.toJS();
      return fromJS({
        username: ''
      });
    default:
      return state;
  }
}
