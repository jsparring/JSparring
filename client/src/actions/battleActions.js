import * as types from './battleActionTypes';
import { setUpSocket } from '../reducers/battleReducer';
import { globalAgent } from 'http';

import JSONfn from 'json-fn';

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

export const testFailed = () => ({
  type: types.TEST_FAILED
});

export const testReturned = response => ({
  type: types.TEST_RETURNED,
  payload: response
});

export const getChallenge = () => {
  return dispatch => {
    console.log('*** getting challenge');
    fetch('http://localhost:8002/getchallenge')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(json => {
        console.log('==JSON==', json);
        const description = json.description;
        dispatch(socketsDescription(description));
        dispatch(gotChallenge(json));
      })
      .catch(err => console.log(err));
  };
};

export const socketsDescription = description => ({
  type: types.SOCKET_DESCRIPTION,
  payload: description
});

export const getChallengeErr = () => ({
  type: types.GET_CHALLENGE_ERROR
});

export const gotChallenge = challenge => ({
  type: types.GOT_CHALLENGE,
  payload: challenge
});

export const submitCode = (challengeName, code) => {
  // send code to test server
  return dispatch => {
    //use json fn on code
    // put challenge name as a query param

    const func = JSONfn.stringify(code);

    fetch(`http://localhost:8003/runtest/${challengeName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: func
    })
      .then(res => res.json())
      .then(json => {
        if (json.passed === true) {
          // you win!
        } else {
          // you did not pass tests
        }
      })
      .catch(err => console.log(err));
    console.log('CHALLENGE NAME: ', challengeName);
    console.log('code: ', code);
  };
};

export const passedTests = tests => ({
  type: types.PASSED_TESTS,
  payload: tests
});

export const failedTests = tests => ({
  type: types.FAILED_TESTS,
  payload: tests
});

export const loser = () => ({
  type: types.LOSER
});

export const populatRightDescription = description => ({
  type: types.POPULATE_RIGHT_DESCRIPTION,
  payload: description
});
