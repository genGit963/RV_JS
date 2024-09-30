// - Arrow functions and their lexical `this` binding

//  ********************** Arrow Function **********************
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
console.log("add: ", add(9, 9));

//  ********************** Understanding Lexical "this" Binding **********************
/*
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

/*
 * 2. How Arrow Functions Handle "this"

        Arrow functions do not have their own "this". 
        Instead, they capture the "this" value 
        of the enclosing (lexical) scope 
        at the time they are defined.

    Lexical "this": 
        The value of "this" inside an arrow function 
        is the same as the value of "this" outside the function.
 */
const obj = {
  name: "Alice",
  regularFunction: function () {
    console.log(this.name); // 'Alice'
  },
  arrowFunction: () => {
    console.log("this.name: ", this.name); // Undefined or error
    console.log("this: ", this);
  },
};
/**
 * regularFunction: 
        "this" refers to obj because it's called as a method.

 * arrowFunction: 
        "this" does not refer to obj because 
        arrow functions do not have their own "this"; 

        it uses the "this" from the outer scope 
        (which could be the global object or undefined).
 */
obj.regularFunction(); // 'Alice'
obj.arrowFunction(); // Undefined or error
