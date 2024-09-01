//I have practiced var, let, const, Hoisting in JS, Scope chain, Type conversion and type coercion.

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

let xx; // Now x is undefined
xx = 5; // Now x is a Number
xx = "John"; // Now x is a String

// Using var, let, and const
var globalVar = "I am a global variable"; // Function-scoped
let localLet = "I am a local variable"; // Block-scoped
const constant = "I am a constant"; // Block-scoped and cannot be reassigned

function exampleFunction() {
  // Hoisting: variable declarations are hoisted to the top of the function or block
  console.log(hoistedVar); // undefined
  var hoistedVar = "I am hoisted"; // Function-scoped

  // Scope chain: accessing variables from outer scopes
  console.log(localLet); // Accessing local variable
  console.log(globalVar); // Accessing global variable

  if (true) {
    const blockScoped = "I am block-scoped"; // Block-scoped
    console.log(blockScoped);
  }

  // Type conversion
  let numAsString = "42";
  let num = parseInt(numAsString); // Type conversion from string to number
  console.log(num);

  // Type coercion
  let coercionResult = "5" + 5; // Type coercion (concatenation)
  console.log(coercionResult); // "55"
}

exampleFunction();

//Practiced functions, closures, setInterval, setTimeout, first-class functions, callback functions, and higher-order functions:

// Function declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Function expression (assigned to a variable)
const farewell = function (name) {
  console.log(`Goodbye, ${name}!`);
};

// Arrow function
const multiply = (a, b) => a * b;

// Closures
function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Prints: I am from the outer function

// setInterval and setTimeout
let counter = 0;

const intervalId = setInterval(() => {
  console.log(`Interval: ${counter}`);
  counter++;

  if (counter === 5) {
    clearInterval(intervalId); // Stop the interval after 5 iterations
  }
}, 1000);

setTimeout(() => {
  console.log("Timeout: This will run after 3 seconds");
}, 3000);

// First-class functions and Callback functions
function operation(x, y, callback) {
  const result = callback(x, y);
  console.log(`Result: ${result}`);
}

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;

operation(5, 3, addition); // Result: 8
operation(7, 2, subtraction); // Result: 5

// Higher-order functions
function higherOrderFunction(callback) {
  console.log("Before callback");
  callback();
  console.log("After callback");
}

const callbackFunction = () => {
  console.log("Inside callback function");
};

higherOrderFunction(callbackFunction);

function setupCounter() {
  let count = 0;

  function increaseCounter() {
    count++;
    console.log(`Counter: ${count}`);
  }

  return increaseCounter;
}
const increment = setupCounter();
console.log(increment());
console.log(increment());
console.log(increment());

// Function in an array
const functionsArray = [
  function (x) {
    return x * 2;
  },
  function (x) {
    return x + 5;
  },
  function (x) {
    return x - 3;
  },
];

// Iterating through functions in an array
functionsArray.forEach((func) => console.log(func(3)));

// Function in an object
const mathOperations = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: (a, b) => a * b,
};

// Using functions in an object
console.log(mathOperations.add(5, 3)); // Prints: 8
console.log(mathOperations.multiply(2, 4)); // Prints: 8

// Function as a return value
function createMultiplier(factor) {
  return function (number) {
    return factor * number;
  };
}

// Returning a function
const double = createMultiplier(2);
console.log(double(7)); // Prints: 14

function createCounter() {
  let count = 0;

  // Inner function (closure) has access to the outer variable 'count'
  function increment() {
    count++;
    console.log(`Count: ${count}`);
  }

  return increment;
}

// Create a counter using the outer function
const counter1 = createCounter();

// Each time 'increment' is called, it remembers the 'count' from its lexical environment
counter1(); // Output: Count: 1
counter1(); // Output: Count: 2

// Create another counter with its own 'count' variable
const counter2 = createCounter();
counter2(); // Output: Count: 1
