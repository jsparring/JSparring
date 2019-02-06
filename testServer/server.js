const Express = require('express');

const app = new Express();

const cache = {};

fetch('http://localhost:8002/getChallenges')
  .then(res => res.json())
  .then(res => {
    Object.assign(cache, res);
  });



app.listen(process.env.PORT || 8003);
