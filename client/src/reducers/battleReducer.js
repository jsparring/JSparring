import * as types from "../actions/battleActionTypes";
import { fromJS, toJS } from "immutable";

export const setUpSocket = username => {
  const socket = new WebSocket("ws://localhost:8001");
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: types.JOIN_ROOM,
        username: username
      })
    );
  };

  // socket.on('rightSideCode', data=> console.log('************', data))
  // socket.addEventListener('rightSideCode', (socket, event) => {
  //   console.log(socket, event)
  // })
  socket.onmessage = event => {
    // const data = JSON.parse(event.data);
    console.log('****************', event);

    // switch (data.type) {
    //   case types.JOINED:
    //     console.log("room joined!");
    //     break;

    //   case types.MESSAGE:
    //     console.log(data);
    //     break;
    //   default:
    //     break;
    }
  // };

  return socket;
};

const initialState = fromJS({
  leftCode: ""
});

function battleReducer(state = initialState, action) {
  let tempState;
  let leftCode;
  let socket;

  switch (action.type) {
    case types.SAVE_LEFT_CODE:
      tempState = state.toJS();
      leftCode = action.payload;
      // console.log("===in reducer==", leftCode);

      socket = tempState.socket;
      socket.send(leftCode);

      return fromJS({
        ...tempState,
        leftCode
      });

    case types.JOIN_ROOM:
      socket = setUpSocket("angry_jellyfish666");
      tempState = state.toJS();

      return fromJS({
        ...tempState,
        socket
      });

    default:
      return fromJS(state);
  }
}

export default battleReducer;
