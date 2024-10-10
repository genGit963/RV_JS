# Polymorphism

Polymorphsim in object-oriented programming (OOP) is a concept that allows a `function`, `method`, or `object` <u>to take on multiple forms</u>.

In JavaScript, there are two main types of polymorphism:

1. Compile-time / Static Polymorphism
2. Run-time / Dynamic Polymorphism

## 1. **Compile-time Polymorphism (Static Polymorphism)**

- **Definition**: <br>This type of polymorphism is resolved during compile time. It typically involves method `overloading` (<u>multiple functions with the same name but different parameters</u>) and `operator overloading`.
- **Example in JavaScript**: <br><i>JavaScript does not support method overloading in the traditional sense, like other languages (e.g., C++ or Java)</i>. However, we can simulate this behavior using default parameters or the rest parameter syntax.

#### Example of Static Polymorphism (Simulated in JavaScript):

```javascript
function greet(name, age) {
  if (age) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}.`);
  }
}

greet("Mahesh"); // Output: Hello, Mahesh.
greet("Mahesh", 28); // Output: Hello, Mahesh. You are 28 years old.
```

This example shows how the same function behaves differently based on the number of parameters passed to it.

## 2. **Runtime Polymorphism (Dynamic Polymorphism)**

- **Definition**: <br>Runtime polymorphism is resolved during runtime and is usually achieved through method `overriding`, where a subclass provides a specific implementation of a method already defined in its superclass.
- **Example in JavaScript**: <br>JavaScript supports method overriding when a child class provides a different implementation for a method inherited from a parent class.

#### Example of Runtime Polymorphism:

```javascript
class Animal {
  speak() {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.speak(); // Output: The animal makes a sound.
dog.speak(); // Output: The dog barks.
cat.speak(); // Output: The cat meows.
```

In this example:

- The `speak` method is overridden in the `Dog` and `Cat` classes.
- Even though the method name is the same, it produces different outputs depending on the object that calls it.

This demonstrates runtime polymorphism, where the actual method called is determined by the type of object at runtime.

### Summary of Polymorphism Types:

- **Compile-time Polymorphism (Static)**: Resolved during compile time. Not directly supported in JavaScript but can be simulated using techniques like default or rest parameters.
- **Runtime Polymorphism (Dynamic)**: Resolved during runtime using method overriding. Widely used in JavaScript and directly supported through inheritance.

These concepts help make the code more flexible, extensible, and easier to manage. Let me know if you have any questions or if you need more examples!
