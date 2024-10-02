/*
Control Structures
    - Conditional statements: `if`, `else if`, `else`, `switch`
    - Loops: `for`, `while`, `do...while`, `for...in`, `for...of`
    - Using `break` and `continue` for flow control
*/

// for ..... in
/*
Purpose: 
    Iterates over the "enumerable properties" of an object 
    (including inherited properties).

Use Case: 
    Best used for objects.

Syntax: 
    for (let i in object){
        // code to be executed
    }
*/
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key); // name, age, city
  console.log(person[key]); // John, 30, New York
}

// for...of
/*
Purpose: 
    Iterates over the "values of iterable objects"
    like arrays, strings, maps, sets, etc.

Use Case: 
    Best used for iterables 
    (e.g., arrays, strings, sets, maps).

Syntax:
    for (let value of iterable) {
        // code block to be executed
    }

*/
const array = ["apple", "banana", "cherry"];
for (let fruit of array) {
  console.log(fruit); // apple, banana, cherry
  for (let letter of fruit) {
    console.log(letter);
  }
}
