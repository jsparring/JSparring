function waitStatus(statusCode) {
  return {
    type: 'WAIT_STATUS',
    payload: statusCode
  };
}

function roomId(roomIdx) {
  return {
    type: 'ROOM_ID',
    payload: roomIdx
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
  }
}

module.exports = { waitStatus, roomId, code, otherPlayerLeft, description };
