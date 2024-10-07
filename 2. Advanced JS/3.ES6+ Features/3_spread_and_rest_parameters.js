//        - Spread (`...`) and rest parameters (`...args`)

/**
 * spread operator (...) and the rest parameters (...args) 
        are two powerful features that enhance how you handle arrays 
        and function parameters. While they look similar, 
        they serve different purposes.
*/

/**
 * Spread Operator (...)
        The spread operator allows you to expand elements of an 
        iterable (like an array or a string) 
        into individual elements. 
        It's useful for merging or cloning arrays and objects.
*/
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, ...numbers, 6];
console.log(moreNumbers); // Output: [4, 5, 1, 2, 3, 6]

// cloning array
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
console.log(clonedArray); // Output: [1, 2, 3]
