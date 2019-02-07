const { Pool } = require("pg");

const config = {
  host: "jsparring.cmpioovs14cz.us-east-2.rds.amazonaws.com",
  database: "jsparring",
  user: "jspar",
  password: "ilovetesting",
  port: "2468",
  ssl: true
};

const pool = new Pool(config);

pool.on("error", (error, client) => {
  console.error("Unexpected error in pool");
});

module.exports = pool;
