function waitStatus(statusCode) {
  return {
    type: 'WAIT_STATUS',
    payload: statusCode
  };
}

function joinedRoom(roomIdx, userName) {
  return {
    type: 'JOINED_ROOM',
    payload: {
      roomIdx,
      userName
    }
  };
}

function code(input) {
  return {
    type: 'CODE',
    payload: input
  };
}

function otherPlayerLeft() {
  return {
    type: 'BANANAS'
  };
}

function description(input) {
  return {
    type: 'DESCRIPTION',
    payload: input
  };
}

module.exports = { waitStatus, joinedRoom, code, otherPlayerLeft, description };
