# First Class Citizens

In JavaScript, functions are considered **first-class citizens** (also called `first-class functions`). This means that functions can be treated like any other value in the language. You can assign them to variables, pass them as arguments to other functions, and even return them from other functions.

This property of functions opens up a lot of powerful programming techniques like callbacks, higher-order functions, and functional programming.

### 1. Assigning Functions to Variables

You can assign a function to a variable, just like you would assign a number, string, or object.

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Assigning the function to a variable
const sayHello = greet;

// Using the variable to call the function
console.log(sayHello("Mahesh")); // Output: Hello, Mahesh!
```

In this example:

- We assigned the function `greet` to the variable `sayHello`.
- Both `greet` and `sayHello` refer to the same function, and you can use either to call it.

### 2. Passing Functions as Arguments

Because functions are first-class citizens, you can pass them as arguments to other functions. This is useful for creating **callbacks**, which allow a function to execute another function.

```javascript
// Function that takes another function as an argument
function executeCallback(callback) {
  callback();
}

// A simple function to use as a callback
function showMessage() {
  console.log("Callback function executed!");
}

// Passing the function as an argument
executeCallback(showMessage); // Output: Callback function executed!
```

In this example:

- We passed the function `showMessage` as an argument to the `executeCallback` function.
- The `executeCallback` function then calls `showMessage`.

### 3. Returning Functions from Other Functions

You can also return a function from another function. This is useful for creating **higher-order functions**, which generate new functions based on some conditions.

```javascript
// Function that returns another function
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

// Creating new functions using the returned function
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

In this example:

- The `createMultiplier` function returns a new function that multiplies a number by a given multiplier.
- We use the returned function to create `double` and `triple` functions, which multiply numbers by 2 and 3, respectively.

### Combining These Concepts

You can combine these concepts to create powerful and flexible code. For example, you can write functions that generate callbacks or perform multiple operations based on the functions passed to them.

```javascript
// Higher-order function that performs an operation on two numbers
function performOperation(a, b, operation) {
  return operation(a, b);
}

// Functions to use as operations
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

// Using the higher-order function with different operations
console.log(performOperation(5, 3, add)); // Output: 8
console.log(performOperation(5, 3, multiply)); // Output: 15
```

In this example:

- The `performOperation` function takes two numbers and a function as arguments and applies the function to the numbers.
- We used the `add` and `multiply` functions as operations, demonstrating how flexible and reusable this pattern is.

### Benefits of First-Class Functions

1. **Reusability**: Functions can be reused in different contexts, reducing code duplication.
2. **Modularity**: You can break down complex logic into smaller functions and combine them as needed.
3. **Functional Programming**: Allows you to write cleaner and more declarative code using higher-order functions like `map`, `filter`, and `reduce`.

### Real-World Example: Using `Array.prototype.map`

The `map` method is an example of using functions as first-class citizens. It takes a function as an argument and applies it to each element in an array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

In this example:

- We passed an anonymous function (arrow function) to the `map` method.
- This function is called for each element in the `numbers` array, returning a new array with doubled values.

### Summary

- **Assigning to Variables**: You can assign functions to variables and use them as values.
- **Passing as Arguments**: Functions can be passed as arguments to other functions, allowing you to create callbacks and event handlers.
- **Returning from Functions**: Functions can return other functions, enabling you to create higher-order functions and closures.

These concepts form the basis of many JavaScript patterns and are key to understanding how to write flexible, reusable, and modular code. Let me know if you need more details or examples!
