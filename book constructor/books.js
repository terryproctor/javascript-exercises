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

let bookContainer = document.getElementsByClassName('bookContainer')[0];

// need to add function where book is displayed in DOM as a div
function displayBooks(item){
    // book box is divs for each box
    let bookBox = document.createElement('div');
    // book containers containers all book

    bookContainer.appendChild(bookBox);
    
    // book is just info for that book
    let book = document.createElement('div');
    book.textContent = item.info();
    book.dataset.value = myLibrary.indexOf(item);
    let delBtn = document.createElement('button');
    delBtn.dataset.value = book.dataset.value; 
    delBtn.textContent = 'Delete';
    delBtn.class = 'delete'
    bookBox.appendChild(book);
    book.appendChild(delBtn);
}
// display all books initially
myLibrary.forEach(displayBooks);

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
    if (!(title && author && pages && read)) {
        alert('All fields need to be filled in!');
        return;
    }
    displayBooks(addBookToLibrary(title, author, pages, read));
    form.reset();
})


// need to develop function for delete button
bookContainer.addEventListener('click', function(e){
    e.preventDefault();
    let target = e.target;
    if (target.class === 'delete') {
        //console.log(target.dataset.value)
        myLibrary.splice(target.dataset.value, 1);
        bookContainer.childNodes[target.dataset.value].remove()
    }
});