/*
== or !==(Loose Equality): 
This operator checks for equality after converting the 
operands to the same type (type coercion).
*/
console.log("5 == '5' : ", 5 == "5", "5 != '5' : ", 5 != "5"); // true, because '5' (string) is converted to 5 (number)

/*
=== or !== (Strict Equality): 
This operator checks for equality without
performing type conversion. 

The values must be of the same type as well as the same value.
*/
console.log("5 === '5' : ", 5 === "5", "5 !== '5' : ", 5 !== "5"); // false, because the types are different (number and string)
