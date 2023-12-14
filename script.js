const myLibrary = ["The Hobbit", "Catcher in the Rye"];


function bookLooper(books){
    books.map(book => {
        console.log(book);

    });
};

function addBookToLibrary() {
    input = prompt("Please add a book");
    myLibrary.push(input);
};

addBookToLibrary();
bookLooper(myLibrary);


