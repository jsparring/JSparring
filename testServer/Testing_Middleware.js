// const runTest = require('./Testing.js');
const { spawn } = require('child_process');
const path = require('path');
// const jsonFn = require('json-fn');
const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf-8');

exports.test = {
  runTest: (req, res, next) => {
    exports.callback = req.callback;
    // console.log('************', req.jsonBody);
    // this.parsed = jsonFn.parse(req.rawBody);

    console.log(req.callback)

    const testing = spawn(`node ${path.join(__dirname, '/pillars.js')}`, {
      cwd: __dirname,
      sdio: 'inherit',
      shell: true
    });

    testing.stdout.on('data', data => console.log(decoder.write(data)));
    testing.stderr.on('data', err => console.log(decoder.write(err)));

    const body = JSON.stringify({ passed: false });

    res.send(body);
  }
};
