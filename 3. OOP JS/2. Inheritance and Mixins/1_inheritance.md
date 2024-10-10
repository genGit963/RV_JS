# Inheritance

Extending classes with `inheritance` in JavaScript allows you to create new classes that are based on existing ones. This enables you to reuse code and create a hierarchy of classes where derived classes (child classes) inherit properties and methods from their base classes (parent classes).

### What is Inheritance?

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a class to inherit the properties and methods of another class. In JavaScript, you can use the `extends` keyword to create a subclass (child class) that inherits from a parent class.

### Syntax for Extending Classes

Here's the basic syntax for creating a class that inherits from another class using the `extends` keyword:

```javascript
class ParentClass {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }

  parentMethod() {
    console.log("This is a method in the Parent class.");
  }
}

class ChildClass extends ParentClass {
  constructor(param1, param2, param3) {
    super(param1, param2); // Call the parent class constructor
    this.param3 = param3;
  }

  childMethod() {
    console.log("This is a method in the Child class.");
  }
}
```

### Example: Extending a Class in JavaScript

Let's create an example with `Animal` as the parent class and `Dog` as the child class that inherits from `Animal`:

```javascript
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class that inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Creating instances of the classes
const animal = new Animal("Generic Animal");
animal.speak(); // Output: Generic Animal makes a sound.

const dog = new Dog("Rex", "Golden Retriever");
dog.speak(); // Output: Rex barks.
```

In this example:

- The `Dog` class extends the `Animal` class, which means `Dog` inherits the properties and methods of `Animal`.
- We used the `super` keyword to call the parent class constructor and initialize the `name` property.
- The `speak` method is overridden in the `Dog` class to provide a more specific implementation.

### The `super` Keyword

- The `super` keyword is used to call functions on an object's parent class.
- It is commonly used to call the parent class's constructor (`super()`) or to access its methods (`super.methodName()`).

#### Example: Using `super` to Access Parent Methods

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
  constructor(name, color) {
    super(name); // Call the parent class constructor
    this.color = color;
  }

  speak() {
    super.speak(); // Call the parent class method
    console.log(`${this.name} meows.`);
  }
}

const cat = new Cat("Whiskers", "Gray");
cat.speak();
// Output:
// Whiskers makes a sound.
// Whiskers meows.
```

In this example:

- `super.speak()` calls the `speak` method from the parent class `Animal`.
- The `Cat` class provides its own implementation of `speak`, which is executed after the parent class method.

### Inheritance and Method Overriding

When a method in the child class has the same name as a method in the parent class, the method in the child class will override the one in the parent class. This is called **method overriding**.

#### Example of Method Overriding:

```javascript
class Vehicle {
  startEngine() {
    console.log("The engine starts with a roar.");
  }
}

class Car extends Vehicle {
  startEngine() {
    console.log("The car engine starts with a quiet hum.");
  }
}

const myCar = new Car();
myCar.startEngine(); // Output: The car engine starts with a quiet hum.
```

- In the `Car` class, the `startEngine` method overrides the method defined in the `Vehicle` class.

### Advantages of Using Inheritance

1. **Code Reusability**: You can reuse existing code from the parent class in the child class, making the codebase more maintainable.
2. **Method Overriding**: You can redefine or extend the functionality of methods from the parent class in the child class.
3. **Clean Code**: It promotes cleaner code by organizing similar classes in a structured hierarchy.

### Summary

- Use the `extends` keyword to create a child class that inherits from a parent class.
- Use the `super` keyword to call the parent class's constructor and methods.
- Child classes can override parent class methods to provide specific behavior.
- Inheritance helps in creating a clean and organized code structure.

Let me know if you have more questions or if you'd like more examples on extending classes in JavaScript!
