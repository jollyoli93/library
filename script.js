const container = document.querySelector(".container");
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const updateEntry = document.querySelector("#update-entry");

const title = document.querySelector("input[name='title'");
const author = document.querySelector("input[name='author'");
const year = document.querySelector("input[name='year'");
const pages = document.querySelector("input[name='pages'");

let bookIndex = 0;

const myLibrary = [];

function createCard(book){
    const card = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const year = document.createElement("p");
    const pages  = document.createElement("p");

    card.className = "card";
    title.textContent = book.title;
    author.textContent = book.author;
    year.textContent = book.year;
    pages.textContent = book.pages + " pages";

    const delBtn = document.createElement("button");
    delBtn.setAttribute('id', "delete " + bookIndex);
    delBtn.textContent = "Delete";

    const readBtn = document.createElement("button");
    readBtn.setAttribute('id', "read "+ bookIndex)
    readBtn.textContent = "Read";
    

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(year);
    card.appendChild(pages);

    card.appendChild(readBtn);
    card.appendChild(delBtn);
    container.appendChild(card);

    bookIndex += 1;
}

function Book(title, author, year, pages, read=false){
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
};

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
    createCard(newBook);
});