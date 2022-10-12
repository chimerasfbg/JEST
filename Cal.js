const { newError } = require("neo4j-driver-core");

const numZero = "Number is zero";
const arString = "Argument is string";
const moreArg = "Add more arguments";

function addCalculator() {
  if (arguments <= 1) {
    throw moreArg;
  } else {
    let count = Array.from(arguments);
    return count.reduce(function (acc, cur) {
      return acc + cur;
    });
  }
}

function devCalculator(a, b) {
  if(b == 0){
    throw "Number is zero"
  } else{
    return a / b;
  }
 
}

function multiCalculator(a, b) {
  return a * b;
}

function subCalculator(a, b) {
  return a - b;
}

module.exports = {
  addCalculator,
  devCalculator,
  multiCalculator,
  subCalculator,
};
