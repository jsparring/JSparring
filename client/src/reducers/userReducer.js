import * as types from '../actions/actionTypes';
import { fromJS, toJS } from 'immutable';

const initialState = fromJS({
  username: '',
  photoURL: '',
  isLoggedIn: false
});

function userReducer(state = initialState, action) {
  let tempState;
  let username;
  let photoURL;
  let isLoggedIn;

  switch (action.type) {
    case types.SAVE_USER_DATA:
      tempState = state.toJS();
      username = action.payload.username;
      photoURL = action.payload.photoURL;
      isLoggedIn = true;
      return fromJS({
        ...tempState,
        username,
        photoURL,
        isLoggedIn
      });
    default:
      return state;
  }
}

export default userReducer;
