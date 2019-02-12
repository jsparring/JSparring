import { combineReducers } from 'redux';
import { inputReducer } from './inputReducer';
import battleReducer from './battleReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  userReducer,
  battleReducer,
  inputReducer
});
