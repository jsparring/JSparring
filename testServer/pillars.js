const Jasmine = require('jasmine');
const { TestBody, IndividualTest } = require('./Test_Body_Constructors.js');
const { callback } = require('./Testing_Middleware.js');

console.log(callback);

const jasmine = new Jasmine();

const body = new TestBody();

const reporter = {
  jasmineStarted: info => console.log(info),
  suiteDone: result => console.log(result),
  specDone: result => {
    console.log(result);
    if (result.status === 'failed') {
      // const spec = new IndividualTest()
      result.failedExpectations.forEach(test => {
        body.tests.push(new IndividualTest(test.message));
      });
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
  spec_files: ['pillars.js']
});

jasmine.addReporter(reporter);

function standard(numPill, dist, width) {
  let pillarCount = 1;
  let distance = 0;
  while (pillarCount < numPill) {
    if (pillarCount === numPill - 1) {
      distance -= width;
    }
    distance = distance + dist * 100 + width;
    pillarCount += 1;
  }
  return distance;
}

const random = n => Math.floor(Math.random() * n);

describe('run some tests', () => {
  it('should equal', () => {
    expect(callback(random(30), random(30))).toBe(standard(50));
    expect(callback(random(20), random(30))).toBe(standard(50));
  });
});

function exec() {
  jasmine.execute();
  return body;
}

exec();
