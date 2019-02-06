const Express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const test = require('./Run_Test.js');

const app = new Express();

app.use(bodyParser.json());

const cache = {};

// fetch('http://localhost:8002/getChallenges')
//   .then(res => res.json())
//   .then(res => {
//     Object.assign(cache, res);
//     console.log(cache);
//   });

// fetch(
//   'https://www.codewars.com/api/v1/code-challenges/abbreviate-a-two-word-name'
// )
//   .then(res => res.json())
//   .then(res => Object.assign(cache, res))
//   .then(() => console.log(cache))
//   .catch(err => console.log(err));

app.post('/runtest/*', test.runTest);

app.listen(process.env.PORT || 8003);
