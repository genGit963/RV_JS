//       - Higher-order functions: functions that take other functions as arguments or return them

/*
Definition:
    A higher-order function is a function that does at least one of the following:
        1. Takes one or more functions as arguments.
        2. Returns a function.
*/

// 1. Passing a Function as an Argument
function greet(name) {
  return `Hello, ${name}!`;
}

function saySomething(func, name) {
  return func(name);
}

console.log(saySomething(greet, "Mahesh")); // Output: Hello, Mahesh!

// 2. Using Callbacks
setTimeout(() => {
  console.log("This will run after 2 seconds\n");
}, 2000);

// 3. Returns Function
function createMultiplier(multiplier) {
  return function returnFunc(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(createMultiplier(2)); // Output: [Function (anonymous)]
console.log(createMultiplier(3)); // Output: [Function (anonymous)]
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
