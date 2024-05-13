const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const submit = document.querySelector('#submit');

function testInputs() {
  console.log('Title: ' + title.value + ' Author: '+  author.value + ' Pages: ' + pages.value + ' Read: ' + (read.checked ? "Yes":"no") );
}

submit.addEventListener('click',()  => {
  event.preventDefault();
  testInputs();
});