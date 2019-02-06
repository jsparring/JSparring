const Jasmine = require('jasmine');

const jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'spec'
})

function mockTest(x) {
  return x * 2;
}

const test = {
  runTest: (req, res, next) => {
    
  }
};

module.exports = test;
