//       - Prototypal inheritance vs. classical inheritance
/**
 * JavaScript supports two main types of inheritance:
    1. prototypal inheritance
    2. classical inheritance
 */

/**
 * Prototypal Inheritance
    is a feature in JavaScript where objects 
    can inherit properties and methods from other objects. 
    
    Every object has a prototype, which is another object 
    from which it can inherit properties.

    Key Features:
        Objects as prototypes: 
            Each object can serve as a prototype for another object, 
            allowing for a chain of inheritance.

        Dynamic: 
            You can add, modify, or remove properties 
            and methods from objects at runtime.

        More flexible: 
            Prototypal inheritance allows for direct linking 
            between objects, which can lead to more dynamic behavior.
*/
// Parent object
const animal = {
  speak: function () {
    console.log("Animal speaks");
  },
};

// Child object inheriting from animal
const dog = Object.create(animal);
dog.bark = function () {
  console.log("Dog barks");
};

dog.speak(); // Output: "Animal speaks"
dog.bark(); // Output: "Dog barks"
