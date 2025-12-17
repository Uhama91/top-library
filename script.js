const myLibrary = [];

// the constructor
function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let readInput = document.querySelector('#read');
let button = document.querySelector('button');

function addBookToLibrary() {
    const newId = crypto.randomUUID();
    let newTitleBook = titleInput.value;
    let newAuthorBook = authorInput.value;
    let newPagesBook = pagesInput.value;
    let newRead = readInput.value;
   let newBook = new Book(newId, newTitleBook, newAuthorBook, newPagesBook, newRead);
   myLibrary.push(newBook);
}