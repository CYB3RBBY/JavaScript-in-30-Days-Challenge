// If Else statements

// 1. 

let a = 10;

if (a>0){
    console.log("The number is positive");
}
else if(a<0){
    console.log("The number is negative");
}
else{
    console.log("The number is zero");
}

// 2.

let age = 19;

if (age >= 18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

// Nested If - Else Statement 

// 3.

let num1 = 4;
let num2 = 10;
let num3 = 3;

if (num1 > num2){
    if (num1 > num3){
        console.log(num1 + " is the largest number");
    }
    else{
        console.log(num3 + " is the largest number");
    }
}
else if (num2 > num1){
    if (num2 > num3){
        console.log(num2 + " is the largest number");
    }
    else{
        console.log(num3 + " is the largest number");
    }
}


// Switch Statement

// 4. 

let day = 2;

switch (day){
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
}

// 5. 

let score = 300;
let grade;

switch (true) {
    case (score <= 60):
        grade = "F";
        break;
    case (score <= 120):
        grade = "D";
        break;
    case (score <= 180):
        grade = "C";
        break;
    case (score <= 240):
        grade = "B";
        break;
    case (score > 240):
        grade = "A";
        break;
    default:
        grade = "Invalid Score";
}

console.log(`Your grade is: ${grade}`);

// Conditional (Ternery) Operator

// 6. 

let number = 10;

let result = (number % 2 === 0) ? "even" : "odd" ;

console.log(`${number} is ${result}`);

// Combining Conditions

// 7. 

let year = 2005;

let leapYear = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);

console.log(`${year} is a leap year: ${leapYear}`);

// Feature Request 

// 1. 

