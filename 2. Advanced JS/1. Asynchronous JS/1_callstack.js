// callstack

/**
 The call stack in JavaScript is a mechanism used to 
 manage the execution of functions. 

 It operates as a LIFO (Last In, First Out) data structure, 
 where the last function added to the stack 
 is the first one to be executed, and once executed, 
 
 it is removed from the stack.
 */
/**
 * How the Call Stack Works:
    
    * Function Invocation: 
            When a function is invoked (called), 
            the JavaScript engine adds it to the top of the call stack.

    * Execution: 
            The function on the top of the call stack is executed.

    * Return or Completion: 
        Once the function completes, 
        it is removed from the call stack, and the engine 
        proceeds with the next function below it.

    * Stack Overflow: 
        If too many functions are added to the call stack 
        without being removed (e.g., through recursion or infinite loops), 
        a stack overflow occurs, causing the program to crash.
 */
// Flow example
function firstFunction() {
  console.log("First function start");
  secondFunction();
  console.log("First function end");
}

function secondFunction() {
  console.log("Second function start");
  thirdFunction();
  console.log("Second function end");
}

function thirdFunction() {
  console.log("Third function start");
  console.log("Third function end");
}

firstFunction();
