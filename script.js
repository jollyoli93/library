const container = document.querySelector(".container");
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const updateEntry = document.querySelector("#update-entry");

let bookIndex = 1;

const myLibrary = ["The Hobbit", "Catcher in the Rye"];

function displayBooks(books){
    books.map(book => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = bookIndex + '. ' + book;

        const delBtn = document.createElement("button");
        delBtn.setAttribute('id', book+bookIndex)

        const readBtn = document.createElement("button");
        readBtn.setAttribute('id', book)
        readBtn.textContent = "Read";
        
        card.appendChild(readBtn);
        container.appendChild(card);

        bookIndex += 1;
    });
};

function addBookToLibrary() {
    // input = prompt("Please add a book");
    myLibrary.push(input);
};

function Book(title, author, year, pages, read=false){
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
};

// Add book modal form
openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

updateEntry.addEventListener('click', (e)=>{
    e.preventDefault();

    const form = document.querySelector('#form');
    const title = document.querySelector("input[name='title'").value;
    const author = document.querySelector("input[name='author'").value;
    const year = document.querySelector("input[name='year'").value;
    const pages = document.querySelector("input[name='pages'").value;

    let newBook = new Book(title, author, year, pages);
    myLibrary.push(newBook.title);

    // console.log(newBook);
    console.log(newBook);
    // console.log(myLibrary);
});


// const lotr = new Book('LOTR', 'JRR Tolken', '1946');

// console.log(lotr.read);