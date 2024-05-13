const myLibrary = [];
const newTitle = document.querySelector("#title");
const newAuthor = document.querySelector("#author");
const newPages = document.querySelector("#pages");
const newRead = document.querySelector("#read");
const submit = document.querySelector('#submit');
const display = document.querySelector('.library');
let arrayIndex = 0;

function Book (title, author, pages, read)  {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.isRead = () => this.read ? this.read = false:this.read = true
}

// DELETE LATER, just to test inputs working
function testInputs() {
  console.log('Title: ' + newTitle.value + ' Author: '+  newAuthor.value + ' Pages: ' + newPages.value + ' Read: ' + (newRead.checked ? "Yes":"no") );
}

// activates submit button
submit.addEventListener('click',()  => {
  event.preventDefault();
  // testInputs();
  storeInputs();
  clearFields();
});

// Takes form data, stores in array
function storeInputs() {
  myLibrary.push(new Book(newTitle.value, newAuthor.value, newPages.value, newRead.checked)); 
  libraryAdd();
}

// Add latest book to DOM from array
function libraryAdd() {
  // create elements, add text based on current book
  const div = document.createElement("div");
  div.className = "book" + arrayIndex;
  const title = document.createElement ('p');
  title.textContent = 'Title: ' + myLibrary[arrayIndex].title;
  const author = document.createElement('p');
  author.textContent = "Author: " + myLibrary[arrayIndex].author;
  const pages = document.createElement('p');
  pages.textContent = "Pages: " + myLibrary[arrayIndex].pages;
  const read = document.createElement('button');
  read.textContent = myLibrary[arrayIndex].read ? "Read": "Not Read";
  const remove = document.createElement('button');
  remove.textContent = "Remove";
  remove.className = "book" + arrayIndex;
  // append elements
  display.appendChild(div);
  div.appendChild(title);
  div.appendChild(author);
  div.appendChild(pages);
  div.appendChild(read);
  div.appendChild(remove);
  // increment current book index
  arrayIndex++;
}

// clears input fields
function clearFields() {
  newTitle.value = '';
  newAuthor.value = '';
  newPages.value = '';
  newRead.checked = false;
}