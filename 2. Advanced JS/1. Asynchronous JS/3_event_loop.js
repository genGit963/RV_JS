/**
 * EVENT LOOP:
 * is the backbone of JavaScript's concurrency model,
 * responsible for handling asynchronous code execution.
 * It ensures that non-blocking operations,
 * like callbacks, promises, or async/await, are executed
 * after synchronous code has completed.
 */

/**
 * Understanding the Event Loop:
    JavaScript is single-threaded, 
    meaning it can execute only one operation at a time. 
    
    The event loop manages the execution of code, 
    collects and processes events, and executes tasks 
    from the callback queue when the call stack is empty.
*/

/**
 * Sequence:

    Call Stack: 
        All synchronous code is executed here 
        in a Last-In-First-Out (LIFO) order.

    Callback Queue: 
        Holds all asynchronous callbacks ready to be executed.

    Event Loop: 
        Constantly checks if the call stack is empty. 
        If it is, it moves the first callback from the 
        queue to the call stack for execution.
*/
console.log("Start"); // Executes first

setTimeout(() => {
  console.log("Inside setTimeout"); // Executes last
}, 0);

Promise.resolve().then(() => {
  console.log("Inside Promise"); // Executes before setTimeout
});

console.log("End"); // Executes second
