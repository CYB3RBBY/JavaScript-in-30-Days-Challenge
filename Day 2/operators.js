// Day 2 Sunday 14th July 2024

// Operators 

// Arithmetic Operators

let x = 5;
let y = 7;
console.log("5 + 7 = ", x + y);
console.log("5 - 7 = ", x - y);
console.log("5 * 7 = ", x * y);
console.log("5 / 7 = ", x / y);
console.log("5 % 7 = ", x % y);

// Assignment Operators

console.log(x += 10); // x = 15
console.log(x -= 10); // x = 5 

// Comparison Operators

console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true
console.log(x == y); // false
console.log(x === y); // false

// Logical Operators 

let a = true;
let b = false;

console.log("a && b = ", a && b); // false
console.log("a || b = ", a || b); // true
console.log("!a = ", !a); // false

// Ternary Operator
// shorthand for if else statements

let s = 10;
let result = s >= 5? "Greater than 5" : "Less than or equal to 5";
console.log(result);

// Extra

// Increment and Decrement Operators

console.log(x++);
console.log(++x);
console.log(x--);
console.log(--x);

// Arithmetic Operations Script 

let num1 = 10;
let num2 = 5;

let addition = num1 + num2; // Addition
let subtraction = num1 - num2; // Subtraction
let multiplication = num1 * num2; // Multiplication
let division = num1 / num2; // Division
let remainder = num1 % num2; // Remainder

console.log("Addition: " + addition); // 15
console.log("Subtraction: " + subtraction); // 5
console.log("Multiplication: " + multiplication); // 50
console.log("Division: " + division); // 2
console.log("Remainder: " + remainder); // 0

// Comparison and Logical Operators Script 

let isEqual = num1 == num2;
let isStrictEqual = num1 === num2;
let isGreater = num1 > num2;
let isLess = num1 < num2;
let isGreaterOrEqual = num1 >= num2;
let isLessOrEqual = num1 <= num2;

// Logging comparison results
console.log("Comparing numbers:", num1, "and", num2);
console.log("Equal (==):", isEqual); // Loose equality
console.log("Strictly Equal (===):", isStrictEqual); // Strict equality
console.log("Greater (>):", isGreater);
console.log("Less (<):", isLess);
console.log("Greater or Equal (>=):", isGreaterOrEqual);
console.log("Less or Equal (<=):", isLessOrEqual);

// Combining conditions using logical operators
let combinedAnd = isGreater && isLess; // Both must be true
let combinedOr = isGreater || isLess; // At least one must be true
let negation = !isEqual; // Negation of equality

// Logging combined results
console.log("Combined (&&):", combinedAnd); // Should be false
console.log("Combined (||):", combinedOr); // Should be true
console.log("Negation of Equal (!=):", negation); // Should be true if not equal

// Ternary Operator Script

let number = -5; 

let result1 = number >= 0 ? "Positive" : "Negative";

console.log("The number is:", result1);
