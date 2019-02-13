const pool = require('../db');

/*
{
  winner: {
    username: '',
    challenge: ''
  },
  loser: {
    username: '',
    challenge: ''
  }
}
*/

function createMatch(req, res, next) {
  const { winner, loser } = req.body;
  pool
    .connect()
    .then(client => {
      client
        .query(
          `
        INSERT INTO matches(player1, player2)
        VALUES('${winner.username}', '${loser.username}')
        RETURNING matchid;
        `
        )
        .then(result => {
          const { matchid } = result.rows[0];
          client
            .query(
              `
          INSERT INTO wins(matchid, username, challenge)
          VALUES('${matchid}', '${winner.username}', '${winner.challenge}');
          INSERT INTO losses(matchid, username, challenge)
          VALUES('${matchid}', '${loser.username}', '${loser.challenge}');
          `
            )
            .then(() => {
              res.status(200);
              res.send('Created match');
            })
            .catch(error => {
              console.error('Error creating match: ', error);
              res.status(400);
              res.send('Error creating match');
            });
        })
        .catch(error => {
          console.error('Error writing to database: ', error);
          res.status(400);
          res.send('Error writing to database');
        });
    })
    .catch(error => {
      console.error('Error connecting to db: ', error);
      res.status(400);
      res.send('Error connecting to database');
    });
}

module.exports = createMatch;
