# Class

Its is a blueprint for creating objects. They were introduced in ES6 (ECMAScript 2015) to provide a clearer and more concise way to create objects and handle inheritance compared to the traditional approach using constructor functions and prototypes.

## What are JavaScript Classes?

JavaScript classes are essentially syntactic sugar over JavaScript's existing prototype-based inheritance. They make it easier to define and work with objects and inheritance.

## Basic Syntax for Classes

You can create a class using the `class` keyword, followed by the class name. Here is the basic structure of a class:

```javascript
class Person {
  // Constructor method to initialize properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method defined inside the class
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating an instance of the class
const person1 = new Person("Mahesh", 28);

// Calling the method on the instance
person1.greet(); // Output: Hello, my name is Mahesh and I am 28 years old.
```

## Components of a Class

1. **Constructor Method**:

   - The `constructor` is a special method used to initialize the object properties.
   - It gets called automatically when a new instance of the class is created.

2. **Methods**:
   - You can define methods directly within the class.
   - These methods can be called on instances of the class.

## Class Inheritance

Inheritance allows a class to inherit properties and methods from another class, promoting code reuse. You can create a new class that extends an existing class using the `extends` keyword.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// `Dog` class inherits from `Animal` class
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Rex");
myDog.speak(); // Output: Rex barks.
```

In this example:

- The `Dog` class extends the `Animal` class, meaning it inherits the properties and methods of the `Animal` class.
- The `speak` method is overridden in the `Dog` class.

## Super Keyword

The `super` keyword is used to call the constructor of the parent class and to access its methods. It is useful when extending a class.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    super.speak(); // Call the parent class method
    console.log(`${this.name} meows.`);
  }
}

const myCat = new Cat("Whiskers", "Siamese");
myCat.speak();
// Output:
// Whiskers makes a sound.
// Whiskers meows.
```

In this example:

- `super(name)` calls the constructor of the parent class `Animal`.
- `super.speak()` calls the `speak` method from the `Animal` class.

## Static Methods

Static methods are methods that belong to the class itself rather than to any object instance. You can call static methods without creating an instance of the class.

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); // Output: 8
```

## Getters and Setters

JavaScript classes support getter and setter methods to get and set the value of an object’s properties.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter for area
  get area() {
    return this.width * this.height;
  }

  // Setter for area (sets width assuming a square)
  set area(value) {
    this.width = Math.sqrt(value);
    this.height = Math.sqrt(value);
  }
}

const square = new Rectangle(4, 4);
console.log(square.area); // Output: 16

square.area = 25;
console.log(square.width); // Output: 5
console.log(square.height); // Output: 5
```

## Summary

- **Classes** are templates for creating objects.
- **Constructor** initializes the object.
- **Inheritance** allows a class to inherit properties and methods from another class.
- The **super** keyword is used to call methods from the parent class.
- **Static methods** belong to the class itself, not to instances.
- **Getters and Setters** are used to access and modify properties in a controlled way.

JavaScript classes provide a clean and powerful way to structure your code using OOP principles. Let me know if you need further explanations or examples!
