/*
There are three main ways to declare variables:
var, let, and const. 

Each of these has different behaviors and uses. 

Let’s break down the differences and understand their scopes, 
reassignability, and best practices.
*/

// var
/*
var
1. Scope: 
    var is function-scoped, 
    meaning it is accessible throughout the function 
    in which it is defined. 
    If defined outside of a function, it is globally scoped.

2. Hoisting: 
    Variables declared with "var are hoisted" 
    to the top of their scope. 
    This means they can be accessed before they are declared, 
    but their value will be undefined.

3. Reassignable: 
    You can reassign and redeclare 
    a var variable within the same scope.

4. Best Use: 
    -> "var is generally avoided in modern JavaScript"
    because it can lead to confusing and error-prone code, 
    especially in larger applications.
*/
console.log("---------------- var --------------");
console.log(a); // undefined
var a = 5; // Declaration and initialization
console.log(a); // 5
if (true) {
  var a = 10; // Re-declaration allowed
  console.log(a); // 10
}
console.log(a); // 10 (because `var` is function-scoped or global-scoped)

// let
/*
1. Scope: 
    let is block-scoped, 
    meaning it is only accessible within the block {} 
    where it is defined (e.g., inside loops, if statements, etc.).

2. Hoisting: 
    "let variables are hoisted" 
    but are not initialized. 

    This means accessing them before their declaration results 
    in a ReferenceError.

3. Reassignable: 
    You can reassign a let variable 
    but 
    cannot redeclare it within the same scope.

4. Best Use: 
    Use let when you expect the variable's value 
    to change and need block-level scoping.
*/

console.log("---------------- let --------------");
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 5;
console.log(b); // 5
if (true) {
  let b = 10; // Creates a new block-scoped `b`
  console.log(b); // 10
}
console.log(b); // 5 (original `b` outside the block)
