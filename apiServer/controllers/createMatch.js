const pool = require('../db');

/*
{
  winner: player1,
  loser: player2,
  challenge,
}
*/

function createMatch(req, res, next) {
  // Get player1, player2 and cid from req.body
  const { winner, loser } = req.body;
  pool
    .connect()
    .then(client => {
      // Create new entry in matches table:
      // - Insert player2, player2, and challenge
      client
        .query(
          `
        INSERT INTO matches(player1, player2)
        VALUES('${winner}', '${loser}')
        RETURNING matchid;
        `
        )
        // Create new entry in wins table
        // - Insert matchID, username (winner), challenge
        // Create new entry in losses table
        // - Insert username (loser), challenge
        .then(result => {
          const matchID = result.rows.matchid;
        })
        .catch(error => {
          console.error('Error writing to matches table: ', error);
        });
    })
    .catch(error => {
      console.error('Error connecting to db: ', error);
      res.status(400);
      res.send('Error connecting to database');
    });
}

module.exports = createMatch;
