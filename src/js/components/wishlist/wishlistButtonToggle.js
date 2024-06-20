import { myLibrary } from "./addToWishlist";
import { renderMylibrary } from "./renderMyLibrary";
import { updateLibraryCounter } from "./addToWishlist";
import { saveLocal } from "./addToWishlist";

 function wishlsitToggle(){
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

export function activeSidePanel() {
    const sideContainer = document.getElementById('side-container');
    const overlay = document.getElementById('overlay')

    sideContainer.classList.remove('hidden'),
    overlay.classList.remove('hidden')
}

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

export function handleToggleMyLibraryBtn() {
    const myLibraryBtn = document.getElementById('my-library-btn');
    const myLibraryCloseBtn = document.getElementById('close-mylibrary-btn');
    const overlay = document.getElementById('overlay')
    const clearAllBtn = document.getElementById('clear-all-btn');


    myLibraryBtn.addEventListener('click', wishlsitToggle)
    myLibraryCloseBtn.addEventListener('click', wishlsitToggle)
    overlay.addEventListener('click', wishlsitToggle);
    clearAllBtn.addEventListener('click', clearAll)
}

