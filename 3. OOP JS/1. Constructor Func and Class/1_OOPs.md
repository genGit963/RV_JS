# Object-Oriented Programming (OOP)

In JavaScript, OOP is a programming paradigm that uses `objects` and `classes` to structure code in a way that is modular, reusable, and easy to understand.

## 1. **Class**

A class is a blueprint for creating objects. It defines `properties` (attributes) and `methods` (functions) that the objects created from the class can use.

### Example

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Mahesh", 28);
person1.greet(); // Output: Hello, my name is Mahesh and I am 28 years old.
```

## 2. **Objects**

An object is an instance of a class. It contains properties and methods defined by the class.

In the above example, `person1` is an object created from the `Person` class.

## 3. **Encapsulation**

Encapsulation is the concept of bundling data (properties) and methods that operate on that data into a single unit (a class). It also involves restricting access to some components to keep data safe from unintended modifications.

In JavaScript, we can achieve encapsulation using private fields and methods:

```javascript
class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // Output: 1000
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
```

The `#balance` field is private and cannot be accessed directly from outside the class.

### 4. **Inheritance**

Inheritance allows one class to inherit the properties and methods of another class. This helps in code reusability and creating a relationship between classes.

Here's an example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructuor(name, sound) {
    super(name);
    this.sound = sound;
  }
  speak() {
    console.log(`${this.name} can ${this.sound}.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Output: Rex barks.
```

The `Dog` class inherits the properties and methods of the `Animal` class and can also have its own specific methods.

## 5. **Polymorphism**

Polymorphism means "many forms." In the context of OOP, it allows methods to do different things based on the object they are called on.

The above example demonstrates polymorphism where the `speak` method behaves differently for the `Animal` class and the `Dog` subclass.

### 6. **Abstraction**

Abstraction is the concept of hiding complex implementation details and showing only the necessary features of an object. It simplifies the interface for the user and makes the code cleaner and easier to understand.

JavaScript doesn't have a direct way to enforce abstraction, but we can achieve it through classes and limiting access to methods using private fields.

### Example Combining All Concepts

Here's a more comprehensive example that combines all these concepts:

```javascript
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  displayInfo() {
    console.log(`Vehicle: ${this.make} ${this.model}`);
  }
}

class Car extends Vehicle {
  #engineStatus = false; // Private property

  startEngine() {
    this.#engineStatus = true;
    console.log(`${this.make} ${this.model} engine started.`);
  }

  stopEngine() {
    this.#engineStatus = false;
    console.log(`${this.make} ${this.model} engine stopped.`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.displayInfo(); // Output: Vehicle: Toyota Corolla
myCar.startEngine(); // Output: Toyota Corolla engine started.
```

### Key Benefits of OOP

- **Modularity**: Breaks down code into smaller, manageable parts.
- **Reusability**: Classes can be reused across different parts of your application.
- **Scalability**: Easier to extend your code with new features without modifying existing code.
- **Maintainability**: Easier to debug and maintain because of the organized structure.

These core concepts of OOP help in writing more organized, readable, and scalable code in JavaScript. Let me know if you would like more detailed examples or if there's a specific concept you'd like to dive deeper into!
