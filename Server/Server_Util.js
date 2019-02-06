const actions = require('./Actions.js');

function sendStatus(socket) {
  const waitStatus = setInterval(() => {
    if (socket.readyState === 1) {
      const status = actions.waitStatus(socket.waitStatus);
      socket.send(JSON.stringify(status));
      if (socket.roomId) {
        const roomId = actions.roomId(socket.roomId);
        socket.send(JSON.stringify(roomId));
        clearInterval(waitStatus);
      }
    }
  }, 1000);
}

function sendMessages(socket, data, type) {
  // const room = Lobby.battleRooms[socket.roomId];
  // [room.playerX, room.playerY].forEach(player => {
  //   if (player !== socket && player.readyState === 1) {
  //     const code = actions.code(data);
  //     player.send(JSON.stringify(code));
  //   } else if (player.readyState === 3) {
  //     const otherPlayerLeft = actions.otherPlayerLeft();
  //     socket.send(JSON.stringify(otherPlayerLeft));
  //     player.terminate();
  //   }
  // });
  if (socket.opponent.readyState === 1) {
    let body = '';
    if (type === 'CODE') {
      body = actions.code(data);
    }
    if (type === 'DESCRIPTION') {
      body = actions.description(data);
    }
    socket.opponent.send(JSON.stringify(body));
  } else {
    socket.opponent.terminate();
  }
}

module.exports = { sendStatus, sendMessages };
