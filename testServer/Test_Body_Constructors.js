function TestBody() {
  this.tests = [];
  this.passed = null;
}

function IndividualTest(message) {
  this.message = message;
}

module.exports = { TestBody, IndividualTest };
