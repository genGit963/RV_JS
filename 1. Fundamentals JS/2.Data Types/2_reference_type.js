//       - Reference types: objects and arrays
/*
reference types:
    are more complex data types. 

    Unlike primitive types, 
    which hold simple values directly, 
    reference types store pointers to objects in memory. 
    
    This means when you work with reference types, 
    you're not directly dealing with the value itself 
    but rather with a reference to it. 
    Two common reference types are objects and arrays.
*/

// Object
/*
Definition: 
    Objects are collections of key-value pairs. 
    Each key (or property) in an object points to 
    a value, which could be anything 
    (a string, number, function, or even another object).

How they work: 
    You use objects to group related data and functionality 
    together in a structured way.
*/
let person = {
  name: "John",
  age: 30,
  isStudent: false,
};
/*
Accessing values: 
    You can access the values inside an object using 
    the dot notation (.) or square bracket notation ([]):
*/
console.log(person.name); // "John"
console.log(person["age"]); // 30
person.name = "heppy";
console.log(person.name); // "John"
