const express = require("express");
const app = new express();
const path = require("path");
const port = 8000;

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.get("/github_login", (req, res) => {
  console.log("hi");
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
