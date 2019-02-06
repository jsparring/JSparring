/*
Get tier from req.body
If no tier, set tier to a random number
Filter all challenges with said tier
Return random challenge description from filtered set
*/

const pool = require('../db');

function getChallenge(req, res, next) {
  const { tier } = req.body;

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
          // send it back in response
          res.status(200);
          res.setHeader('content-type', 'application/json');
          res.send(
            JSON.stringify({
              challenge: randomChallenge.challenge,
              description: randomChallenge.description
            })
          );
        })
        .catch(error => {
          console.error('Error connecting client: ', error);
          res.status(400);
          res.send('Error connecting to database');
        });
    })
    .catch(error => {
      console.error('Error connecting client: ', error);
      res.status(400);
      res.send('Error connecting to database');
    });
}

module.exports = getChallenge;
