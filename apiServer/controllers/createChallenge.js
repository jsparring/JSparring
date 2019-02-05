const pool = require("../db");

/*
- createChallenge
	- slug and tier received in req body
	- Check if challenge exists in database
	- Create new challenge if it doesn't exist in table
*/

async function createChallenge(req, res, next) {
  const { slug, tier } = req.body;
  let client;
  let result;

  try {
    client = await pool.connect();
  } catch (error) {
    console.error("Error connecting to db client: ", error);
    res.status(404);
    res.send("Error connecting to database");
  }

  try {
    result = await client.query(
      `SELECT * FROM challenges WHERE slug='${slug}'`
    );
    console.log("***** This is result: ", result);
  } catch (error) {
    console.error("Error querying database: ", error);
    res.status(404);
    res.send("Error querying database");
  }

  if (result.rows.length === 0 || result.rows.length === undefined) {
    try {
      const write = await client.query(
        `INSERT INTO challenges (slug, tier) VALUES ('${slug}', '${tier}')`
      );
      res.status(200);
      res.send("Created new challenge");
    } catch (error) {
      console.error("Error writing to database: ", error);
      res.status(404);
      res.send("Error writing to database");
    }
  } else {
    res.status(400);
    res.send("Challenge already exists");
  }
}

module.exports = createChallenge;
