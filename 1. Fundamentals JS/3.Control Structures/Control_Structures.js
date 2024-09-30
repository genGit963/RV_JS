/*
Control Structures
    - Conditional statements: `if`, `else if`, `else`, `switch`
    - Loops: `for`, `while`, `do...while`, `for...in`, `for...of`
    - Using `break` and `continue` for flow control
*/

// for ..... in
/*
Purpose: 
    Iterates over the enumerable properties of an object 
    (including inherited properties).

Use Case: 
    Best used for objects.
*/
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key); // name, age, city
  console.log(person[key]); // John, 30, New York
}
