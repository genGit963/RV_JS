/*
 - Data Types
      - Primitive types: strings, numbers, booleans, null, undefined, and symbol
      - Reference types: objects and arrays
      - Type coercion and type checking (`typeof`, `instanceof`)

*/

// Primitive

// 1. undefined

/*
Definition:
    undefined means a variable has been declared but has not yet been assigned a value.

When it's used:
    Variables declared but not assigned.
    If a function doesn't return a value explicitly, it returns undefined.
    Accessing an object property that doesn't exist.
    An argument not passed into a function.
*/
let x;
console.log(x); // undefined

function greet() {}
console.log(greet()); // undefined

// 2. null
/*
Definition:
    null represents the intentional absence of any object value. 
    It is explicitly set by a developer to signify "no value" or "empty."

When it's used:
    To reset or clear a variable, object, or reference.
    Explicitly setting a variable to signify "no value." 
*/
let person = null; // No object or value is assigned here
console.log(person); // null
console.log("This is " + null + " " + undefined);
