const myLibrary = [];

// the constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}


// create a new book

let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let read = document.querySelector('#read');

let newBook = new Book(title, author, pages, read);

//
function addBookToLibrary() {
  Book.prototype.title = function(){
    myLibrary.push(this.title);
  }
  Book.prototype.author = function(){
    myLibrary.push(this.author);
  }
  Book.prototype.
}
