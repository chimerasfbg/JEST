const { newError } = require("neo4j-driver-core");

const numZero = "Number is zero";
const arString = "Argument is string";
const moreArg = "Add more arguments";

function addCalculator() {
  if (arguments.length <= 1) {
    throw new Error('Add more argument');
  } else {
    let count = Array.from(arguments);
    return count.reduce(function (acc, cur) {
      return acc + cur;
    });
  }
}

function devCalculator(a, b) {
  if(b == 0){
    throw new Error('Zero')
  } else{
    return a / b;
  }
 
}

function multiCalculator(a, b) {
  if(typeof a === 'string'||typeof b === 'string'){
    throw new Error('YOu must use numbers')
  } else {
    return a * b;
  }
  
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
