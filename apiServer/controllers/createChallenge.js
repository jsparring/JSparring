const pool = require('../db');

function createChallenge(req, res, next) {
  const { challenge, tier, description } = req.body;
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
                (challenge, tier, description) 
                VALUES ('${challenge}', '${tier}', '${description}')`
              )
              .then(data => {
                res.status(200);
                res.send('Created challenge');
              })
              .catch(error => {
                console.error('Error creating challenge: ', error);
                res.status(400);
                res.send('Error creating challenge');
              });
          } else {
            res.status(400);
            res.send('Challenge already exists');
          }
        })
        .catch(error => {
          console.error('Error querying database: ', error);
          res.status(400);
          res.send('Error querying database');
        });
    })
    .catch(error => {
      console.error('Error creating challenge: ', error);
      res.status(400);
      res.send(`Error creating challenge: ${error}`);
    });
}

module.exports = createChallenge;
