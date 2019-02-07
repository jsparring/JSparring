const pool = require('../db');

function getChallengeClient(req, res, next) {
  // const { tier } = req.body;
  const tier = 8;

  // Uncomment to randomize tier if tier is not defined
  // const tier =
  //   req.body.tier !== undefined ? req.body.tier : Math.floor(Math.random() * 9);

  pool
    .connect()
    .then(client => {
      client
        .query(`SELECT * from challenges WHERE tier='${tier}'`)
        .then(result => {
          // select random challenge from array of challenges
          const challenges = result.rows;
          const randomIndex = Math.floor(Math.random() * challenges.length);
          const randomChallenge = challenges[randomIndex];
          const { challenge, description } = randomChallenge;
          // send it back in response
          res.status(200);
          res.setHeader('content-type', 'application/json');
          console.log('====', challenge, '***', description);
          res.send(
            JSON.stringify({
              challenge,
              description
            })
          );
        })
        .catch(error => error);
    })
    .catch(error => {
      console.error('Error connecting client: ', error);
      res.status(400);
      res.send('Error connecting to database');
    });
}

module.exports = getChallengeClient;
