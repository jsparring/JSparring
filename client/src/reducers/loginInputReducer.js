import { fromJS, toJS } from 'immutable';
import { UPDATE_USERNAME, UPDATE_PASSWORD } from '../actions/loginActionTypes';

const initialState = fromJS({
  inputUsername: '',
  inputPassword: ''
});

export function loginInputReducer(state = initialState, action) {
  let tempState;
  switch (action.type) {
    case UPDATE_USERNAME:
      tempState = state.toJS();
      return fromJS({
        ...tempState,
        inputUsername: action.payload
      });
    case UPDATE_PASSWORD:
      tempState = state.toJS();
      return fromJS({
        ...tempState,
        inputPassword: action.payload
      });
    default:
      return state;
  }
}
