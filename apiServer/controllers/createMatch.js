const pool = require("../db");

/*
- Get player1, player2 and cid from req.body
- Create new entry in matches table
*/

async function createMatch(req, res, next) {
  const { player1, player2, cid } = req.body;
  let client;
  let result;
}

module.exports = createMatch;
