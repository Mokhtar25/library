
let mylibrary = [];

function Book(title, author, pages, read){
    this.title= title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        let read = 'Not read yet';
        if (this.read === true){
            read = `read`;
        }
         return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`
        
    }
}

const albert = new Book(`the stranger`, `albert camus`, 100, 1);

mylibrary.push(albert)


function addbook(title, author, pages, read){

    let new_book = new Book(title, author, pages, read);
    mylibrary.push(new_book);
}

addbook("Normal People", "Salley Ronney", 150, false);
addbook("Maybe You should talk to someone", "Lori Gottlieb", 300, true);
addbook("The Song of Achilles", "Madline Miller", 250, true)

for (book of mylibrary){
    console.log(book.info());
}
const dialog = document.querySelector('#dialog')
const open_button = document.querySelector('.open-button');
const close_button = document.querySelector('.close-button');

open_button.addEventListener("click", ()=>{
    dialog.showModal();

})
const form = document.querySelector('form');
close_button.addEventListener("click", ()=>{
})


