import createElement from "../../create-element/template";

export function renderMylibrary(library){
    const myLibraryContent = document.getElementById('my-library-content')
    myLibraryContent.innerHTML = ''
    const list = createElement('ul', 'book-list-container', myLibraryContent)
    if(library.length > 0){
        library.forEach(book => {
            const listItem = createElement('li', 'list-item', list)
            listItem.textContent = book
        })
    }
}