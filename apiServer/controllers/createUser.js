const pool = require('../db');

/*
- createUser:
	- username and password received in req body
	- Create new user if doesn't exist in table
*/

function createUser(req, res, next) {
  const { username, token } = req.body;
  pool
    .connect()
    .then(client => {
      client
        .query(`SELECT * FROM users WHERE username='${username}';`)
        .then(result => {
          if (result.rows.length === 0) {
            client
              .query(`INSERT INTO users VALUES ('${username}', '${token}');`)
              .then(() => {
                res.status(200);
                res.send('User created');
              })
              .catch(error => error);
          } else {
            res.status(400);
            res.send('User already exists');
          }
        })
        .catch(error => error);
    })
    .catch(error => {
      console.error('Error creating user: ', error);
      res.status(400);
      res.send('Error creating user');
    });
}

module.exports = createUser;
