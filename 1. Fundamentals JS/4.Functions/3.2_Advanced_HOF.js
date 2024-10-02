// 6. Advanced Concepts: Function Composition
// Function composition is a functional programming concept where you combine multiple functions into one.

// 1. Composing Functions
function add(x) {
  return x + 1;
}

function multiply(x) {
  return x * 2;
}

function compose(func1, func2) {
  return function (x) {
    return func2(func1(x));
  };
}

const addThenMultiply = compose(add, multiply);
console.log(addThenMultiply(5)); // Output: 12

// 2. Currying

/**
 * Currying
 *  is another advanced functional programming concept
 *  where a function that takes multiple arguments is transformed
 *  into a series of functions that take one argument at a time.
 */
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(3)); // Output: 6

// 3. Higher-Order Function for Asynchronous Operations

/**
 * HOFs can also be used to manage asynchronous operations.
 * Libraries like
 *  Promise and async/await
 * leverage HOFs for better code management.
 */
function asyncTask(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve("Task completed");
      else reject("Task failed");
    }, 1000);
  });
}

asyncTask(true)
  .then((result) => console.log(result)) // Output: Task completed
  .catch((error) => console.log(error));

asyncTask(false)
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // Output: Task failed
