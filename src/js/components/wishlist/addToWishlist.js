const myLibrary = []

export function addBookToWishList(book, btn){
    if(!myLibrary.includes(book)){
        myLibrary.push(book);
        btn.innerHTML = '<i class="bi bi-file-minus"></i>';
        console.log(myLibrary);
    } else {
        myLibrary.splice(myLibrary.indexOf(book), 1)
        btn.innerHTML = '<i class="bi bi-plus-circle"></i>'
        console.log(myLibrary)
    }

    updateLibraryCounter(myLibrary.length)
}

function updateLibraryCounter(count) {
    const myLibraryCounter = document.getElementById('my-library-counter');
    myLibraryCounter.textContent = count
}
