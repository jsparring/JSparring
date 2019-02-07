const runTest = require('./Testing.js');
// const { execSync } = require('child_process');
// const path = require('path');

const mock = function(n) {
  return n * 2;
};

const test = {
  runTest: (req, res, next) => {
    // console.log('hereeererere')
    const { multiplyBy2 } = res.locals;
    const body = runTest(
      mock,
      multiplyBy2.testDescriptions,
      multiplyBy2.tests,
      multiplyBy2.expectedOutput
    );
    // let i = 0;
    // while (i < multiplyBy2.tests.length) {
    //   const temp = execSync(
    //     `node ${path.join(__dirname, '/Testing.js')}`,
    //     [
    //       mock,
    //       multiplyBy2.testDescriptions[i],
    //       multiplyBy2.tests[i],
    //       multiplyBy2.expectedOutput[i]
    //     ],
    //     { cwd: __dirname }
    //   );
    //   console.log(temp);

      // temp.stdout.on('data', chunk => console.log(chunk));

      // temp.stderr.on('data', err => console.log(err));

    //   i += 1;
    // }

    res.send(body);
  }
};

module.exports = test;
