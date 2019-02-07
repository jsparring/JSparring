const Jasmine = require('jasmine');
const { TestBody, IndividualTest } = require('./Test_Body_Constructors.js');
const { mock } = require('./Testing_Middleware.js');

const jasmine = new Jasmine();

const body = new TestBody();

const callback = mock;

// console.log(typeof process.argv[2]);

// console.log(require('./Testing_Middleware.js'));

const reporter = {
  jasmineStarted: info => console.log(info),
  suiteDone: result => console.log(result),
  specDone: result => {
    console.log(result);
    // const spec = new IndividualTest()
  },
  jasmineDone: result => {
    console.log(result);
  }
};

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: ['multiplyBy2.js']
});

jasmine.addReporter(reporter);

// delete this afterwards

// const mock = n => n * 3;
// const callback = jsonFn.parse(process.argv[2]);

/* this is the standard solutoin */

const input = Math.floor(Math.random() * 99999);

function standard(n) {
  return n * 2;
}

// this is the jasmine test

describe('testing multiplyBy2', () => {
  it('it should equal', () => {
    console.log('*****', input);
    expect(callback(Math.floor(Math.random() * 99999)).toBe(standard(input));
    expect(callback(Math.floor(Math.random() * 99999))).toBe(standard(input));
  });
});

function exec() {
  jasmine.execute();
  return body;
}

exec();
