// const runTest = require('./Testing.js');
const { spawn } = require('child_process');
const path = require('path');
const jsonFn = require('json-fn');
const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf-8');

exports.mock = function(n) {
  return n * 2;
};

exports.test = {
  runTest: (req, res, next) => {
    const testing = spawn(
      `node ${path.join(__dirname, '/multiplyBy2.js')}`,
      { cwd: __dirname, sdio: 'inherit', shell: true }
    );

    testing.stdout.on('data', data => console.log(decoder.write(data)));
    testing.stderr.on('data', err => console.log(decoder.write(err)));

    res.send();
  }
};
