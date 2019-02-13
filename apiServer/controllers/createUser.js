const pool = require('../db');

/*
- createUser:
	- username and password received in req body
	- Create new user if doesn't exist in table
*/

/*
Shape of data received in req body:
email:
uid:
photoURL:
username:
*/

function createUser(req, res, next) {
  const { uid, username, email, photoURL } = req.body;
  pool
    .connect()
    .then(client => {
      client
        .query(`SELECT * FROM users WHERE uid='${uid}';`)
        .then(result => {
          if (result.rows.length === 0) {
            client
              .query(
                `INSERT INTO users (uid, username, email, photoURL) VALUES ('${uid}', '${username}', '${email}', '${photoURL}');`
              )
              .then(() => {
                res.status(200);
                res.send('User created');
              })
              .catch(error => {
                console.error('Error writing to database: ', error);
                res.status(400);
                res.send('Error writing to database');
              });
          } else {
            res.status(400);
            res.send('User already exists');
          }
        })
        .catch(error => {
          console.error('Error querying database: ', error);
          res.status(400);
          res.send('Error querying database');
        });
    })
    .catch(error => {
      console.error('Error creating user: ', error);
      res.status(400);
      res.send('Error creating user');
    });
}

module.exports = createUser;
