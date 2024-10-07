// Understanding the prototype chain
/**
 * Prototype Chain:
    is a fundamental concept that enables object inheritance. 
    
    Every object in JavaScript has a prototype, 
    which is another object from which it can inherit properties and methods. 
    
    The prototype chain is the mechanism through which 
    JavaScript objects can access properties and methods of other objects.
*/

/**
 * Understanding the Prototype Chain:
 
    Prototype: 
        When you create an object in JavaScript, 
        it automatically gets a prototype. 
        You can access this prototype using Object.getPrototypeOf(obj) or the __proto__ property 
        --> (though using __proto__ is generally discouraged) <--

    Prototype Chain:
        When you try to access a property of an object, 
        JavaScript first looks for the property on the object itself. 
        If it doesn’t find it, it checks the object’s prototype, and 
        if still not found, 
        it checks the prototype’s prototype, and so on, 
        until it either finds the property or reaches null.

    Constructor Functions: 
        You can create objects with a prototype using constructor functions.
*/

// simple example to illustrate the prototype chain.
// Define a constructor function for Animal
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

// Define a constructor function for Dog that inherits from Animal
function Dog(name) {
  Animal.call(this, name); // Call the Animal constructor
}

// Set Dog's prototype to be an instance of Animal
Dog.prototype = Object.create(Animal.prototype);

// Set the constructor property back to Dog
Dog.prototype.constructor = Dog;

// Add a method specific to Dog : Overiding speak()
Dog.prototype.speak = function () {
  console.log(`${this.name} barks.`);
};

Dog.prototype.jump = function () {
  console.log(`${this.name} can jumps.`);
};

// Create an instance of Dog
const dog = new Dog("Rex");

dog.speak(); // Output: Rex barks.
console.log(dog.name); // Output: Rex

// Check the prototype chain
console.log(Object.getPrototypeOf(dog)); // Output: Dog { speak: [Function (anonymous)] }
console.log(Object.getPrototypeOf(Object.getPrototypeOf(dog))); // Output: Animal { speak: [Function (anonymous)] }
console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(dog)))
); // Output: null
