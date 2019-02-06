const WebSocket = require('ws');
const LobbyCntr = require('./Lobby.js');

const ws = new WebSocket.Server({
  port: 8001,
  clientTracking: true
});

const Lobby = new LobbyCntr();
Lobby.addToProcessQueue();
Lobby.addToWaitingQue();
Lobby.createRoom();

setInterval(() => console.log(Lobby), 5000);

ws.on('connection', (socket, req) => {
  // console.log("connected", req.headers);
  Lobby.addToGeneralQueue(socket);

  const waitStatus = setInterval(() => {
    const status = {
      type: 'waitStatus',
      payload: socket.waitStatus
    };
    socket.send(JSON.stringify(status));
    if (socket.roomId) {
      const roomId = { type: 'roomId', payload: socket.roomId };
      socket.send(JSON.stringify(roomId));
    }
  }, 1000);

  socket.on('message', data => {
    if (socket.roomId) {
      clearInterval(waitStatus);
      Lobby.battleRooms[socket.roomId].players.forEach(player => {
        if (player !== socket) {
          // console.log(data);
          const code = { type: 'code', payload: data };
          player.send(JSON.stringify(code));
        }
      });
    }
  });
});

ws.on('close', message => {
  console.log('disconnected');
});
