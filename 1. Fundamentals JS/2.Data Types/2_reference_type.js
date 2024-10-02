//       - Reference types: objects and arrays
/*
reference types:
    are more complex data types. 

    Unlike primitive types, 
    which hold simple values directly, 

    reference types 
        store pointers to objects in memory. 
    
    This means when you work with reference types, 
    you're not directly dealing with the value itself 
    but rather with a reference to it. 
    Two common reference types are "objects and arrays".
*/

// --------------------- Object ---------------------
/*
Definition: 
    Objects are "collections of key-value pairs". 

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

// --------------------- Arrays ---------------------
/*
Definition: 
    Arrays are "ordered collections of items" (like a list).
    Each item in the array can be of any type, 
    and arrays are great for storing multiple related items together.

How they work: 
    Each item in an array has an index (starting from 0), 
    which allows you to access or modify the value at that position.
*/
let colors = ["red", "blue", "green"];
// Accessing values: You can access items in an array using their index
console.log(colors[0]); // "red"
console.log(colors[2]); // "green"

/*
Why They're Called "Reference Types"?

When you assign an object or an array to a variable, 
you’re actually assigning a reference to that object 
or array, not the actual data. 

This means if you copy an object or array 
into another variable, 
both variables will point to the same data.
*/
let a = [1, 2, 3];
let b = a; // b now refers to the same array as a
b.push(4); // Adding a value to array b
console.log(a); // [1, 2, 3, 4] - Both a and b are affected!

//---------------------------------------- other reference types ----------------------------------------
/*
1. Functions: Blocks of reusable code.
2. Dates: Work with time and dates.
3. RegExp: Pattern matching in strings.
4. Maps and WeakMaps: Key-value collections (with any type of key).
5. Sets and WeakSets: Collections of unique values (with garbage collection in WeakSets).
6. Buffers (Node.js): Binary data handling.
7. Functions as Objects.
*/
// --------------------- 1. Functions: Blocks of reusable code. ---------------------
function greet() {
  return "Hello!";
}
let sayHello = greet;
console.log(sayHello()); // "Hello!"

// --------------------- 2. Dates: Work with time and dates.---------------------
const date = new Date();
console.log(date);

// --------------------- 3. RegExp ---------------------
let pattern = /hello/;
let text = "hello world";
console.log(pattern.test(text)); // true

// --------------------- Maps ---------------------
let map = new Map();
map.set("name", "John");
console.log(map.get("name")); // "John"

// --------------------- Sets ---------------------
let set = new Set([1, 2, 3, 4, 4]);
console.log(set); // Set {1, 2, 3, 4} - only unique values

// --------------------- Functions as object ---------------------
function foo() {}
foo.description = "This is a function";
console.log(foo.description); // "This is a function"

// --------------------- Buffers ---------------------
/*
A Buffer object in Node.js is used to handle 
binary data (data streams like files or network operations).
*/
let buf = Buffer.from("Hello");
console.log(buf); // <Buffer 48 65 6c 6c 6f>
