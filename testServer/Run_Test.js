const Jasmine = require('jasmine');

const jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_fiels: ['Run_Test.js']
});

function mockTest(x) {
  return x * 2;
}

describe('test', () => {
  it('testing mock', () => {
    expect(mockTest(2)).toBe(4)
  })
})

const test = {
  runTest: (req, res, next) => {
    jasmine.execute();
  }
};

module.exports = test;
