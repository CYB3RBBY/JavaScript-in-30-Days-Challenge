// Function Declaration 

// 1.

function numberCheck(number){
    if(number%2 === 0){
        console.log(`${number} is an even number`);
    }
    else{
        console.log(`${number} is an odd number`);
    }
    return number;
}

numberCheck(10);

// 2. 

function squareOfNumber(a){
    return a * a;
}

console.log("Square of a is :",squareOfNumber(5));

// Function Expression 

// 3. 

function maxOfNumber (x,y){
    const max = ( x > y ) ? x : y;
    return max;
}

console.log("Maximum of 5 and 10 is :",maxOfNumber(5,10));

// another way to do this by if else statements 

function maxOfNumber2 (x,y){
    if(x > y){
        return x;
    }
    else{
        return y;
    }
}

console.log("Maximum of 10 and 14 is :",maxOfNumber2(10,14));

// 4.

function concatenateTwoStrings(str1 , str2){
    return str1 + " " + str2;
}

console.log("Concatenated string is :",concatenateTwoStrings("Breaking","Bad"));

// Arrow Functions 

// 5. 

const add = (n,m) => n+m;

console.log("Addition of 5 and 10 is :",add(5,10));

// 6. 

const stringIncludes = (str, char) => str.includes(char);

console.log("String 'I love Shoya' includes 'o'?",stringIncludes("I love Shoya", "o"));

// Function Parameters and Default Values

// 7.

function multiply(r,q=1){
    return r*q;
}

console.log("Multiplication of 5 and 10 is :",multiply(5,10));

// 8.

function greet(name, age = 19){
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Aishwarya"));

// High Order Functions

// 9. 

function repeat (fn, times){
    return fn.repeat(times);
}

console.log("Repeat 'Hello' 5 times is :",repeat("Hello ", 5));

// 10. 

function compose(fn1, fn2) {
    return function(value) {
        return fn2(fn1(value));
    }
}

const add5 = x => x + 5;
const multiplyBy2 = x => x * 2;

const add5ThenMultiplyBy2 = compose(add5, multiplyBy2);
console.log(add5ThenMultiplyBy2(3));
