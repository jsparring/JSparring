import * as types from "./battleActionTypes";
import { setUpSocket } from "../reducers/battleReducer";
import { globalAgent } from "http";

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
    // server not set up

    // fetch("http://localhost:8002/test")
    //   .then(res => res.json())
    //   .then(json => dispatch(testReturned(json)))
    //   .catch(err => dispatch(testFailed(err)));
  };
};

export const testFailed = () => ({
  type: types.TEST_FAILED
});

export const testReturned = response => ({
  type: types.TEST_RETURNED,
  payload: response
});

export const getChallenge = () => {
  return dispatch => {
    fetch("http://localhost:8002/getChallenge")
    .then(res => res.json())
    .then(json => {
      const description = json.description;
      dispatch(socketsDescription(description));
      dispatch(gotChallenge(json));

    })
    .catch(err => console.log(err))
  }
}

export const socketsDescription = (description) => ({
  type: types.SOCKET_DESCRIPTION,
  payload: description
})

export const getChallengeErr = () => ({
  type: types.GET_CHALLENGE_ERROR
})

export const gotChallenge = challenge => ({
  type: types.GOT_CHALLENGE,
  payload: challenge
});

export const submitCode = (challengeName,code) => {
  return dispatch => {
    console.log('CHALLENGE NAME: ', challengeName)
    console.log('code: ', code)
  }
}

export const populatRightDescription = description => ({
  type: types.POPULATE_RIGHT_DESCRIPTION,
  payload: description
})