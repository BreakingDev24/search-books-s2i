import { renderMylibrary } from "./renderMyLibrary";

const myLibrary = []

export function addBookToWishList(book, btn){
    if(!myLibrary.includes(book)){
        myLibrary.push(book);
        btn.innerHTML = '<i class="bi bi-x-circle"></i>';
        btn.style.backgroundColor = 'rgb(175, 141, 141)'
        renderMylibrary(myLibrary)
        console.log(myLibrary);
    } else {
        myLibrary.splice(myLibrary.indexOf(book), 1)
        btn.innerHTML = '<i class="bi bi-plus-circle"></i>';
        btn.style.backgroundColor = 'rgb(204, 212, 166)'
        renderMylibrary(myLibrary)
        console.log(myLibrary)
    }
    updateLibraryCounter(myLibrary.length)
}

function updateLibraryCounter(count) {
    const myLibraryCounter = document.getElementById('my-library-counter');
    myLibraryCounter.textContent = count
}


