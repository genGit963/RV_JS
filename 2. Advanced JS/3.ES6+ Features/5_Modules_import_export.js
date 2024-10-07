//        - Modules: `import` and `export` syntax for modular programming

/**
 * JavaScript modules 
        1. allow you to break your code into reusable pieces, 
        2. making it easier to manage and maintain. 
        
        The import and export syntax provides 
        a clean way to share functionality between different files.
*/
//  ----------------- 1. Exporting Modules -----------------
/*
    You can export variables, functions, or classes 
    from a module so that they can be imported in other modules.
*/
export const PI = 3.14;
export function add(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}

// Default Exports
/**
 * Default Exports
        You can also export a single value as the default export. 
        A default export is typically used 
        when you want to export one primary thing from a module.
*/
// greeting.js
const greeting = "Hello, World!";
export default greeting;

// ----------------- 2. Importing Modules -----------------
// Importing Named Exports
/*
    When importing named exports, you need to use the same names 
    as the exported members.
*/
// main.js
import { PI, add, multiply } from "./math.js";
console.log(PI); // Output: 3.14
console.log(add(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6
