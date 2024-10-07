//       - Destructuring assignment for arrays and objects
/**
 * Destructuring assignment 
        allows you to unpack values from arrays or properties from objects 
        into distinct variables. 
        This feature can make your code cleaner and more readable

 Destructuring  are:
        1. Destructuring Arrays
            1. skipping the values
            2. defaults values

        2. Destructuring Objects
            1. Renaming Variables
            2. Default values

        3. Nested Destructuring

*/
// ----------- 1. Destructuring Arrays -----------
const numbers = [1, 2, 3];

// Destructuring assignment
const [first, second, third] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3

// 1.1 skipping the values
const colors = ["red", "green", "blue"];
// Skip the second color
const [color1, , color3] = colors;
console.log(color1); // Output: 'red'
console.log(color3); // Output: 'blue'

// 1.2 default values
const fruits = ["apple"];
// Set default value for second fruit
const [fruit1, fruit2 = "banana"] = fruits;
console.log(fruit1); // Output: 'apple'
console.log(fruit2); // Output: 'banana'

// ----------- 2. Destructuring Objects -----------
const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
};
//Destructuring assignment
const { name1, age, city } = person;
console.log(name1); // Output: 'Alice'
console.log(age); // Output: 30
console.log(city); // Output: 'Wonderland'

// 2.1  Renaming Variables
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};
// Renaming variables
const { make: carMake, model: carModel } = car;
console.log(carMake); // Output: 'Toyota'
console.log(carModel); // Output: 'Camry'

// 2.2 Default values
const book = {
  title: "1984",
};
// Set default value for author
const { title, author = "Unknown" } = book;
console.log(title); // Output: '1984'
console.log(author); // Output: 'Unknown'

// 3. Nested Destructuring
