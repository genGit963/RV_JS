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
  name: "Jaxey",
  speak: function () {
    console.log("Animal speaks");
    console.log("Name is: ", this.name);
  },
};

// Child object inheriting from animal
const dog = Object.create(animal);
dog.bark = function () {
  console.log("Dog barks");
};

dog.speak(); // Output: "Animal speaks Programmer: mahesh"
dog.name = "Jax";
dog.bark(); // Output: "Dog barks"

/**
 * Classical Inheritance
        It is more common in languages like Java or C++. 
        In JavaScript, classical inheritance can be achieved 

        using the "class" syntax introduced in ES6. 
        Here, classes can be created, and 
        one class can inherit from another using the extends keyword.

    Key Features:
        Classes and constructors: 
            You define a class with a constructor and methods. 
            Instances of the class can inherit from it.

        Static methods: 
            You can define static methods on classes 
            that are not tied to instances but rather to the class itself.
            
        More structured: 
            It often resembles classical inheritance patterns in other languages.
*/
// Parent class
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const myDog = new Dog();
myDog.speak(); // Output: "Animal speaks"
myDog.bark(); // Output: "Dog barks"
