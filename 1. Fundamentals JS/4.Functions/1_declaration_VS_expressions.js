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
sayHello(); // Works due to hoisting

function sayHello() {
  console.log("Hello!");
}

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
sayHello(); // Works due to hoisting

function sayHello() {
  console.log("Hello1");
}
