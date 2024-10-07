//       - Constructor functions and the `new` keyword
/**
 * Constructor functions
        are special functions that are used to create and initialize objects. 
        They serve as blueprints for creating multiple instances of objects 
        with the same properties and methods. 
    
 * "new" keyword:
        is used in conjunction with constructor functions 
        to create a new object instance based on the constructor.

 * Understanding Constructor Functions and the new Keyword

    Constructor Functions: 
        These are regular functions but are defined 
        with a capitalized name to distinguish them from regular functions. 
        
        Inside a constructor function, the "this" keyword 
        refers to the new object being created.

    The new Keyword: 
        When you use the new keyword with a constructor function, the following happens:
            1. A new empty object is created.
            2. The "this" keyword in the constructor function points to this new object.
            3. The new object is linked to the constructor's prototype.
            4. The constructor function returns the new object (unless it explicitly returns another object).
*/
// Define a constructor function for Person
function Person(name, age) {
  this.name = name; // Set the name property
  this.age = age; // Set the age property

  this.display = function () {
    console.log("Name: ", this.name);
    console.log("Age: ", this.age);
  };
}

// Add a method to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create a new instance of Person using the new keyword
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Call the greet method on the instances
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

// display
person1.display();
person2.display();

// enlisting the all prototypes
// Note: display() will not be in prototypes
console.log("person1 prototypes: ", Object.getPrototypeOf(person1)); // Output: person1 prototypes:  { greet: [Function (anonymous)] }
console.log("person2 prototypes: ", Object.getPrototypeOf(person2)); // Output: person2 prototypes:  { greet: [Function (anonymous)] }
