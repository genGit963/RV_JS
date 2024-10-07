//       - Default parameters in function definitions

/**
 * Default Parameters:
        allow you to specify default values for function parameters. 
        
        This means that if a parameter is not provided 
        when the function is called, 
        it will take on the default value you set. 
        
        Default parameters enhance function flexibility and readability
        by reducing the need for conditional statements to 
        check for undefined values
*/
function createGreeting(greeting = "Hello", name = "World") {
  return `${greeting}, ${name}! `;
}
console.log(createGreeting()); // Output: Hello, World!
console.log(createGreeting("Hi")); // Output: Hi, World!
console.log(createGreeting("Good morning", "Alice")); // Output: Good morning, Alice!

// Default Parameters with Destructuring
function displayUserInfo({ name = "Anonymous", age = 0 } = {}) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayUserInfo(); // Output: Name: Anonymous, Age: 0
displayUserInfo({ name: "Alice" }); // Output: Name: Alice, Age: 0
