// import websocket from "ws";
// var WebSocketClient = require("websocket").client;

import * as types from "./types";

const setUpSocket = dispatch => {
  const socket = new WebSocket("ws://localhost:8001");

  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: types.JOIN_ROOM
      })
    );
  };

  socket.onmessage = event => {
    const data = JSON.parse(event.data);

    switch (data.type) {
      case types.JOINED:
        console.log("room joined!");
        break;

      default:
        break;
    }
  };

  return socket;
};

export default setUpSocket;
