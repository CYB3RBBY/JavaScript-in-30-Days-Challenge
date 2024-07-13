// Day -1  Saturday, 13th July 2024

// Variable Declaration

var variable1 = 10;
var variable2 = "Aishwarya";

console.log(variable1);
console.log(variable2);

// Constant Declaration

const aishwaryaIsClever = true;

console.log(aishwaryaIsClever);

// Datatypes

let myString = "Aishwarya";
let myNumber = 10;
let myBoolean = true;
let myNull = null;
let myUndefined;
let myObject = { name: "Aishwarya", age: 19 };
let myArray = [1, 2, 3, 4, 5];
let myFunction = function() { return "I am a function"; };
let mySymbol = Symbol("mySymbol");
let myBigInt = BigInt(9007199254740991);

console.log(
  typeof myString,
  typeof myNumber,
  typeof myBoolean,
  typeof myNull,
  typeof myUndefined,
  typeof myObject,
  typeof myArray,
  typeof myFunction,
  typeof mySymbol,
  typeof myBigInt
);

// Reassigning Variables

let test = 1;
{
  let test = 2;
  console.log(test); // 2
}

console.log(test); // 1

var test1 = 2;
var test1 = 3;
console.log(test1); // 3

// Understanding const

const test2 = 3;
// const test2 = 4;
console.log(test2); // Uncaught TypeError: Assignment to constant variable.

// Feature Request

// Logging the value and type of each variable to the console

console.log(`Value: ${myString}, Type: ${typeof myString}`);
console.log(`Value: ${myNumber}, Type: ${typeof myNumber}`);
console.log(`Value: ${myBoolean}, Type: ${typeof myBoolean}`);
console.log(`Value: ${myNull}, Type: ${typeof myNull}`); // Note: typeof null returns "object" due to a quirk in JavaScript
console.log(`Value: ${myUndefined}, Type: ${typeof myUndefined}`);
console.log(`Value: ${myObject}, Type: ${typeof myObject}`);
console.log(`Value: ${myArray}, Type: ${typeof myArray}`); // Note: typeof array returns "object"
console.log(`Value: ${myFunction()}, Type: ${typeof myFunction}`);
console.log(`Value: ${mySymbol.toString()}, Type: ${typeof mySymbol}`);
console.log(`Value: ${myBigInt}, Type: ${typeof myBigInt}`);

// Reassignment Demo 

// Using let
let myLetVariable = 10;
console.log(`Initial myLetVariable: ${myLetVariable}`);

// Reassigning let variable
myLetVariable = 4;
console.log(`Reassigned myLetVariable: ${myLetVariable}`); 

// Using const
const myConstVariable = 10;
console.log(`Initial myConstVariable: ${myConstVariable}`);

// Trying to reassign const variable
try {
    myConstVariable = "4";
} catch (error) {
    console.error(`Error when reassigning myConstVariable: ${error.message}`); // Error when reassigning myConstVariable 
}
