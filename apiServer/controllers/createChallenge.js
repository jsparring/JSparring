const pool = require('../db');

function createChallenge(req, res, next) {
  const { challenge, tier, description, test } = req.body;
  pool
    .connect()
    .then(client => {
      client
        .query(`SELECT * FROM challenges WHERE challenge='${challenge}'`)
        .then(result => {
          if (result.rows.length === 0) {
            client
              .query(
                `INSERT INTO challenges 
                (challenge, tier, description, test) 
                VALUES ('${challenge}', '${tier}', '${description}', '${test}')`
              )
              .then(() => {
                res.status(200);
                res.send('Created challenge');
              })
              .catch(error => error);
          } else {
            throw new Error('Challenge already exists');
          }
        })
        .catch(error => error);
    })
    .catch(error => {
      console.error('Error creating challenge: ', error);
      res.status(400);
      res.send(`Error creating challenge: ${error}`);
    });
}

module.exports = createChallenge;
