const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const {
  createChallenge,
  createMatch,
  createUser,
  getChallenge,
  getChallenges,
  createTablesIfNotExists
} = require('./controllers');

app.use(bodyParser.json());
app.use(cookieParser());

/*
	List of Controllers:
	- deleteChallenge
	- createMatch
	- createWin
	- createLoss
	- addPlayed
*/

app.get('/', createMatch);

app.get('/createchallenge', createChallenge);
app.get('/getchallenges', getChallenges);

// Routes
// createchallenge
// getchallenges
// getchallenge
// createuser
// creatematch

app.listen(8002, () => {
  console.log(`API server listening on port ${process.env.PORT}`);
});
