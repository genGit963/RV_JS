//       - Template literals for multi-line strings and variable interpolation
/**
 * Template literals 
    in JavaScript provide a powerful way to create multi-line strings 
    and perform variable interpolation. 
    
    They are enclosed by backticks (`) instead of single (') 
    or double quotes (")

    Features of Template literals string:
        1. Multi-line Strings
        2. Variable Interpolation
        3. Using Expressions
        4. Nesting Template Literals
        5. Tagged Templates
*/

// 1. Multi-line Strings
const multiLineString = `This is a string
that spans multiple
lines.`;

console.log(multiLineString);

// 2. Variable Interpolation
const name1 = "Alice";
const age = 25;

const greeting = `Hello, my name is ${name1} and I am ${age} years old.`;
console.log(greeting);

// 3. Using Expressions
const a = 5;
const b = 10;

const sumMessage = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sumMessage);

// 4. Nesting Template Literals
const name2 = "Bob";
const message = `Welcome, ${`${name2}`}. Enjoy your stay!`;
console.log(message);
