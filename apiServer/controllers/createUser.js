const pool = require('../db');

/*
- createUser:
	- username and password received in req body
	- Create new user if doesn't exist in table
*/

async function createUser(req, res, next) {
  const { username, token } = req.body;
  let client;
  let result;
  try {
    client = await pool.connect();
  } catch (error) {
    return console.error('Error connecting to db client: ', error);
  }

  try {
    result = await client.query(
      `SELECT * FROM users WHERE username='${username}';`
    );
  } catch (error) {
    console.error('Error querying database: ', error);
    res.status(404);
    res.send('Error connecting to database');
  }

  if (result.rows.length === 0) {
    try {
      const write = await client.query(
        `INSERT INTO users VALUES ('${username}', '${token}');`
      );
      res.status(200);
      res.send('New user created');
    } catch (error) {
      return console.error('Error writing to db:', error);
      res.status(404);
      res.send('Error connecting to database');
    }
  } else {
    res.status(400);
    res.send('User already exists');
  }
}

module.exports = createUser;
