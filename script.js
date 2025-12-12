const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}


// create a new book
let newBook = new Book(title, author)

function addBookToLibrary() {
  Book.prototype.title = function(){
    myLibrary.push(this.title);
  }
  Book.prototype.author = function(){
    myLibrary.push(this.author);
  }
  Book.prototype.
}
