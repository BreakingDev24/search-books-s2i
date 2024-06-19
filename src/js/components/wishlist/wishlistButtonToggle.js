

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

export function handleToggleMyLibraryBtn() {
    const myLibraryBtn = document.getElementById('my-library-btn');
    const myLibraryCloseBtn = document.getElementById('close-mylibrary-btn');
    const overlay = document.getElementById('overlay')

    myLibraryBtn.addEventListener('click', wishlsitToggle)
    myLibraryCloseBtn.addEventListener('click', wishlsitToggle)
    overlay.addEventListener('click', wishlsitToggle)
}

