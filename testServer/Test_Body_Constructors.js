function TestBody() {
  this.tests = [];
  this.passed = true;
}

function IndividualTest(description, input, output, expectedOutput) {
  this.description = description;
  this.input = input;
  this.output = output;
  this.expectedOutput = expectedOutput;
}

module.exports = { TestBody, IndividualTest };
