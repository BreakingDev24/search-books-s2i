import { library } from "../viewButtonToggle";
import { renderMylibrary } from "./renderMyLibrary";

export let myLibrary = []

export function addBookToWishList(book, btn){
    if(!myLibrary.includes(book)){
        myLibrary.push(book);
        // btn.style.backgroundColor = 'rgb(175, 141, 141)'
        renderMylibrary(myLibrary)
        console.log(myLibrary);
    } else {
        myLibrary.splice(myLibrary.indexOf(book), 1)
        renderMylibrary(myLibrary)
        console.log(myLibrary)
    }
    changeBtnStatus(btn, book, myLibrary)
    saveLocal(myLibrary)
    updateLibraryCounter(myLibrary.length)
}

function updateLibraryCounter(count) {
    const myLibraryCounter = document.getElementById('my-library-counter');
    myLibraryCounter.textContent = count
}

export function changeBtnStatus(btn, title, library){
    if(library.includes(title)){
        btn.style.backgroundColor = 'rgb(175, 141, 141)';
        btn.innerHTML = '<i class="bi bi-x-circle"></i>';
    } else {
        btn.innerHTML = '<i class="bi bi-plus-circle"></i>';
        btn.style.backgroundColor = 'rgb(204, 212, 166)'
    }
}


function saveLocal(item) {
    localStorage.setItem("my-library", JSON.stringify(item))
}

export function restoreLocalData(){
    const getLibraryFromStorage = JSON.parse(localStorage.getItem('my-library'));
    if(getLibraryFromStorage !== null){
        myLibrary = getLibraryFromStorage;
        renderMylibrary(myLibrary)
        updateLibraryCounter(myLibrary.length)
    }
}

