
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
 
const albert = new Book(`the stranger`, `albert camus`, 100, false);

mylibrary.push(albert)


function addbook(title, author, pages, read){

    let new_book = new Book(title, author, pages, read);
    mylibrary.push(new_book);
}

addbook("Normal People", "Salley Ronney", 150, false);
addbook("Maybe You should talk to someone", "Lori Gottlieb", 300, true);
addbook("The Song of Achilles", "Madline Miller", 250, true)

const cards = document.querySelector('.main');


function display(){
    const frag  = document.createDocumentFragment();
    cards.replaceChildren();

for (book of mylibrary){
    let container = document.createElement('div');
    container.classList.add('card');
    let title_div = document.createElement('div');
    title_div.innerText = book.title;
    title_div.classList.add('card_title');
    container.appendChild(title_div);
    let author_div = document.createElement('div');
    author_div.classList.add('card_author');
    author_div.innerText = book.author;
    container.appendChild(author_div);
    let pages_div = document.createElement('div');
    pages_div.classList.add('card_pages');
    pages_div.innerText = book.pages;
    container.appendChild(pages_div);
    let checked_div = document.createElement('div');
    checked_div.classList.add('card_checked');
    checked_div.innerText = 'Read'
    if (book.read === false){
        checked_div.innerText = 'Not Read'
        checked_div.classList.add('card_checked_not');
    }
    container.appendChild(checked_div);
    let close_btn = document.createElement('div');
    close_btn.classList.add('close-button','close', 'card_close');
    close_btn.innerText = 'X'
    container.appendChild(close_btn);

    frag.appendChild(container);
}
cards.appendChild(frag);
remove();
}
const dialog = document.querySelector('#dialog')
const open_button = document.querySelector('.open-button');
const close_button = document.querySelector('#submit_form');

open_button.addEventListener("click", ()=>{
    dialog.showModal();

})
// varibles
let title;
let author;
let pages;
let read = false;


const title_input = document.querySelector('.title');
const author_input = document.querySelector('.author');
const pages_input = document.querySelector('.pages');
const read_input = document.querySelector('.read');
const close_header = document.querySelector('#close_dialog');

close_header.addEventListener("click", ()=>{
    dialog.close();
    title_input.value = '';
    author_input.value = '';
    pages_input.value = '';
    read_input.checked = false;

})



const form = document.querySelector('form');
close_button.addEventListener("click", ()=>{

    if (form.checkValidity()){
    title = title_input.value;
    author = author_input.value;
    pages = pages_input.value;
    if (read_input.checked){
        read = true
    }
    
    addbook(title, author, pages, read);
    display();
    form.reset()    
    dialog.close();
    } 
})
display();


function remove(){
const cards_ = document.querySelectorAll('.main .card')
 
cards_.forEach((e)=>{
        let data =  e.querySelector('.close');
    data.addEventListener('click', ()=>{
        let title   = e.firstChild.textContent
         let index = mylibrary.findIndex((elm)=> elm.title == title)
        if (index !== -1){
            mylibrary.splice(index, 1);
        }
        display();
     })
    let read_btn = e.querySelector('.card_checked');
    read_btn.addEventListener('click', ()=>{
        let book = e.firstChild.textContent;
        let index_r = mylibrary.findIndex((el) => el.title == book);
        if (index_r !== -1){
            if (mylibrary[index_r].read === true){
                mylibrary[index_r].read = false;
                e.classList.add('card_checked_not');
            }  

            else{
                mylibrary[index_r].read = true;
                e.classList.remove('card_checked_not');
            }
        }
        display();
    })


    
})
}
