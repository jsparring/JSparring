import { fromJS } from 'immutable';
import * as types from '../actions/battleActionTypes';
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
      // do something
    } else if (type === 'JOINED_ROOM') {
      dispatch(actions.saveRoomId(data.payload));
      dispatch(actions.getChallenge());
    } else if (type === 'BANANAS') {
      // opponent left room
    } else if (type === 'DESCRIPTION') {
      dispatch(actions.populatRightDescription(data.payload));
    } else if (type === 'LOSE') {
      dispatch(actions.loser());
    }
  };
  return socket;
};

const initialState = fromJS({
  leftCode: '// its sparring day',
  rightCode: '// its sparring day',
  leftDescription: '',
  rightDescription: '',
  challengeName: '',
  showIde: false,
  youLose: false,
  showModal: true,
  opponentName: '',
  username: '',
  passedTests: false,
  resultPicture: 'https://thumbs.gfycat.com/ApprehensiveOddballAgama-small.gif',
  resultHeader: 'YOU LOSE!',
  resultText: ''
});

function battleReducer(state = initialState, action) {
  let tempState;
  let leftCode;
  let socket;
  let dispatch;
  let leftDescription;
  let rightDescription;
  let rightCode;
  let roomId;
  let challengeName;
  let showModal;
  let showIde;
  let youLose;
  let resultText;
  let resultPicture;
  let resultHeader;
  let opponentName;
  let username;

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
      username = action.payload.username;
      socket = setUpSocket(dispatch, username);

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
      opponentName = action.payload.userName;
      showIde = true;
      showModal = false;

      return fromJS({
        ...tempState,
        roomId,
        showIde,
        showModal,
        opponentName
      });

    case types.GOT_CHALLENGE:
      tempState = state.toJS();
      leftDescription = action.payload.description;
      challengeName = action.payload.challenge;
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

      return fromJS({ ...tempState });

    case types.PASSED_TESTS:
      tempState = state.toJS();
      showIde = false;
      youLose = true;
      resultPicture =
        'https://media.giphy.com/media/tIFtLCKZEurywLm0gG/giphy.gif';
      resultHeader = 'YOU WIN!';
      socket.send({
        type: 'WON'
      });
      return fromJS({
        ...tempState,
        showIde,
        resultPicture,
        youLose
      });

    case types.FAILED_TESTS:
      tempState = state.toJS();
      resultText = 'YOU FAILED';

      return fromJS({
        ...tempState,
        resultText
      });

    case types.LOSER:
      tempState = state.toJS();
      showIde = false;
      youLose = true;

      return fromJS({
        ...tempState,
        showIde,
        youLose
      });

    default:
      return fromJS(state);
  }
}

export default battleReducer;
