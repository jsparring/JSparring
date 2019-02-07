const Jasmine = require('jasmine');
const { TestBody, IndividualTest } = require('./Test_Body_Constructors.js');
const { callback } = require('./Testing_Middleware.js');

const jasmine = new Jasmine();

const body = new TestBody();

const reporter = {
  jasmineStarted: info => console.log(info),
  suiteDone: result => console.log(result),
  specDone: result => {
    console.log(result);
    if(result.status === 'failed') {
      // const spec = new IndividualTest()
      result.failedExpectations.forEach(test => {
        body.tests.push(new IndividualTest(test.message))
      })
    }
  },
  jasmineDone: result => {
    console.log(result);
    if (result.overallStatus === 'passed') {
      body.passed = true;
    } else {
      body.passed = false;
    }
  }
};

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: ['multiplyBy2.js']
});

jasmine.addReporter(reporter);

/* this is the standard solutoin */

const input = Math.floor(Math.random() * 99999);

function standard(n) {
  return n * 2;
}

// this is the jasmine test

describe('testing multiplyBy2', () => {
  it('it should equal', () => {
    console.log('*****', input);
    expect(callback(Math.floor(Math.random() * 99999))).toBe(standard(input));
    expect(callback(Math.floor(Math.random() * 99999))).toBe(standard(input));
  });
});

function exec() {
  jasmine.execute();
  return body;
}

exec();
