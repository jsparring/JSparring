import * as types from '../actions/battleActionTypes';
import { fromJS, toJS } from 'immutable';
import * as actions from '../actions/battleActions';

export const setUpSocket = (dispatch, username) => {
  const socket = new WebSocket('ws://localhost:8001');
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: types.JOIN_ROOM,
        username: username
      })
    );
  };

  socket.onmessage = event => {
    const data = JSON.parse(event.data);
    const type = data.type;
    if (type === 'code') {
      dispatch(actions.writeCode(data.payload));
    } else if (type === 'waitStatus') {
      //do something
    } else if (type === 'roomId') {
      dispatch(actions.saveRoomId(data.payload));
      dispatch(actions.getChallenge());
    } else if(type === 'bananas'){
      // opponent left room
    }
  };
  return socket;
};

const initialState = fromJS({
  leftCode: '// its sparring day',
  rightCode: '// its sparring day',
  description: 'default description from redux'
});

function battleReducer(state = initialState, action) {
  let tempState;
  let leftCode;
  let socket;
  let dispatch;
  let rightCode;
  let roomId;
  let description;
  let challengeName;

  switch (action.type) {
    case types.SAVE_LEFT_CODE:
      tempState = state.toJS();
      leftCode = action.payload;

      socket = tempState.socket;
      socket.send(leftCode);

      return fromJS({
        ...tempState,
        leftCode
      });

    case types.JOIN_ROOM:
      tempState = state.toJS();
      dispatch = action.payload.dispatch;
      socket = setUpSocket(dispatch, 'angry_jellyfish666');

      return fromJS({
        ...tempState,
        socket
      });

    case types.WRITE_CODE:
      tempState = state.toJS();
      rightCode = action.payload;

      return fromJS({
        ...tempState,
        rightCode
      });

    case types.SAVE_ROOM_ID:
      tempState = state.toJS();
      roomId = action.payload;

      return fromJS({
        ...tempState,
        roomId
      });

    case types.GOT_CHALLENGE:
      tempState = state.toJS();
      description = action.payload.description;
      challengeName = action.payload.slug;

      return fromJS({
        ...tempState,
        description,
        challengeName
      })
    
    default:
      return fromJS(state);
  }
}

export default battleReducer;
