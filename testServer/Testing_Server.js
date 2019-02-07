const Express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const {test} = require('./Testing_Middleware.js');
const jsonFn = require('json-fn');

const app = new Express();

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    req.callback = jsonFn.parse(data);
    next();
  });
});

const cache = {};

cache.multiplyBy2 = {
  description:
    'declare a function multiplyBy2 that takes an in integer, and write a function that multiplies by 2',
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

app.post('/runtest/*', test.runTest);

app.listen(process.env.PORT || 8003);
