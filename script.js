const container = document.querySelector(".container");
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

const myLibrary = ["The Hobbit", "Catcher in the Rye"];

function displayBooks(books){
    books.map(book => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = book;

        const readBtn = document.createElement("button");
        readBtn.setAttribute('id', book)
        readBtn.textContent = "Read";
        
        card.appendChild(readBtn);
        container.appendChild(card);
    });
};

function addBookToLibrary() {
    // input = prompt("Please add a book");
    myLibrary.push(input);
};

function Book(title, author, year, read=false){
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
};

// addBookToLibrary();
displayBooks(myLibrary);

// Add book modal form
openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});



// const lotr = new Book('LOTR', 'JRR Tolken', '1946');

// console.log(lotr.read);