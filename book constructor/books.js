let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = () => {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
        };
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    return book;
}

addBookToLibrary('Charlie and the Chocolate Factory', 'Roal Dahl', 452, true);
addBookToLibrary('1984', 'Orsen Wells', 655, true);
addBookToLibrary('50 Shades of Gray', 'Who Cares', 12, false)

// need to add function where book is displayed in DOM as a div
function displayBooks(item){
    let bookBox = document.createElement('div');
    bookBox.textContent = item.info();
    bookBox.class = 'book';
    let bookContainer = document.getElementsByClassName('bookContainer')[0];
    bookContainer.appendChild(bookBox);
}
// display all books initially
myLibrary.forEach(displayBooks)

let form = document.querySelector("form");
let inputs = form.elements;

// submit button
form.addEventListener('submit', function(e){
    e.preventDefault();
    const title = form.querySelector('input[name="title"]').value;
    const author = form.querySelector('input[name="author"]').value;
    const pages = form.querySelector('input[name="pages"]').value;
    const read = form.querySelector('input[name="read"]').value;
    ;
    displayBooks(addBookToLibrary(title, author, pages, read));
    form.reset();
})

