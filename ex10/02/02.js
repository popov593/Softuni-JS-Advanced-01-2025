class BookClub {
    constructor(library) {

        this.library = library;

        this.books = [];

        this.members = [];
    }

    addBook(title, author) {

        const existingBook = this.books.find((book) => book.title === title && book.author === author);

        if (existingBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        }

        const book = { title, author };

        this.books.push(book);

        return `The book "${title}" by ${author} has been added to ${this.library} library.`

    }

    addMember(memberName) {

        if(this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`
        }

        this.members.push(memberName);

        return `Member ${memberName} has been joined to the book club.`
    }

    assignBookToMember(memberName, bookTitle) {

        const memberIndex = this.members.indexOf(memberName);

        if (memberIndex === -1) {
            throw new Error(`Member ${memberName} not found.`);
        }

        const bookIndex = this.books.findIndex((book) => book.title === bookTitle);

        if (bookIndex === -1) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        const assignBook = this.books.splice(bookIndex, 1)[0];

        return `Member ${memberName} has been assigned the book "${assignBook.title}" by ${assignBook.author}.`;

    }

    generateReadingReport() {
        if (this.members.length === 0) {
            return 'No members in the book club.';
        }

        const availableBooksReport = this.books.length === 0 ? 'No available books in the library.' : `Available Books in ${this.library} library:\n${this.books.map((book) => `"${book.title}" by ${book.author}`).join('\n')}`;

        return availableBooksReport;
    }


}

const myBookClub = new BookClub('The Bookaholics');

console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));

console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));

console.log(myBookClub.addBook("1984", "George Orwell"));

console.log(myBookClub.addMember("Alice"));

console.log(myBookClub.addMember("Peter"));

console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));