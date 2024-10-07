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

// rewrite the same example using async and await to simplify the code
async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log(data); // This will log after 2 seconds: "Data fetched successfully!"
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAsync();

/**
 * Explanation:
    "async": makes a function return a promise.
    "await": makes JavaScript wait until that promise settles and returns its result.
 */

function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John Doe" });
    }, 1000);
  });
}

function getUserPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { postId: 1, title: "Post 1" },
        { postId: 2, title: "Post 2" },
      ]);
    }, 1000);
  });
}

async function fetchUserAndPosts(userId) {
  try {
    const user = await getUser(userId); // Waits for the user data to be fetched
    console.log("User:", user);

    const posts = await getUserPosts(userId); // Waits for the posts to be fetched
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchUserAndPosts(1);
