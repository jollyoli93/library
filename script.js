const container = document.querySelector(".container");
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const updateEntry = document.querySelector("#update-entry");

const title = document.querySelector("input[name='title'");
const author = document.querySelector("input[name='author'");
const year = document.querySelector("input[name='year'");
const pages = document.querySelector("input[name='pages'");

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

    let newBook = new Book(title.value, author.value, year.value, pages.value);
    myLibrary.push(newBook.title);
    
    console.log(newBook);
});