import * as types from "./battleActionTypes";
import { setUpSocket } from "../reducers/battleReducer";

export const saveLeftCode = input => ({
  type: types.SAVE_LEFT_CODE,
  payload: input
});

export const joinRoom = username => ({
  type: types.JOIN_ROOM,
  payload: username
});

export const testCode = code => {
  return dispatch => {
    fetch("http://localhost:8002/test")
      .then(res => res.json())
      .then(json => dispatch(testReturned(json)))
      .catch(err => dispatch(testFailed(err)));
  };
};

export const testFailed = err => ({
  type: types.TEST_FAILED,
  payload: err
});

export const testReturned = response => ({
  type: types.TEST_RETURNED,
  payload: response
});
