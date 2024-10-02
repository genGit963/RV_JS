// - Closures: functions that capture the scope in which they were created

/**
 * Closure
 *  is a function that captures and remembers the variables
 *  from its surrounding scope even after that scope has finished executing.
 *
 *  This ability to "close over" the scope
 *  and retain access to its variables
 *  is what makes closures powerful in JavaScript.
 *
 
 * How Closures Work?
    When a function is created inside another function, 
    the inner function has access to the variables in the outer function's scope. 
    Even if the outer function has finished execution, the inner function "remembers" 
    the variables it had access to. This concept is called closure.
 */
function outerFunction() {
  let outerVariable = "I am from outer scope";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: 'I am from outer scope'

/**
 * Why are Closures Useful?
        Closures are useful because they allow functions to "remember" 
        and access variables from their scope chain, even when called outside that scope. 
        
    Some key use cases:

    * Data encapsulation: Hide variables from being accessed or modified from outside the function.
    * Callbacks: Store variables in event handlers or asynchronous functions.
    * Function factories: Create functions with pre-configured settings.
 */
//1. Example: Data Encapsulation
function counter() {
  let count = 0; // Private variable

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const increment = counter();
increment(); // Count: 1
increment(); // Count: 2
increment(); // Count: 3

//2. Example: Function Factory
// Closures can be used to create functions that are "pre-configured" with certain values.
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// 3. Asynchronous Example
// Closures are often used in asynchronous programming to
// retain access to variables even after the surrounding function has executed.
function delayedMessage(message, delay) {
  setTimeout(function () {
    console.log(message);
  }, delay);
}

delayedMessage("Hello, Mahesh!", 2000); // Prints message after 2 seconds
