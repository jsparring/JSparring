const pool = require('../db');

/*
- createUser:
	- username and password received in req body
	- Create new user if doesn't exist in table
*/
const userController = {
  createUser: function(req, res, next) {
    const { username, password } = req.body;
    pool
      .connect()
      .then(client => {
        client
          .query(`SELECT * FROM users WHERE username='${username}';`)
          .then(result => {
            if (result.rows.length === 0) {
              client
                .query(
                  `INSERT INTO users VALUES ('${username}', '${password}');`
                )
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
  },
  verifyUser: function(req, res, next) {
    const { username, password } = req.body;
    pool
      .connect()
      .then(client => {
        client
          .query(
            `SELECT * FROM users WHERE username='${username}' AND password='${password}';`
          )
          .then(result => {
            if (result.rows.length) {
              res.status(200);
              res.send({
                message: 'passed',
                username: result.rows[0].username
              });
            } else {
              res.status(400);
              res.send({ message: 'failed' });
            }
          })
          .catch(error => error);
      })
      .catch(error => {
        console.error('Error verifying user: ', error);
        res.status(400);
        res.send('Error verifying user');
      });
  }
};

module.exports = userController;
