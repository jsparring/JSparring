const WebSocket = require("ws");
const LobbyCntr = require("./Lobby.js");

const ws = new WebSocket.Server({
  port: 8001,
  clientTracking: true
});

const Lobby = new LobbyCntr();
Lobby.addToProcessQueue();
Lobby.addToWaitingQue();
Lobby.createRoom();

setInterval(() => console.log(Lobby), 5000);

ws.on("connection", (socket, req) => {
  // console.log("connected", req.headers);
  Lobby.addToGeneralQueue(socket);

  const waitStatus = setInterval(() => {
    socket.send({ type: "waitStatus", payload: socket.waitStatus });
    if (socket.roomId) {
      socket.send({type:'roomId', payload: socket.roomId});
    }
  }, 1000);

  socket.on("message", data => {
    if (socket.roomId) {
      clearInterval(waitStatus);
      Lobby.battleRooms[socket.roomId].players.forEach(player => {
        if (player !== socket) {
          // console.log(data);
          player.send({type: 'code', payload: data});
        }
      });
    }
  });
});

ws.on("close", message => {
  console.log("disconnected");
});
