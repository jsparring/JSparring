const WebSocket = require('ws');
const LobbyCntr = require('./Lobby.js');
const util = require('./Server_Util.js');

const ws = new WebSocket.Server({
  port: 8001,
  clientTracking: true
});

const Lobby = new LobbyCntr();
Lobby.addToProcessQueue();
Lobby.addToWaitingQue();
Lobby.createRoom();
Lobby.removeRoom();

// setInterval(() => console.log(Lobby), 5000);

ws.on('connection', socket => {
  // console.log("connected", req.headers);
  Lobby.addToGeneralQueue(socket);

  util.sendStatus(socket);

  socket.on('message', data => {
    const { type, payload } = JSON.parse(data);
    switch (type) {
      case 'JOIN_ROOM': {
        socket.userName = payload;
        break;
      }
      case 'DESCRIPTION': {
        util.sendMessages(socket, payload, 'DESCRIPTION');
        break;
      }
      case 'CODE': {
        util.sendMessages(socket, payload, 'CODE');
        break;
      }
      default: {
        console.log('unrecognized type');
      }
    }

  });
});

ws.on('close', message => {
  console.log('disconnected');
});
