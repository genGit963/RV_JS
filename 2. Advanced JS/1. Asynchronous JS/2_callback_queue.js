/**
 * The callback queue in JavaScript is a crucial part of the 
    "event-driven architecture", 
    which helps manage "asynchronous code execution". 
    
    It works with the event loop to ensure 
    that operations are executed in the right order.
 */

/**
 * Callback Queue: 
    It's where functions (callbacks) that are ready to run are 
    placed after asynchronous operations are completed.

 * Event Loop: 
    It constantly checks the call stack to see if it's empty. 
    If it is, it will move the first function from the 
    callback queue to the call stack for execution.
*/
console.log("Start"); // Executes immediately

setTimeout(() => {
  console.log("Inside setTimeout callback"); // Executes later
}, 1000);

console.log("End"); // Executes immediately
