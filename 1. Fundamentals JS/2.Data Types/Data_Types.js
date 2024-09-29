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

// 3. symbol
/*
Definition: 
    A unique and immutable value that is often used 
    as an identifier for object properties. 
    Every symbol is unique.

Syntax: 
    Symbols are created using the Symbol() function
    
*/
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log("sym1 ==== sym2 : ", sym1 === sym2); // false, because every Symbol is unique
