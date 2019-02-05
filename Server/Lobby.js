const Room = require("./Room.js");

const Lobby = function() {
  this.lastOpenRoom = null;
  this.waitingQueue = [];
  this.processQueue = [];
  this.generalQueue = [];
  this.battleRooms = {};
};

Lobby.prototype.addToGeneralQueue = function(player) {
  this.generalQueue.push(player);
};

Lobby.prototype.addToProcessQueue = function() {
  const that = this;
  setInterval(() => {
    while (that.generalQueue.length !== 0) {
      const temp = generalQueue.pop();
      that.processQueue.push(temp);
    }
  }, 500);
};

Lobby.prototype.addToWaitingQue = function() {
  const that = this;
  setInterval(() => {
    while (that.waitingQueue.length < 2) {
      const temp = that.processQueue.pop();
      that.waitingQueue.push(temp);
    }
  }, 1000);
};

Lobby.prototype.createRoom = function(roomKey, playerArr) {
  this.battleRooms[roomKey] = new Room(playerArr);
};

module.exports = Lobby;
