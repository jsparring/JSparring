const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());

app.get(['/', '/join', '/battle'], (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.post('/user/login', userController.verifyUser);
app.post('/user/signup', userController.createUser);

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
