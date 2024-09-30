// - Arrow functions and their lexical `this` binding

/**
 * Arrow Functions and Their Lexical this Binding Explained Simply
 
 * Definition:
    Arrow functions in JavaScript provide a concise way
     to write functions using the => syntax. 
     They are especially useful for "short functions and callbacks".

 * Syntax:
    const functionName = (parameters) => {
    // function body
    }; 
 */
const add = (a, b) => a + b;

/**
 * Understanding Lexical "this" Binding
 * 
 * 1. The Problem with "this" in Regular Functions
        In regular functions, 
        the value of "this" depends on how the function is called, 
        not where it's defined. This can lead to confusion:

        Global Context: 
            In the global scope,
            "this" refers to the global object (window in browsers).

        Object Methods: 
            When a function is called as a method of an object, 
            "this" refers to that object.

        Standalone Function Calls: 
            When a function is called without any context, 
            "this" defaults to the global object 
            (in non-strict mode) or undefined (in strict mode).
 */
function regularFunction() {
  console.log(this);
}

regularFunction(); // Logs global object or undefined
