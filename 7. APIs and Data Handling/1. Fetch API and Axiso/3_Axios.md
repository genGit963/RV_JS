# Using Axios for Promise-Based HTTP Requests with Interceptors

## Overview of Axios and Its Features

Axios is a popular JavaScript library used for making HTTP requests. It is built on top of Promises, which makes handling asynchronous code easier and more readable. Axios is commonly used in web applications to interact with RESTful APIs. One of its most powerful features is the ability to use interceptors, which allow you to modify or handle requests or responses before they are processed by the `.then()` or `.catch()` methods. This feature is particularly useful for tasks like adding authentication tokens, handling errors globally, or logging data.

In this guide, we will cover everything from the basics of Axios to advanced usage with interceptors, including real-world examples, common pitfalls, and performance considerations.

## Table of Contents

1. Introduction to Axios

   - What is Axios?
   - Advantages of using Axios over Fetch API

2. Basic Axios Setup and HTTP Requests

   - GET requests
   - POST requests
   - PUT, DELETE, and other HTTP methods

3. Axios Interceptors

   - What are interceptors?
   - Request interceptors
   - Response interceptors

4. Error Handling in Axios

   - Handling network errors
   - Managing server errors
   - Global error handling with interceptors

5. Real-World Example of Using Axios with Interceptors

   - Creating a basic API client with interceptors

6. Common Pitfalls when Using Axios

   - Infinite request loops with interceptors
   - Error handling issues
   - CORS and Axios

7. Performance Considerations

   - Optimizing requests
   - Reducing payload size with Axios
   - Handling large datasets efficiently

8. Conclusion

## 1. Introduction to Axios

### What is Axios?

Axios is a promise-based HTTP client for JavaScript that can be used in both front-end (browser) and back-end (Node.js) environments. It provides an easy-to-use API for making HTTP requests, handling responses, and managing errors. Axios also includes built-in features like request/response transformation, timeout control, and more.

### Advantages of Using Axios Over Fetch API

- **Supports Older Browsers:** Axios works with older browsers that might not support the Fetch API.
- **Automatic JSON Transformation:** Axios automatically transforms JSON data to and from requests and responses.
- **Interceptors:** Axios allows you to handle requests and responses more flexibly using interceptors.
- **Better Error Handling:** Axios rejects promises automatically for network errors and HTTP error codes.

## 2. Basic Axios Setup and HTTP Requests

### GET Requests

A GET request is used to retrieve data from a server. Here's an example using Axios:

```js
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### POST Requests

A POST request is used to send data to the server:

```js
axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "Axios POST Request",
    body: "This is a test post",
    userId: 1,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### PUT and DELETE Requests

Other HTTP methods like PUT and DELETE can also be used with Axios:

```js
// PUT request
axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    title: "Updated Title",
  })
  .then((response) => {
    console.log(response.data);
  });

// DELETE request
axios
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("Deleted Successfully");
  });
```

## 3. Axios Interceptors

### What Are Interceptors?

Interceptors in Axios allow you to run your code or manipulate the request or response before it is handled by `.then()` or `.catch()`. This is useful for tasks like adding authentication tokens, logging, error handling, or modifying data.

### Request Interceptors

Request interceptors allow you to modify the request configuration before the request is sent:

```js
axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "Bearer my-token";
    console.log("Request Interceptor:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

### Response Interceptors

Response interceptors allow you to handle the response data or errors globally:

```js
axios.interceptors.response.use(
  (response) => {
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access - redirecting to login");
    }
    return Promise.reject(error);
  }
);
```

## 4. Error Handling in Axios

### Handling Network Errors

Network errors are automatically handled by Axios, and it rejects the promise with the error:

```js
axios.get("https://invalidurl.com/data").catch((error) => {
  console.error("Network Error:", error);
});
```

### Managing Server Errors

Server errors (e.g., 500 Internal Server Error) can be handled using the response interceptors or in the `.catch()` block:

```js
axios.get("https://jsonplaceholder.typicode.com/posts/99999").catch((error) => {
  if (error.response) {
    console.error("Server Error:", error.response.status);
  }
});
```

### Global Error Handling with Interceptors

Using interceptors for error handling ensures consistent error management across all requests:

```js
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      `Error Status: ${
        error.response ? error.response.status : "Network Error"
      }`
    );
    return Promise.reject(error);
  }
);
```

## 5. Real-World Example of Using Axios with Interceptors

### Creating a Basic API Client with Interceptors

Let's create a simple API client using Axios with interceptors to handle authentication and errors:

```js
const apiClient = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      alert("Session expired. Please log in again.");
    }
    return Promise.reject(error);
  }
);

// Using the API client
apiClient
  .get("/users")
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error fetching users:", error));
```

## 6. Common Pitfalls When Using Axios

### Infinite Request Loops with Interceptors

Be careful when modifying requests inside interceptors, as incorrect configurations can lead to infinite request loops.

### Error Handling Issues

Ensure that error handling logic is not overridden by subsequent interceptors that may modify the error object.

### CORS and Axios

Cross-Origin Resource Sharing (CORS) errors might occur if the server does not allow requests from your domain. Configure the server's CORS policy accordingly to avoid this issue.

## 7. Performance Considerations

### Optimizing Requests

- **Reduce Redundant Requests:** Cache responses where applicable to minimize unnecessary requests.
- **Batch Requests:** Use `axios.all()` to make multiple requests simultaneously.

### Reducing Payload Size with Axios

Ensure that you only send and receive the required data to reduce payload size and improve performance:

```js
axios.get("https://api.example.com/data", {
  params: {
    limit: 10,
  },
});
```

### Handling Large Datasets Efficiently

When dealing with large datasets, use pagination or lazy loading to fetch data in chunks to avoid performance bottlenecks.

## Conclusion

- **Axios simplifies HTTP requests** with an intuitive API and automatic JSON transformation.
- **Interceptors provide powerful tools** to handle requests and responses globally, enabling advanced features like logging and error handling.
- **Error handling with Axios** is more robust compared to Fetch, allowing for better user experience and debugging.
- **Common pitfalls include infinite loops** in interceptors and misconfigured error handling.
- **Optimize Axios requests** by caching, reducing payload sizes, and handling large datasets efficiently.
