/**
 * Promises:
    are objects that represent the eventual completion (or failure) 
    of an asynchronous operation and its resulting value. 

    A Promise is a placeholder for a value that will eventually be available.
 */

/**
 * States of a Promise
    A Promise has three possible states:

    Pending: 
        The initial state. The promise is neither "fulfilled" nor "rejected".

    Fulfilled (resolve()): 
        The operation completed successfully, and the promise now has a resolved value.

    Rejected (reject()): 
        The operation failed, and the promise has a reason (error) explaining why it failed.
*/
const promise = new Promise((resolve, reject) => {
  // Do some asynchronous operation
  let success = true; // change this to false to simulate failure
  if (success) {
    resolve("Operation completed successfully!");
  } else {
    reject("Operation failed.");
  }
});

promise
  .then((result) => {
    console.log("Success: ", result);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

//   Example of fetching data from a server using a promise-like approach

function fetchData() {
  return new Promise((resolve, reject) => {
    const data = "Sample Data";
    const isSuccess = true; // Simulating success
    setTimeout(() => {
      if (isSuccess) {
        resolve(data);
      } else {
        reject("Error fetching data.");
      }
    }, 2000); // Simulate a 2-second delay
  });
}

fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error(error);
  });
