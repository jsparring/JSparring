import { combineReducers } from 'redux';
import { loginInputReducer } from './loginInputReducer';
import battleReducer from './battleReducer';
import { userInfoReducer } from './userInfoReducer';

export const rootReducer = combineReducers({
  battleReducer,
  loginInput: loginInputReducer,
  userInfo: userInfoReducer
});
