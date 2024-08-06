// loops

// For loop

// 1.

for(i = 1; i <= 10; i++){
    console.log(i);
}

// 2. 

let a = 5;
for(i = 1; i <= 10; i++){
     console.log(`${a} * ${i} = ${i*a}`);
}

// While loop

// 3. 

let b = 1;
let sum = 0;
while(b <= 10) {
    sum += b;
    b++;
}     
console.log(`sum = ${sum}`);

// 4.

let c = 11;
while(c > 1){
    c--;
    console.log(c);
}

// Do While loop

// 5. 

let d = 0;

do{
  console.log(d);
  d++;
}while(d <= 5);

// 6.

let number = 5;

let result = 1;
let x = number;

do {
    result *= x;
    x--;
} while (x > 0);

console.log(`The factorial of ${number} is ${result}`);

// Nested Loops

// 7.

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// Loop Control Statements

// 8.

for(let y = 1; y<=10; y++){
    if(y === 5){
        continue; 
    }
    console.log(y);
}

// 9.

for(let z = 1; z<=10; z++){
    if(z === 7){
        break; 
    }
    console.log(z);
}