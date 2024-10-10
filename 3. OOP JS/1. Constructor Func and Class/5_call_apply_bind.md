# `call`, `apply`, and `bind`

These are JavaScript methods that allow you to control the value of `this` inside functions. They are commonly used when you need to explicitly set the `this` context of a function. Here's a breakdown of each method with examples.

### 1. **`call()` Method**

The `call()` method invokes a function with a specified `this` value and arguments provided one by one.

#### Syntax:

```javascript
function.call(thisArg, arg1, arg2, ...)
```

#### Example:

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: "Mahesh" };

// Using call() to invoke the greet function with a specific `this` value
greet.call(person, "Hello", "!"); // Output: Hello, my name is Mahesh!
```

In this example:

- `call()` sets the value of `this` to `person`.
- The arguments are passed individually: `'Hello'` and `'!'`.

### 2. **`apply()` Method**

The `apply()` method is similar to `call()`, but it takes an array of arguments instead of listing them one by one.

#### Syntax:

```javascript
function.apply(thisArg, [arg1, arg2, ...])
```

#### Example:

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: "Motki" };

// Using apply() to invoke the greet function with a specific `this` value
greet.apply(person, ["Hi", "!"]); // Output: Hi, my name is Motki!
```

In this example:

- `apply()` sets the value of `this` to `person`.
- The arguments are passed as an array: `['Hi', '!']`.

### 3. **`bind()` Method**

The `bind()` method creates a new function with a specified `this` value and optionally, initial arguments. Unlike `call()` and `apply()`, it does not execute the function immediately but returns a new function that can be invoked later.

#### Syntax:

```javascript
const newFunction = function.bind(thisArg, arg1, arg2, ...)
```

#### Example:

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: "Mahesh" };

// Using bind() to create a new function with a specific `this` value
const greetPerson = greet.bind(person, "Hey");

greetPerson("!"); // Output: Hey, my name is Mahesh!
```

In this example:

- `bind()` returns a new function `greetPerson` with `this` bound to `person`.
- The first argument `'Hey'` is set during the bind, and we pass the remaining argument `'!'` when calling the new function.

### Key Differences Between `call`, `apply`, and `bind`

| Method    | Invocation           | Arguments           | Return Value                       |
| --------- | -------------------- | ------------------- | ---------------------------------- |
| `call()`  | Executes immediately | Passed individually | Returns the result of the function |
| `apply()` | Executes immediately | Passed as an array  | Returns the result of the function |
| `bind()`  | Does not execute     | Passed individually | Returns a new function             |

### Practical Example: Using `call`, `apply`, and `bind` in Real Scenarios

Suppose you have a function that calculates the area of a rectangle, but you need to use it with different objects:

```javascript
function calculateArea() {
  return this.length * this.width;
}

const rectangle1 = { length: 10, width: 5 };
const rectangle2 = { length: 7, width: 3 };

// Using call()
console.log(calculateArea.call(rectangle1)); // Output: 50
console.log(calculateArea.call(rectangle2)); // Output: 21

// Using apply()
console.log(calculateArea.apply(rectangle1)); // Output: 50
console.log(calculateArea.apply(rectangle2)); // Output: 21

// Using bind()
const areaOfRectangle1 = calculateArea.bind(rectangle1);
const areaOfRectangle2 = calculateArea.bind(rectangle2);

console.log(areaOfRectangle1()); // Output: 50
console.log(areaOfRectangle2()); // Output: 21
```

In this example:

- `call()` and `apply()` immediately execute the function with the specified object context.
- `bind()` creates a new function with the specified object context that can be called later.

### Summary

- **`call()`**: Immediately invokes the function with a specified `this` value and arguments passed one by one.
- **`apply()`**: Immediately invokes the function with a specified `this` value and arguments passed as an array.
- **`bind()`**: Creates a new function with a specified `this` value and optional arguments, which can be called later.

These methods are powerful when you need to control the context (`this`) of a function, making your code more flexible and reusable. Let me know if you have more questions or if you'd like more examples!
