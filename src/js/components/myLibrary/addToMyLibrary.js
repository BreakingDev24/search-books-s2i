import { library } from "../view/viewButtonToggle";
import { renderMylibrary } from "./renderMyLibrary";

export let myLibrary = []

export function addBookToMyLibrary(book, btn){
    if(!myLibrary.includes(book)){
        myLibrary.push(book);
        renderMylibrary(myLibrary)
    } else {
        myLibrary.splice(myLibrary.indexOf(book), 1)
        renderMylibrary(myLibrary)
    }
    changeBtnStatus(btn, book, myLibrary)
    saveLocal(myLibrary)
    updateLibraryCounter(myLibrary.length)
}

export function updateLibraryCounter(count) {
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


export function saveLocal(item) {
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

