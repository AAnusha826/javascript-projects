// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       this.title = title;
       this.author = author;
       this.copyright = copyright;
       this.isbn = isbn;
       this.pages = pages;
       this.timesCheckedOut = timesCheckedOut;
       this.discarded = discarded;
    }
 
    checkout(uses=1) {
       this.timesCheckedOut += uses;
    }
 }
 
 class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(currentYear){
       if (currentYear-this.copyright > 5) {
          this.discarded = 'Yes';
       }
    }
 }
 
 class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    dispose(){
       if (this.timesCheckedOut > 100) {
          this.discarded = 'Yes';
       }
    }
 }
 // Declare an object of the Novel class for "Pride and Prejudice"
let goodRead = new Novel(
    'Pride and Prejudice',
    'Jane Austen',
    1813,
    '1111111111111',
    432,
    32,
    'No'
);

// Define your Manual and Novel classes here:
let makingTheShip = new Manual(
    'Top Secret Shuttle Building Manual',
    'Redacted',
    2024,
    '0000000000000',
    1147,
    1,
    'No'
);


// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here:
// Update the properties using the methods
makingTheShip.dispose(2024); // Assuming the current year is 2024
goodRead.checkout(5); // Checking out "Pride and Prejudice" 5 more times
goodRead.dispose(); // Checking if "Pride and Prejudice" needs to be discarded

// Log the results to verify
console.log(goodRead);
console.log(makingTheShip);