 








let dialog = document.querySelector('.dialog');
let openDialog = document.querySelector('.add-btn');
let submitBtn = document.querySelector('.submit-btn')




const myLibrary = [];


openDialog.addEventListener('click', () => {
   dialog.showModal()
})


submitBtn.addEventListener('click', (e) => {
   addBookToLibrary();
   displayBook();

})


function addBookToLibrary() {
   let titleValue = document.querySelector('#title').value;
   let authorValue = document.querySelector('#author').value;
   let pagesValue = document.querySelector('#pages').value;

   const comic = new Book(titleValue, authorValue, pagesValue);
   myLibrary.push(comic);
}





function displayBook(){
       
   let library = document.querySelector('.library');
   const lastObj = myLibrary[myLibrary.length - 1];



   for(let i = 0; i < 1; i++) {
      let card = document.createElement('div');
      library.appendChild(card);
      card.classList.add('card-container');

      let title = document.createElement('h3');
      card.appendChild(title);
      title.innerHTML = `title: ${lastObj.title}`;

      let author = document.createElement('p');
      card.appendChild(author);
      author.innerHTML = `author: ${lastObj.author}`;

      let pages = document.createElement('p');
      card.appendChild(pages);
      pages.innerHTML = `pages: ${lastObj.pages}`;

      let btnContainer = document.createElement('div');
      card.appendChild(btnContainer)
      btnContainer.classList.add('btn-container');

      let removeBookBtn = document.createElement('button');
      btnContainer.appendChild(removeBookBtn);
      removeBookBtn.classList.add('remove-btn');
      removeBookBtn.innerHTML = 'REMOVE';

      let bookReadBtn = document.createElement('button');
      btnContainer.appendChild(bookReadBtn);
      bookReadBtn.classList.add('read-btn');
      bookReadBtn.innerHTML = 'READ';
      }
}



function Book(title, author, pages) {
   this.title = title;
   this.author = author;
   this.pages = pages;
}
