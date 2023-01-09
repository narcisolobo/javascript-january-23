// Arrow Functions

// traditional function declaration
function add1(num) {
  return num + 1;
}

// function expression syntax
const add1Expression = function(num) {
  return num + 1;
}

// arrow function slimmed down 1
const add1Expression2 = (num) => {
  return num + 1;
}

// arrow function slimmed down 2
const add1Expression3 = (num) => num + 1;

// arrow function slimmed down 3
const add1Expression4 = num => num + 1;

const addMultipleLines = num => {
  num = num + 1;
  return num;
}

const addTwo = (num1, num2) => num1 + num2;

const theAnswer = () => 42;

const first = (second) => { third }
