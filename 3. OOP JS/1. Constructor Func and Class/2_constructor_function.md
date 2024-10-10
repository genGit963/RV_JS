# Constructor Functions

Constructor functions are a way to create and define objects using a function that acts as a blueprint for the object. Constructor functions help create multiple instances of an object with the same properties and methods.

## Defining a Constructor Function

A constructor function is defined like a regular function but follows a few conventions:

1. The name of the constructor function usually starts with a capital letter (e.g., `Person`, `Car`).
2. The `this` keyword is used to set properties on the object being created.
3. Constructor functions are called using the `new` keyword.

Here's an example of a constructor function:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}
```

In this example:

- `Person` is a constructor function.
- It has two properties, `name` and `age`, which are set using `this`.
- It also has a method `greet`, which is used to display a message.

## Instantiating Objects Using the Constructor Function

To create an object (an instance of the constructor), you use the **`new`** keyword. This creates a new object with the specified properties and methods.

```javascript
const person1 = new Person("Mahesh", 28);
const person2 = new Person("Motki", 26);

person1.greet(); // Output: Hello, my name is Mahesh and I am 28 years old.
person2.greet(); // Output: Hello, my name is Motki and I am 26 years old.
```

## How It Works

When you use the `new` keyword with the constructor function:

1. A new empty object is created.
2. The `this` keyword inside the constructor function refers to this new object.
3. The properties and methods are added to the new object.
4. The new object is returned automatically.

## Adding Methods to Constructor Functions Using Prototypes

To avoid duplicating methods for every object instance, it's a good practice to add methods to the constructor's prototype. This way, all instances share the same method, which saves memory.

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding a method to the prototype
Car.prototype.displayInfo = function () {
  console.log(`Car: ${this.make} ${this.model}`);
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

car1.displayInfo(); // Output: Car: Toyota Corolla
car2.displayInfo(); // Output: Car: Honda Civic
```

In this example:

- The `displayInfo` method is added to the `Car` constructor's prototype.
- Both `car1` and `car2` share the same method, which is more efficient than defining it inside the constructor.

### Summary

- **Constructor functions** provide a way to create multiple objects with the same properties and methods.
- Use the `new` keyword to instantiate objects.
- Adding methods to the prototype ensures all instances share the same methods, making the code more efficient.

This is a fundamental way of creating objects before the introduction of classes in ES6 (ECMAScript 2015). Let me know if you need more details or have any questions!
