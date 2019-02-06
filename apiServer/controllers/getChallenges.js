const pool = require('../db');

function getChallenges(req, res, next) {
  pool.connect().then(client => {
    client
      // query database for all challenges
      .query('SELECT * FROM challenges')
      // send back in formatted object
      /*
	  {
		  challenge1: {
			  description: '',
			  test: '',
			  tier: 8
			}
		}
		*/
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
        res.send(JSON.stringify(jsonChallenges));
      })
      .catch(error => {
        console.error('Error getting challenges: ', error);
      });
  });
}

module.exports = getChallenges;
