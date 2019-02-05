const WebSocket = require('ws');
const LobbyCntr = require('./Lobby.js');

const ws = new WebSocket.Server({
  port: 8001,
  clientTracking: true
});

const Lobby = new LobbyCntr();
Lobby.addToProcessQueue();
Lobby.addToWaitingQue();

ws.eventNames('room');

ws.on('connection', (socket, req) => {
  console.log('connected', req.headers);
  socket.on('message', data => {
    console.log('this is data', data)
    ws.clients.forEach(client => {
      // console.log('this is client', client)
      if(client !== ws) {
        client.send(data)
        
      }
    })
  })

})



ws.on('close', message => {
  console.log('disconnected')
})