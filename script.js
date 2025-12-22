const myLibrary = [];

// the book constructor
function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

Book.prototype.toggleRead = function(){
    this.read = this.read === 'Yes'? 'No' : 'Yes';
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

        let newDeleteButton = document.createElement('button')
        let newId = document.createElement('td');
        let newTitle = document.createElement('td');
        let newAuthor = document.createElement('td');
        let newPages = document.createElement('td');
        let newRead = document.createElement('td');

        newDeleteButton.textContent = 'Delete row';
        newId.textContent = myLibrary[i].id;
        newTitle.textContent = myLibrary[i].title;
        newAuthor.textContent = myLibrary[i].author;
        newPages.textContent = myLibrary[i].pages;

        newRow.setAttribute('data-book-id', myLibrary[i].id);
        newRow.appendChild(newDeleteButton);
        newRow.appendChild(newId);
        newRow.appendChild(newTitle);
        newRow.appendChild(newAuthor);
        newRow.appendChild(newPages);
        newRow.appendChild(newRead);

        table.appendChild(newRow);

        // Delete a row
        const deleteRow = () => {
            // 1. récupérer l'ID depuis le data-attribute
            const bookId = newRow.getAttribute('data-book-id');

            // 2. Chercher l'index de Ce livre (pas le dernier, mais celui qui match l'ID)
            const bookIndex = myLibrary.findIndex(book => book.id ===  bookId);

            // 3. Si trouvé (index >= 0), supprimer
            if(bookIndex > -1){
                myLibrary.splice(bookIndex, 1)
            }

            // 4. Réafficher  tout le tabeleau
            displayBook();
        }
        newDeleteButton.addEventListener('click', deleteRow)
        
        // create toogle button to change read status
        let newToggleButton = document.createElement('button');
        newToggleButton.textContent = myLibrary[i].read;
        newRead.appendChild(newToggleButton);
        
        //toggle to switch read's statu between yes and no with button 
        const switchReadStatus = () => {
            const bookId = newRow.getAttribute('data-book-id');

            const bookIndex = myLibrary.findIndex(book => book.id ===  bookId);

            if(bookIndex > -1){
                myLibrary[bookIndex].toggleRead();
            }

            displayBook(); 
        }

        newToggleButton.addEventListener('click',switchReadStatus)
    }
} 

function addNewBook(event){
    event.preventDefault();
    addBookToLibrary();
    displayBook();
}

button.addEventListener('click', addNewBook)