let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = (title, author, pages, read) => {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
        };
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('Charlie and the Chocolate Factory', 'Roal Dahl', 452, true);
addBookToLibrary('1984', 'Orsen Wells', 655, true);
addBookToLibrary('50 Shades of Gray', 'Who Cares', 12, false)

// need to add function where book is displayed in DOM as a div
myLibrary.forEach(function (item){
    let bookBox = document.createElement('div');
    bookBox.textContent = item.info();
    bookBox.class = 'book';
    let bookContainer = document.getElementsByClassName('bookContainer')[0];
    bookContainer.appendChild(bookBox);
}
)