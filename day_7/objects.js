const book = {
    title: "Book Title",
    author: "Author Name",
    year: 2020
};

console.log(book);
console.log(book.title, book.author,);

book.fun = function() {
    return `book title: ${this.title}, author: ${this.author}`
};

console.log(book.fun());

book.update_year = function(new_year) {
    this.year = new_year;
};

book.update_year(2021);

console.log(book);

for (const key in book) {
    
        
    console.log(`${key}: ${book[key]}`);
};
console.log(Object.keys(book));
console.log(Object.values(book));
