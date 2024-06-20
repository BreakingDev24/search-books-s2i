import { myLibrary } from "./addToMyLibrary";
import { renderMylibrary } from "./renderMyLibrary";
import { updateLibraryCounter } from "./addToMyLibrary";
import { saveLocal } from "./addToMyLibrary";

//Toggle the visibility of the side panel and overlay
 function toggleSidePanel(){
    const sideContainer = document.getElementById('side-container');
    const overlay = document.getElementById('overlay');
    if(sideContainer.classList.contains('show')){
        sideContainer.classList.remove('show');
        overlay.classList.remove('show');
    } else {
        sideContainer.classList.add('show');
        overlay.classList.add('show')
    }

}
//Activates the side panel and overlay by removing the 'hidden' class
export function activeSidePanel() {
    const sideContainer = document.getElementById('side-container');
    const overlay = document.getElementById('overlay')

    sideContainer.classList.remove('hidden'),
    overlay.classList.remove('hidden')
}

// Clears the entire wishlist and updates the UI accordingly
function clearAll(){
    myLibrary.length = 0;
    renderMylibrary(myLibrary);
    updateLibraryCounter(myLibrary.length);
    saveLocal(myLibrary)

    const wishBtns = document.querySelectorAll('.wish-btn');
    if(wishBtns.length > 0) {
        wishBtns.forEach(btn => {
            btn.innerHTML = '<i class="bi bi-plus-circle"></i>';
            btn.style.backgroundColor = 'rgb(204, 212, 166)';
        });
    }
}

export function initializeSidePanelEvent() {
    const myLibraryBtn = document.getElementById('my-library-btn');
    const myLibraryCloseBtn = document.getElementById('close-mylibrary-btn');
    const overlay = document.getElementById('overlay')
    const clearAllBtn = document.getElementById('clear-all-btn');


    myLibraryBtn.addEventListener('click', toggleSidePanel)
    myLibraryCloseBtn.addEventListener('click', toggleSidePanel)
    overlay.addEventListener('click', toggleSidePanel);
    clearAllBtn.addEventListener('click', clearAll)
}

