import * as types from './actionTypes';

export const saveUserData = userData => ({
  type: types.SAVE_USER_DATA,
  payload: userData
});

export const fetchUsername = userData => {
  return dispatch => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => {
        const username = json.results[0].login.username;
        userData.username = username;
        console.log('user Data: ', userData);

        // dispatch(sendToServer(userData));
        dispatch(saveUserData(userData));
      });
  };
};

export const sendToServer = userData => {
  return dispatch => {
    console.log('user data: ', userData);
    fetch('http://localhost:8002/createUser', {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
  };
};
