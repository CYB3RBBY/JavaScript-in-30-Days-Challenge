// Objects 

// Object Creation and Access 

// 1.

let book = {
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    year: 2020,
}

console.log(book);

// 2. 

console.log("Book title:",book.title);
console.log("Book author:",book.author);

// Object Methods 

// 3. 

book.getSummary = function() {
    return `${this.title} by ${this.author}`;
}
console.log(book.getSummary());

// 4.

book.updateYear = function(newYear) {
    this.year = newYear;
}

book.updateYear(2005);

console.log(book);

// Nested Objects

// 5.

let library = {
    name: "Manga Library",
    books:[
    {title:"Jujutsu Kaisen", author:"Gege Akutami", year:2020 },
    {title:"Chainsaw Man", author:"Tatsuki Fujimoto" ,year:2022},
    {title:"Demon Slayer", author:"Koyoharu Gotouge" , year:2016 }
    ]
};

console.log(library);

// 6.

console.log("Library Name:", library.name);
library.books.forEach(book => {
    console.log("Book Title:", book.title);
});

// The 'this' Keyword 

// 7. 

book.getDetails = function() {
    return `${this.title} was published in ${this.year}`;
}

console.log(book.getDetails());

// Object Iteration 

// 8. 

for (let key in book){
    console.log(`${key}: ${book[key]}`);
}

// 9. 

console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));




