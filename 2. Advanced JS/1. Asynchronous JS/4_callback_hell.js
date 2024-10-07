/**
 * Callback Hell: 
    refers to a situation where multiple nested callbacks 
    make the code 
    1. difficult to read, 
    2. difficult to understand
    3. difficult to maintain

    It occurs when asynchronous operations depend on each other, 
    and callbacks are used in a nested manner to handle these operations. 
    This structure can result in deeply nested code, also known as the "Pyramid of Doom."
*/
doTask1(function (result1) {
  doTask2(result1, function (result2) {
    doTask3(result2, function (result3) {
      doTask4(result3, function (result4) {
        console.log("Final result:", result4);
      });
    });
  });
});
