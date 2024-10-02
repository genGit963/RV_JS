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

/**
 * Common Uses of Callbacks in Asynchronous Functions
 * Event handling: Reacting to user inputs like clicks or key presses.
 * File reading: Working with files, e.g., using the fs.readFile() function in Node.js.
 * HTTP requests: Making network requests, like with XMLHttpRequest or fetch.
 */

// Example: Asynchronous HTTP Request (with Callback)
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Mahesh", age: 29 };
    callback(data);
  }, 3000); // Simulates a 3-second network delay
}

fetchData((data) => {
  console.log("Data received:", data);
});

console.log("Fetching data...");

/**
 * Callback Hell
        When multiple asynchronous operations are nested, 
        it can lead to complex and unreadable code, commonly known as callback hell.
 */
asyncOperation1(function (result1) {
  asyncOperation2(result1, function (result2) {
    asyncOperation3(result2, function (result3) {
      // More nested callbacks...
    });
  });
});
