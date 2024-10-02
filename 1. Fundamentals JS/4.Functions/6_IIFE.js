// - Immediately invoked function expression (IIFE)

/**
 * Immediately Invoked Function Expression (IIFE)
 *  is a JavaScript function that is
 *  --> "defined and executed right after it is created".
 *
 *  It runs automatically without being explicitly called.
 *  This pattern is often used to
 *  -> "create a local scope to protect variables from polluting the global scope".
 *
 */
//Syntax of IIFE
(function () {
  // Code inside the IIFE
})();

/**
 * The key parts:
    (function() { ... }): This turns the function into a function expression.
    () at the end immediately invokes the function.

 * Why Use IIFE?
    The primary reason to use an IIFE is to create a private scope. 
    This helps avoid polluting the global namespace and allows for 
    local variables that cannot be accessed outside the IIFE.

        1. "Encapsulate code": Protect variables inside the function from being accessible globally.
        2. "Avoid conflicts": Prevent naming conflicts between variables in different parts of a program.
        3. "Execute code immediately": Run a function as soon as it is defined without needing to call it later.
 */
(function () {
  const message = "Hello, Mahesh";
  console.log(message);
})();

// 1. IIFE with Parameters
(function (name) {
  console.log("Hello, " + name + "!!");
})("Mahesh");

// 2. With IIFE (Encapsulating Variables)
(function () {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  increment(); // 1
  increment(); // 2
})();

console.log(typeof count); // 'undefined'

// 3. Avoiding Hoisting Issues with IIFE
var x = 10;

(function () {
  console.log(x); // undefined, because of hoisting
  var x = 20;
})();
