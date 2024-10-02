// - Callbacks and their role in asynchronous programming

/**
 * Definition:
 *  A callback is a function passed as an argument to another function,
 *  which is executed after the main function has finished its execution.
 *
 *  Callbacks allow us to wait for certain operations,
 *  especially those that take time
 *  (e.g., file reads, database queries), to finish before executing some other function
 *
 */
// Asynchronous Example with a Callback
function greet() {
  setTimeout(() => {
    console.log("Hello!");
  }, 2000); // Waits 2 seconds before running the callback
}

greet();
console.log("End of script");
