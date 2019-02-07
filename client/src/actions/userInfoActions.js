import { ADD_USERNAME } from '../actions/userInfoActionTypes';

export const addUsernameToInfo = username => ({
  type: ADD_USERNAME,
  payload: username
});
