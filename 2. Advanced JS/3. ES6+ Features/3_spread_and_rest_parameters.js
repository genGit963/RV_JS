//        - Spread (`...`) and rest parameters (`...args`)

/**
 * spread operator (...) and the rest parameters (...args) 
        are two powerful features that enhance how you handle arrays 
        and function parameters. While they look similar, 
        they serve different purposes.
*/

// 1. Spread Operator (...)
/**
 * Spread Operator (...)
        The spread operator allows you to expand elements of an 
        iterable (like an array or a string) 
        into individual elements. 
        It's useful for merging or cloning arrays and objects.
*/
// 1. Expanding Arrays
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, ...numbers, 6];
console.log(moreNumbers); // Output: [4, 5, 1, 2, 3, 6]

// 2. cloning array
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
console.log(clonedArray); // Output: [1, 2, 3]

// 3. Merging Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// 4. Spreading Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
// Merging objects
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

// 2. Rest Parameters (...args)
/**
 *Rest parameters
        allow you to represent an indefinite number of arguments 
        as an array. 
        This is useful when you want to create functions 
        that can accept varying numbers of parameters.

        Eg: console.log(obj1, obj2, .....objn);
 */
// 1: Basic Usage
function sum(...numbers) {
  console.log("given parameterss ", numbers);
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30

// 2. Mixing with Regular Parameters
function multiply(factor, ...numbers) {
  return numbers.map((num) => num * factor);
}
console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]

// 3. Rest Parameters with Array Methods
function logAll(...args) {
  console.log(args);
  console.log(...args);
}
logAll("apple", "banana", "cherry"); // Output: ['apple', 'banana', 'cherry']

/**
 * Spread Operator (...): 
        Expands elements of an iterable (arrays or objects) 
        into individual elements. 

 * Rest Parameters (...args): 
        Collects multiple function arguments into a single array, 
        allowing functions to accept any number of arguments.
*/
