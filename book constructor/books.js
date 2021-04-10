function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = (title, author, pages, read) => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read': 'not read yet'}`;
    }
}

let Charlie = new Book('Charlie and the Chocolate Factory', 'Roal Dahl', 452, true);
console.log(Charlie.info());
