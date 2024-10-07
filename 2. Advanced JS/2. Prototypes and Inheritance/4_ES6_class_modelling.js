//       - ES6 class syntax for defining classes and inheritance

/**
 * In ES6 (ECMAScript 2015),
        JavaScript introduced a more structured syntax 
        for defining classes and implementing inheritance, 
        making it easier to create and manage object-oriented code

    To define a class in ES6, 
        you use the "class" keyword 
        followed by the class name. 
        The class body is enclosed in curly braces.
 */
class Animal {
  // Constructor
  constructor(name) {
    this.name = name;
  }

  // Method
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Creating an instance of the Animal class
const dog = new Animal("Dog");
dog.speak(); // Output: "Dog makes a noise."

/**
 * Adding Methods
        You can add methods to the class body, 
        and these methods are added to the prototype of the class.
*/
class FurAnimal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Creating an instance
const cat = new FurAnimal("Cat");
cat.speak(); // Output: "Cat makes a noise."

/**
 * Inheritance
        To create a class that inherits from another class, 
        you use the "extends" keyword. 
        
        The child class can call the 
        parent class's constructor using super().
*/
class DomesticAnimal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Child class inheriting from DomesticAnimal
class Dog extends DomesticAnimal {
  // Constructor for Dog class
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed; // Additional property for Dog class
  }

  // Overriding the speak method
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Creating an instance of Dog
const myDog = new Dog("Rex", "German Shepherd");
myDog.speak(); // Output: "Rex barks."
