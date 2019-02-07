const Jasmine = require('jasmine');
const { TestBody, IndividualTest } = require('./Test_Body_Constructors.js');
const { callback } = require('./Testing_Middleware.js');

const jasmine = new Jasmine();

const body = new TestBody();

// console.log(typeof process.argv[2]);

// console.log(require('./Testing_Middleware.js'));

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

function standard(num_pill, dist, width) {
  // your code here
  let pillarCount = 1;
  let distance = 0;
  while (pillarCount < num_pill) {
    if (pillarCount === num_pill - 1) {
      distance -= width;
    }
    distance = distance + dist * 100 + width;
    pillarCount++;
  }
  return distance;
}

describe('run some tests', () => {
  it('should equal', () => {
    expect(callback()).toBe(standard());
  });
});
