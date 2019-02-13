const pool = require('../db');

const queryString = `
CREATE TABLE IF NOT EXISTS users(
  uid varchar(64) PRIMARY KEY NOT NULL,
  username varchar(64) NOT NULL,
  photoURL text NOT NULL,
	email text NOT NULL
);
CREATE TABLE IF NOT EXISTS challenges(
	challenge varchar(64) PRIMARY KEY NOT NULL,
	tier INTEGER NOT NULL,
	description text NOT NULL
);
CREATE TABLE IF NOT EXISTS matches(
	matchID SERIAL PRIMARY KEY,
	player1 varchar(64) REFERENCES users(uid) NOT NULL,
	player2 varchar(64) REFERENCES users(uid) NOT NULL
);
CREATE TABLE wins(
	matchID INTEGER PRIMARY KEY REFERENCES matches(matchID) NOT NULL,
	uid varchar(64) REFERENCES users(uid) NOT NULL,
	challenge varchar(64) REFERENCES challenges(challenge) NOT NULL
);
CREATE TABLE losses(
	matchID INTEGER PRIMARY KEY REFERENCES matches(matchID) NOT NULL,
	uid varchar(64) REFERENCES users(uid) NOT NULL,
	challenge varchar(64) REFERENCES challenges(challenge) NOT NULL
);
`;

function createTablesIfNotExists(req, res, next) {
  pool
    .connect()
    .then(client => {
      client
        .query(queryString)
        .then(result => {
          console.log(`Successfully created tables. ${result}`);
          next();
        })
        .catch(error => {
          console.error(`Error creating tables: ${error}`);
          res.status(400);
          res.send('Error creating database');
        });
    })
    .catch(error => {
      console.error(`Error connecting to database: ${error}`);
      res.status(400);
      res.send('Error creating database');
    });
}

module.exports = createTablesIfNotExists;
