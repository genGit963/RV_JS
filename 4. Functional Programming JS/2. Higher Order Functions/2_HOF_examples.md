Higher-order functions are functions that either take other functions as arguments or return them. They are a key feature in JavaScript, especially for working with arrays and object literals. Let's explore some of the most common higher-order functions: `map`, `filter`, `reduce`, and a few other useful ones.

### 1. **`map()`**

The `map()` method is used to create a new array by applying a function to each element of the original array. It does not modify the original array.

#### Syntax:
```javascript
const newArray = array.map(callbackFunction);
```

#### Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

- `map()` takes a callback function that runs on every element of the array.
- It returns a new array containing the transformed values.

### 2. **`filter()`**

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. It is used to filter out elements that do not meet a certain condition.

#### Syntax:
```javascript
const filteredArray = array.filter(callbackFunction);
```

#### Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
```

- `filter()` returns a new array containing only elements that satisfy the condition specified in the callback function.

### 3. **`reduce()`**

The `reduce()` method is used to reduce an array to a single value by executing a reducer function on each element. It accumulates the values into a single result.

#### Syntax:
```javascript
const result = array.reduce((accumulator, currentValue) => {
  // Logic here
}, initialValue);
```

#### Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15
```

- `reduce()` takes a callback with two main parameters: an `accumulator` and the `currentValue`.
- It also takes an optional `initialValue` for the accumulator.

### Other Higher-Order Functions

Apart from `map`, `filter`, and `reduce`, there are several other useful higher-order functions in JavaScript that work with arrays and objects.

### 4. **`forEach()`**

The `forEach()` method executes a provided function once for each array element. It does not return a new array but is often used for side effects.

#### Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2)); 
// Output:
// 2
// 4
// 6
// 8
// 10
```

- `forEach()` is useful when you need to perform an action for each element in the array without needing a return value.

### 5. **`find()`**

The `find()` method returns the first element in the array that satisfies a specified condition. If no elements satisfy the condition, it returns `undefined`.

#### Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find(num => num % 2 === 0);

console.log(firstEven); // Output: 2
```

- `find()` is useful when you only need to find the first matching element in an array.

### 6. **`findIndex()`**

The `findIndex()` method returns the index of the first element that satisfies the specified condition. If no elements satisfy the condition, it returns `-1`.

#### Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const index = numbers.findIndex(num => num > 3);

console.log(index); // Output: 3
```

- `findIndex()` helps to locate the position of an element in the array based on a condition.

### 7. **`some()`**

The `some()` method checks if at least one element in the array passes the condition implemented by the provided function. It returns a boolean value.

#### Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(num => num % 2 === 0);

console.log(hasEvenNumber); // Output: true
```

- `some()` returns `true` if any of the elements in the array pass the condition.

### 8. **`every()`**

The `every()` method checks if all elements in the array pass the condition implemented by the provided function. It returns a boolean value.

#### Example:
```javascript
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(num => num > 0);

console.log(allPositive); // Output: true
```

- `every()` returns `true` only if all elements satisfy the condition.

### 9. **`sort()`**

The `sort()` method sorts the elements of an array in place and returns the sorted array. It can take a callback function to define the sort order.

#### Example:
```javascript
const numbers = [3, 1, 4, 1, 5, 9];
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 1, 3, 4, 5, 9]
```

- The callback function compares two values, helping to sort the array in ascending or descending order.

### 10. **`Object.keys()`, `Object.values()`, and `Object.entries()`**

These methods work with object literals to extract keys, values, or key-value pairs as arrays.

#### Example:
```javascript
const user = {
  name: 'Mahesh',
  age: 30,
  profession: 'Engineer'
};

console.log(Object.keys(user));    // Output: ['name', 'age', 'profession']
console.log(Object.values(user));  // Output: ['Mahesh', 30, 'Engineer']
console.log(Object.entries(user)); // Output: [['name', 'Mahesh'], ['age', 30], ['profession', 'Engineer']]
```

- `Object.keys()` returns an array of the object's keys.
- `Object.values()` returns an array of the object's values.
- `Object.entries()` returns an array of key-value pairs.

### Summary of Common Higher-Order Functions

| Function    | Purpose                                               | Returns       |
|-------------|-------------------------------------------------------|---------------|
| `map()`     | Transforms each element of an array                   | New array     |
| `filter()`  | Filters elements based on a condition                 | New array     |
| `reduce()`  | Reduces array to a single value using a function      | Single value  |
| `forEach()` | Executes a function on each element (no return)       | `undefined`   |
| `find()`    | Finds the first element that matches a condition      | Element or `undefined` |
| `findIndex()` | Finds the index of the first matching element      | Index or `-1` |
| `some()`    | Checks if at least one element matches a condition    | Boolean       |
| `every()`   | Checks if all elements match a condition              | Boolean       |
| `sort()`    | Sorts elements in an array in place                   | Sorted array  |
| `Object.keys()`, `Object.values()`, `Object.entries()` | Works with object literals | Array of keys/values/entries |

These higher-order functions help to make JavaScript code cleaner, more readable, and more efficient by taking advantage of functional programming principles.