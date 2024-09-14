 







/* */
const dialog = document.querySelector('.dialog');
const openDialog = document.querySelector('.add-btn');
const submitBtn = document.querySelector('.submit-btn');
const library = document.querySelector('.library');
const form = document.querySelector('form');







// array
const myLibrary = [];



/* object constructor */
function Book(title, author, pages, read) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
}





// add book to array
function addBookToLibrary() {
   const titleValue = document.querySelector('#title').value;
   const authorValue = document.querySelector('#author').value;
   const pagesValue = document.querySelector('#pages').value;
   const readValue = document.querySelector('#read').value;


   // check if fom is empty
   if(titleValue == '' || authorValue == '' || pagesValue == '') {
      return
   }

   //create object
   const book = new Book(titleValue, authorValue, pagesValue, readValue);


   //push object to array
   myLibrary.push(book);
   displayBook();
}


/* creates dialog */
openDialog.addEventListener('click', () => {
   dialog.showModal();
})


/* submit dialog info  */
submitBtn.addEventListener('click', (e) => { 
      addBookToLibrary();
      form.reset()
})



/* display book */
function displayBook(){
       
   let library = document.querySelector('.library');

   
   // reset library
   library.innerHTML = '';

   // create library cards
   for(let i = 0; i < myLibrary.length; i++) {
      const card = document.createElement('div');
      library.appendChild(card);
      card.classList.add('card-container');
      card.setAttribute('data-index', myLibrary.indexOf(myLibrary[i]))
      
      // create card container
      const title = document.createElement('h3');
      card.appendChild(title);
      title.innerHTML = `title: ${myLibrary[i].title}`;

      const author = document.createElement('p');
      card.appendChild(author);
      author.innerHTML = `author: ${myLibrary[i].author}`;

      const pages = document.createElement('p');
      card.appendChild(pages);
      pages.innerHTML = `pages: ${myLibrary[i].pages}`;

      const btnContainer = document.createElement('div');
      card.appendChild(btnContainer)
      btnContainer.classList.add('btn-container');

      const removeBookBtn = document.createElement('button');
      btnContainer.appendChild(removeBookBtn);
      removeBookBtn.classList.add('remove-btn');
      removeBookBtn.innerHTML = 'REMOVE';

      // remove card from library
      removeBookBtn.addEventListener('click', removeBook)
      
      function removeBook() {
         let index = card.dataset.index;
         myLibrary.splice(index, 1);
         displayBook()
      }
      
      
      // create book btn
      const bookReadBtn = document.createElement('button');
      btnContainer.appendChild(bookReadBtn);
      bookReadBtn.classList.add('read-btn');
      bookReadBtn.addEventListener('click', toggleReadBtn)
      changeReadBtn();

      // toggle read button
      function toggleReadBtn() {
         let index = card.dataset.index;
         let toggleRead = new Book()
         if(myLibrary[index].read == 'YES') {
            toggleRead.read = 'NO'
            bookReadBtn.innerHTML = 'NOT READ';
            bookReadBtn.style.backgroundColor = 'rgb(255, 0, 0)'
         }else {
            toggleRead.read = 'YES'
            bookReadBtn.innerHTML = 'READ';
            bookReadBtn.style.backgroundColor = 'rgba(14, 193, 14, 0.834)'
         }
      
      }

      // change read button based on read option selected
      function changeReadBtn() {
         let index = card.dataset.index;
         if(myLibrary[index].read == 'YES') {
            bookReadBtn.innerHTML = 'READ';
         }else {
            bookReadBtn.innerHTML = 'NOT READ';
            bookReadBtn.style.backgroundColor = 'red'
         }
         
      }



      
      }    
}






