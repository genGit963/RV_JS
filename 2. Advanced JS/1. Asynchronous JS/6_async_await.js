/**
 * Async/await 
    is a way to handle asynchronous operations in JavaScript, 
    making your code look more like synchronous code,
    which is often easier to read and maintain.
*/

// Example of using promises to fetch some data
function fetchData() {
  return new Promise((resolve, reject) => {
    let value = true;
    setTimeout(() => {
      if (value === true) {
        resolve("Data fetched successfully!");
      }
      reject("It failed");
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("result:", data); // This will log after 2 seconds: "Data fetched successfully!"
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//
