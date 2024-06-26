const myLibrary = [];
let arrayIndex = 0;

class Book  {
  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.isRead = () => this.read ? this.read = false:this.read = true
    }
}

// listen for all buttons, send to appropriate function
document.addEventListener ('click', (event) =>{
  let target = event.target;
  if(target.className === "submit"){
    event.preventDefault();
    storeInputs();
  }else if (target.className === "isRead") {
    target.textContent === "Read" ? target.textContent = "Not Read" : target.textContent = "Read";
    myLibrary[target.value].isRead();
  }else if (target.className === "remove") removeBook(target);
});

function removeBook(target) {
  // Remove book from DOM
  const div = document.querySelector(".book" + target.value);
  div.remove();
  // remove book from array, iterate over all values greater than book
  let items = document.querySelectorAll(".remove, .isRead");
  for (item of items){
    if (item.value > target.value){ 
      item.value--;
      item.parentNode.className = "book" + item.value;
    }
  }
  myLibrary.splice(target.value, 1);
  // reduce index for next input
  arrayIndex--;
}

// Takes form data, stores in array
function storeInputs() {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("#read");
  myLibrary.push(new Book(title.value, author.value, pages.value, read.checked)); 
  // add to DOM
  libraryAdd();
  // Empty inputs
  clearFields(title,author,pages,read);
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
  read.className = "isRead";
  read.value = arrayIndex;
  const remove = document.createElement('button');
  remove.textContent = "Remove";
  remove.className = "remove";
  remove.value = arrayIndex;
  // append elements
  document.querySelector('.library').appendChild(div);
  div.appendChild(title);
  div.appendChild(author);
  div.appendChild(pages);
  div.appendChild(read);
  div.appendChild(remove);
  // increment current book index
  arrayIndex++;
}

// clears input fields
function clearFields(title,author,pages,read) {
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
}