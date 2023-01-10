/* Callback Functions */

/*
A callback function is a function that is passed as an argument
to another function—just like any other value—to be "called back"
at a later time.

Functions that accept other functions as arguments are called
*higher order functions*.
*/

function myFunction(callback) {
  callback();
}

// Higher order function: greet
function greet(firstName, callback) {
  callback(firstName);
}

// Callback function: greetByName
function greetByName(firstName) {
  console.log(`Hello, ${firstName}`);
}

// Another callback function
function eveningGreeter(firstName) {
  console.log(`Good evening, ${firstName}!`)
}

// greet('Rochelle', eveningGreeter);

setTimeout(() => console.log('Hello world!'), 3000);

console.log('Goodbye!');
