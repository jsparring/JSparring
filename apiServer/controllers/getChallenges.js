const pool = require('../db');

function getChallenges(req, res, next) {
  pool
    .connect()
    .then(client => {
      client
        .query('SELECT * FROM challenges')
        .then(result => {
          const challenges = result.rows;
          const jsonChallenges = challenges.reduce(
            (accChallenges, challengeDetails) => {
              const { challenge, tier, description, test } = challengeDetails;
              accChallenges[`${challenge}`] = {
                description,
                test,
                tier
              };
              return accChallenges;
            },
            {}
          );
          res.status(200);
          res.setHeader('content-type', 'application/json');
          console.log('====CHALLENGES====', jsonChallenges);
          res.send(JSON.stringify(jsonChallenges));
        })
        .catch(error => error);
    })
    .catch(error => {
      console.error('Error getting challenges: ', error);
      res.status(400);
      res.send('Error getting challenges');
    });
}

module.exports = getChallenges;
