const Room = require("./Room.js");

const Lobby = function() {
  this.waitingQueue = [];
  this.processQueue = [];
  this.generalQueue = [];
  this.battleRooms = {};
};

Lobby.prototype.addToGeneralQueue = function(player) {
  player.waitStatus = 0;
  this.generalQueue.push(player);
};

Lobby.prototype.addToProcessQueue = function() {
  const that = this;
  setInterval(() => {
    while (that.generalQueue.length !== 0) {
      const temp = that.generalQueue.pop();
      temp.waitStatus = 1;
      that.processQueue.push(temp);
    }
  }, 500);
};

Lobby.prototype.addToWaitingQue = function() {
  const that = this;
  setInterval(() => {
    while (that.waitingQueue.length < 2 && that.processQueue.length > 0) {
      const temp = that.processQueue.pop();
      temp.waitStatus = 2;
      that.waitingQueue.push(temp);
    }
  }, 1000);
};

Lobby.prototype.createRoom = function() {
  const that = this;
  let counter = Date.now();
  setInterval(()=> {
    if(that.waitingQueue.length === 2) {
      const key = counter++;
      const playerOne = that.waitingQueue.pop();
      playerOne.waitStatus = 3;
      playerOne.roomId = key;
      const playerTwo = that.waitingQueue.pop();
      playerTwo.waitStatus = 3;
      playerTwo.roomId = key;
      that.battleRooms[key] = new Room ([playerOne, playerTwo])
    }
    // console.log('RUNNING THE LOBBBBBYYYYY')
  }, 100) 
};

Lobby.prototype.deleteRoom = function (roomId) {
  delete this.battleRooms[roomId];
}

module.exports = Lobby;
