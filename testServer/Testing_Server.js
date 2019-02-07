const Express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const { test } = require('./Testing_Middleware.js');

const app = new Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cache = {};

cache.multiplyBy2 = {
  description:
    'declare a function multiplyBy2 that takes an in integer, and write a function that multiplies by 2',
  testDescriptions: ['should be equal', 'should be equal'],
  tests: [2, 4],
  expectedOutput: [4, 8],
  tier: 1
};

app.use((req, res, next) => {
  res.locals.multiplyBy2 = cache.multiplyBy2;
  next();
});

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
