// Arrays

// Array Creation and Access

// 1.

let array = [1,2,3,4,5];
console.log(array);

// 2.

console.log(array[0], array[4]);

// Array Methods (Basic)

// 3.

array.push(6);
console.log(array);

// 4.

array.pop();
console.log(array);

// 5.

array.shift();
console.log(array);

// 6.

array.unshift(1);
console.log(array);

// Array Methods (Intermediate)

// 7.

const doublednumbers = array.map(array => array*2);
console.log(doublednumbers);

// 8. 

const evennumbers = array.filter(array => array % 2 === 0);
console.log(evennumbers);

// 9. 

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  

// Array Iteration 

// 10.

for(i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 11. 

array.forEach(array => console.log(array));

// Multi-dimensional Arrays 

// 12.

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

// 13.

const specificElement = matrix[2][2];
console.log(specificElement); 
