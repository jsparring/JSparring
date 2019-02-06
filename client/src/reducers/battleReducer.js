import * as types from '../actions/battleActionTypes';
import { fromJS, toJS } from 'immutable';
import * as actions from '../actions/battleActions';

export const setUpSocket = (dispatch, username) => {
  const socket = new WebSocket('ws://localhost:8001');
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: types.JOIN_ROOM,
        payload: username
      })
    );
  };

  socket.onmessage = event => {
    const data = JSON.parse(event.data);
    const type = data.type;
    if (type === 'CODE') {
      dispatch(actions.writeCode(data.payload));
    } else if (type === 'WAIT_STATUS') {
      //do something
    } else if (type === 'JOINED_ROOM') {
      dispatch(actions.saveRoomId(data.payload));
      dispatch(actions.getChallenge());
    } else if (type === 'BANANAS') {
      // opponent left room
    } else if (type === 'DESCRIPTION') {
      // dispatch action to save description to right side
      dispatch(actions.populatRightDescription(data.payload));
    }
  };
  return socket;
};

const initialState = fromJS({
  leftCode: '// its sparring day',
  rightCode: '// its sparring day',
  leftDescription: 'default left description from redux',
  rightDescription: 'default right description from redux',
  challengeName: '',
  ideVisibility: 'hidden',
  modalVisibility: 'visible',
  oppUsername: ''
});

function battleReducer(state = initialState, action) {
  let tempState;
  let leftCode;
  let socket;
  let dispatch;
  let rightCode;
  let roomId;
  let challengeName;
  let modalVisibility;
  let ideVisibility;
  let oppUsername;

  switch (action.type) {
    case types.SAVE_LEFT_CODE:
      tempState = state.toJS();
      leftCode = action.payload;

      socket = tempState.socket;
      socket.send(JSON.stringify({ type: 'CODE', payload: leftCode }));

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

      roomId = action.payload.roomIdx;
      oppUsername = action.payload.username;
      ideVisibility = 'visible';
      modalVisibility = 'hidden';

      console.log('ide: ', ideVisibility, 'modal: ', modalVisibility);
      return fromJS({
        ...tempState,
        roomId,
        ideVisibility,
        modalVisibility,
        oppUsername
      });

    case types.GOT_CHALLENGE:
      tempState = state.toJS();
      leftDescription = action.payload.description;
      challengeName = action.payload.slug;

      return fromJS({
        ...tempState,
        leftDescription,
        challengeName
      });

    case types.POPULATE_RIGHT_DESCRIPTION:
      tempState = state.toJS();
      rightDescription = action.payload;

      return fromJS({
        ...tempState,
        rightDescription
      });

    case types.SOCKET_DESCRIPTION:
      tempState = state.toJS();
      socket = tempState.socket;
      let socket_description = action.payload;
      socket.send(
        JSON.stringify({ type: 'DESCRIPTION', payload: socket_description })
      );

      break;

    default:
      return fromJS(state);
  }
}

export default battleReducer;
