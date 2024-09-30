//       - Function declarations vs. expressions
/*
    "function declarations" and "function expressions" 
    are TWO WAYS to define functions.

    They differ in syntax, behavior, and how they are hoisted.
 */

// 1. Function Declarations
/**
 * Naming: 
    Function declarations must have a name.

 * Syntax:
    function functionName(parameters) {
    // function body
    }

 * Hoisting: 
    Function declarations are hoisted, 
    meaning you can call the function before its declaration in the code. 
    JavaScript moves the function declaration 
    to the top of the scope during the compile phase.
 */
sayHello(); // Works due to hoisting // output: Hello1
function sayHello() {
  console.log("Hello!");
}

// reCalling and redeclaring works but last will be accepted
sayHello(); // output: Hello1
function sayHello() {
  console.log("Hello1");
}

// 1.  Function Expression
/**
 * Anonymous vs. Named:
    Function expressions can be anonymous (no name) or named.

 * Syntax:
    const functionName = function(parameters) {
    // function body
    }

 * Hoisting: 
    Function expressions are not hoisted,
    so the function cannot be called before it is assigned. 
    
    "JavaScript treats it as a variable", 
    and it remains uninitialized until 
    the code execution reaches that point.
 */

// sayMom(); // Error: sayMom is not defined

const sayMom = function () {
  console.log("Mom");
};

sayMom();
