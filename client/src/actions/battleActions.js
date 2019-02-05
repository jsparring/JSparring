import * as types from "./battleActionTypes";
import { setUpSocket } from "../reducers/battleReducer";

export const saveLeftCode = input => ({
  type: types.SAVE_LEFT_CODE,
  payload: input
});

export const joinRoom = (dispatch, username) => ({
  type: types.JOIN_ROOM,
  payload: { dispatch, username }
});

export const writeCode = code => ({
  type: types.WRITE_CODE,
  payload: code
});

export const saveRoomId = id => ({
  type: types.SAVE_ROOM_ID,
  payload: id
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
