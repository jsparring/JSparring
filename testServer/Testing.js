const Jasmine = require('jasmine');
const { TestBody, IndividualTest } = require('./Test_Body_Constructors.js');
const { func } = require('./Testing_Middleware.js');

console.log('ononononon', func);

const jasmine = new Jasmine();

jasmine.exit = () => jasmine;

const reporter = {
  jasmineStarted: info => console.log(info),
  suiteDone: result => console.log(result),
  specDone: result => console.log(result),
  jasmineDone: result => {
    console.log(result);
  }
};

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: ['Testing.js']
});

jasmine.addReporter(reporter);

const body = new TestBody();

function runTest(callback, testDescriptions, tests, expectedOutputs) {

  // body.tests = testDescriptions.reduce((acc, description, idx) => {
  //   const input = tests[idx];
  //   const output = callback(input);
  //   const expectedOutput = expectedOutputs[idx];
  //   const passed = output === expectedOutput ? true : false;

  //   if (body.status === true && passed === false) {
  //     body.status = false;
  //   }

  //   const test = new IndividualTest(
  //     description,
  //     input,
  //     output,
  //     expectedOutput,
  //     passed
  //   );

  //   acc.push(test);
  //   return acc;
  // }, []);

  // console.log(process.argv[2], text, process.argv[4]);

  // describe('test', () => {
  //   it(testDescriptions, () => {
  //     expect(callback(tests)).toBe(expectedOutputs);
  //   });
  // });

  // console.log('*******', jasmine.exit)

  // jasmine.execute();
  return body;
}

runTest();
