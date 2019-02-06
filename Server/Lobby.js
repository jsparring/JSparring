const Room = require('./Room.js');

function Lobby() {
  this.waitingQueue = [];
  this.processQueue = [];
  this.generalQueue = [];
  this.battleRooms = {};
}

Lobby.prototype.addToGeneralQueue = function addToGeneralQueue(player) {
  player.waitStatus = 0;
  this.generalQueue.push(player);
};

Lobby.prototype.addToProcessQueue = function addToProcessQueue() {
  const that = this;
  setInterval(() => {
    while (that.generalQueue.length !== 0) {
      const temp = that.generalQueue.pop();
      if (temp.readyState === 3) {
        continue;
      }
      temp.waitStatus = 1;
      that.processQueue.push(temp);
    }
  }, 500);
};

Lobby.prototype.addToWaitingQue = function addToWaitingQue() {
  const that = this;
  setInterval(() => {
    while (that.waitingQueue.length < 2 && that.processQueue.length > 0) {
      const temp = that.processQueue.pop();
      if (temp.readyState === 3) {
        continue;
      }
      temp.waitStatus = 2;
      that.waitingQueue.push(temp);
    }
  }, 1000);
};

Lobby.prototype.createRoom = function createRoom() {
  const that = this;
  let counter = Date.now();
  setInterval(() => {
    if (that.waitingQueue.length === 2) {
      const key = counter++;
      const playerX = that.waitingQueue.pop();
      const playerY = that.waitingQueue.pop();
      playerX.waitStatus = 3;
      playerX.roomId = key;
      playerX.opponent = playerY;
      playerY.waitStatus = 3;
      playerY.roomId = key;
      playerY.opponent = playerX;
      that.battleRooms[key] = new Room(playerX, playerY, key);
    }
  }, 100);
};

Lobby.prototype.removeRoom = function removeRoom() {
  const that = this;
  setInterval(() => {
    Object.values(that.battleRooms).forEach(room => {
      console.log(room.playerX.readyState, room.playerY.readyState);
      if (room.playerX.readyState === 3 && room.playerY.readyState === 3) {
        delete that.battleRooms[room.key];
      }
    });
  }, 5000);
};
module.exports = Lobby;
