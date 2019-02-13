const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const {
  createChallenge,
  createMatch,
  createUser,
  getChallengeClient,
  getChallenges,
  createTablesIfNotExists
} = require('./controllers');

app.use(bodyParser.json());

/*
email:
uid:
photoURL:
username:
*/
app.post('/createchallenge', createChallenge);
app.get('/getchallenges', getChallenges);
app.get('/getchallenge', getChallengeClient);
app.post('/creatematch', createMatch);
app.post('/createuser', createUser);
app.post('/createtables', createTablesIfNotExists);

// Routes
// [x] createuser
// [x] createchallenge
// [x] getchallengeclient
// [x] getchallenges
// [x] creatematch
// [] update username
//

app.listen(8002, () => {
  console.log(`API server listening on port 8002`);
});
