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

// ws.eventNames("joined");
setInterval(() => console.log(Lobby), 5000);

ws.on("connection", (socket, req) => {
  // console.log("connected", req.headers);
  Lobby.addToGeneralQueue(socket);

  const waitStatus = setInterval(() => {
    socket.send(socket.waitStatus);
  }, 1000);

  socket.on("message", data => {
    if (socket.roomId) {
      clearInterval(waitStatus);
      Lobby.battleRooms[socket.roomId].forEach(player => {
        if (player !== socket) {
          player.send(data);
        }
      });
    }
  });
});

ws.on("close", message => {
  console.log("disconnected");
});
