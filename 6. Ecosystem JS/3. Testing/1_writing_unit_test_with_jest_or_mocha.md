# Testing: Writing Unit Tests with Jest or Mocha

## Overview of Unit Testing with Jest or Mocha

Unit testing is a software testing technique where <u>individual units or components of a software are tested in isolation</u>. `Jest` and `Mocha` are <u>two of the most popular JavaScript testing frameworks that help in writing and running unit tests</u>.

1. **Jest**: <br> It is eveloped by Facebook, is often preferred for its simplicity, built-in assertions, and zero-config setup.
2. **Mocha**: <br> It is a flexible testing framework that allows the use of various assertion libraries like `Chai` and has a wide range of `plugins for customization`.

Unit testing ensures that each part of the code works as expected, which leads to more reliable and maintainable software. It helps catch bugs early in the development cycle and makes the codebase more robust.

## Table of Content

1. Introduction to Unit Testing

   - What is unit testing?
   - Why unit testing is important?

2. Introduction to Jest

   - Setting up Jest
   - Writing and running tests with Jest
   - Mocking functions and modules in Jest

3. Introduction to Mocha

   - Setting up Mocha
   - Writing and running tests with Mocha
   - Using assertion libraries with Mocha (Chai)

4. Comparison of Jest and Mocha

   - When to choose Jest?
   - When to choose Mocha?

5. Writing Unit Tests with Jest

   - Basic test structure in Jest
   - Asynchronous tests in Jest
   - Testing exceptions and errors in Jest

6. Writing Unit Tests with Mocha

   - Basic test structure in Mocha
   - Asynchronous tests in Mocha
   - Testing exceptions and errors in Mocha

7. Real-World Example

   - Testing a simple function using both Jest and Mocha

8. Common Pitfalls and Best Practices

   - Common issues in unit testing
   - Best practices to follow

9. Performance Considerations

   - Optimizing test performance
   - Parallel and serial test execution

10. Conclusion

## 1. Introduction to Unit Testing

### What is Unit Testing?

Unit testing `involves testing individual units or components of software to verify that they perform as expected`. A "unit" in this context is the smallest piece of code that can be logically isolated, such as a function or method.

### Why Unit Testing is Important?

- **Early bug detection:** Catches issues early in the development process.
- **Code reliability:** Increases confidence in the stability of the code.
- **Documentation:** Serves as a form of documentation by describing how the code should behave.

## 2. Introduction to Jest

### Setting up Jest

To set up Jest in your project, you need to have Node.js and npm installed. You can install Jest using the following command:

```bash
npm install --save-dev jest
```

Add the following script to your `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

### Writing and Running Tests with Jest

Create a test file named `sum.test.js`:

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

To run the test:

```bash
npm test
```

### Mocking Functions and Modules in Jest

Mocking is useful to isolate the code you are testing by replacing dependencies with mock functions or modules:

```js
const fetchData = jest.fn(() => Promise.resolve("data"));
```

## 3. Introduction to Mocha

### Setting up Mocha

To set up Mocha, install it using npm:

```bash
npm install --save-dev mocha
```

Add the following script to your `package.json`:

```json
"scripts": {
  "test": "mocha"
}
```

### Writing and Running Tests with Mocha

Create a test file named `sum.test.js`:

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const assert = require("assert");
const sum = require("./sum");

describe("Sum Function", function () {
  it("should return 3 when 1 and 2 are added", function () {
    assert.equal(sum(1, 2), 3);
  });
});
```

Run the tests using:

```bash
npm test
```

### Using Assertion Libraries with Mocha (Chai)

To use the Chai assertion library with Mocha:

```bash
npm install --save-dev chai
```

Replace assertions in your test file:

```js
const chai = require("chai");
const expect = chai.expect;
expect(sum(1, 2)).to.equal(3);
```

## 4. Comparison of Jest and Mocha

- **Jest** is better for projects that need an all-in-one testing solution with built-in assertion, mocking, and spying capabilities.
- **Mocha** is ideal if you prefer flexibility and want to use different assertion libraries or need more control over the test environment.

## 5. Writing Unit Tests with Jest

### Basic Test Structure in Jest

```js
test("basic test", () => {
  expect(true).toBe(true);
});
```

### Asynchronous Tests in Jest

```js
test("async test with promise", async () => {
  const data = await fetchData();
  expect(data).toBe("data");
});
```

### Testing Exceptions and Errors in Jest

```js
test("throws error on invalid input", () => {
  expect(() => someFunction()).toThrow(Error);
});
```

## 6. Writing Unit Tests with Mocha

### Basic Test Structure in Mocha

```js
describe("Basic Test", function () {
  it("should return true", function () {
    assert.equal(true, true);
  });
});
```

### Asynchronous Tests in Mocha

```js
it("async test with promise", function (done) {
  fetchData().then((data) => {
    assert.equal(data, "data");
    done();
  });
});
```

### Testing Exceptions and Errors in Mocha

```js
it("should throw error", function () {
  assert.throws(() => someFunction(), Error);
});
```

## 7. Real-World Example

Suppose you have a simple function that calculates the factorial of a number. Testing the function with Jest and Mocha will ensure it handles both regular inputs and edge cases effectively.

### Factorial Function Test Example

```js
// factorial.js
function factorial(n) {
  if (n < 0) throw new Error("Negative input not allowed");
  return n <= 1 ? 1 : n * factorial(n - 1);
}
module.exports = factorial;
```

#### Jest Test Example

```js
// factorial.test.js
const factorial = require("./factorial");

test("calculates factorial of 5", () => {
  expect(factorial(5)).toBe(120);
});
```

#### Mocha Test Example

```js
// factorial.test.js
const assert = require("chai").assert;
const factorial = require("./factorial");

describe("Factorial Function", function () {
  it("should return 120 for input 5", function () {
    assert.equal(factorial(5), 120);
  });
});
```

## 8. Common Pitfalls and Best Practices

### Common Issues in Unit Testing

- **Ignoring edge cases:** Failing to test edge cases can lead to unexpected bugs.
- **Over-mocking:** Mocking too much can reduce test effectiveness by not testing real behavior.

### Best Practices

- Write tests that are independent and do not depend on other tests.
- Aim for high code coverage but don't focus solely on it.
- Keep your tests simple and focused.

## 9. Performance Considerations

### Optimizing Test Performance

- **Parallel Execution:** Jest runs tests in parallel by default, which speeds up test execution.
- **Serial Execution:** Mocha runs tests sequentially, but you can use libraries like `mocha-parallel-tests` for parallel execution.

### Parallel and Serial Test Execution

- **Jest:** Parallel by default, providing faster test execution.
- **Mocha:** Runs tests serially by default but can be optimized.

## Conclusion

- **Jest is easier to set up** and comes with built-in features like assertions and mocking.
- **Mocha offers flexibility** and customization for advanced testing scenarios.
- **Asynchronous Testing:** Both frameworks handle async code well, but Jest has simpler syntax.
- **Error Handling:** Unit tests with Jest and Mocha can test error handling effectively.
- **Real-world testing:** Both frameworks are widely used in large-scale JavaScript applications.
- **Performance Consideration:** Jest generally performs better for large test suites due to parallel execution.
