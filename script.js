const myLibrary = [];

// the book constructor
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


// add book object in the myLibrary array
function addBookToLibrary() {
    const newId = crypto.randomUUID();
    let newTitleBook = titleInput.value;
    let newAuthorBook = authorInput.value;
    let newPagesBook = pagesInput.value;
    let newRead = readInput.checked? 'Yes' : 'No';
   let newBook = new Book(newId, newTitleBook, newAuthorBook, newPagesBook, newRead);
   myLibrary.push(newBook);
}

// display the object as a line in the table
let table = document.querySelector('tbody');

function displayBook(){
    table.innerHTML = '';

    for(let i = 0; i<myLibrary.length; i++){
    let newRow = document.createElement('tr');
    let newId = document.createElement('td');
    let newTitle = document.createElement('td');
    let newAuthor = document.createElement('td');
    let newPages = document.createElement('td');
    let newRead = document.createElement('td');

    newId.textContent = myLibrary[i].id;
    newTitle.textContent = myLibrary[i].title;
    newAuthor.textContent = myLibrary[i].author;
    newPages.textContent = myLibrary[i].pages;
    newRead.textContent = myLibrary[i].read;

    newRow.appendChild(newId);
    newRow.appendChild(newTitle);
    newRow.appendChild(newAuthor);
    newRow.appendChild(newPages);
    newRow.appendChild(newRead);

    table.appendChild(newRow);
    }
} 

function addNewBook(event){
    event.preventDefault();
    addBookToLibrary();
    displayBook();
}

button.addEventListener('click', addNewBook)