import { get } from "lodash";
import createElement from "./template";
import displayBookDescription from "../display-element/displayDescription";
// createElement(tag, className, parentContainer)

export default function createBookElement(booksDetails){
    const library = document.getElementById('library')

    booksDetails.map(detail => {
        const {bookTitle, authors, key, firstAuthor, otherAuthors} = detail
        const bookDiv = createElement('div', 'book-div', library)
        bookDiv.dataset.key = key

        const bookInfoContainer = createElement('div', 'info-container', bookDiv)

        const bookTitleElement = createElement('h2', 'book-title', bookInfoContainer)
        bookTitleElement.setAttribute('data-bs-toggle', 'tooltip')
        bookTitleElement.setAttribute('data-bs-placement', 'top')
        bookTitleElement.setAttribute('data-bs-custom-class', 'custom-tooltip')
        bookTitleElement.setAttribute('title', bookTitle)

        bookTitleElement.textContent = bookTitle

        const bookAuthors = createElement('p', 'book-authors', bookInfoContainer)
        bookAuthors.textContent = firstAuthor

        if(otherAuthors.length > 0){
            const other = createElement('a', 'other-author', bookAuthors)
            other.textContent = ' and other';
            
            other.setAttribute('tabindex', '0')
            other.setAttribute('role', 'button');
            other.setAttribute('data-bs-toggle', 'popover');
            other.setAttribute('data-bs-trigger', 'focus');
            other.setAttribute('data-bs-title', 'Other Author');
            other.setAttribute('data-bs-content', otherAuthors.join(', '));
            
            
            new bootstrap.Popover(other, {
                trigger: 'focus'
            });
              
        } 

        const descriptionBtn = createElement('button', 'description-btn', bookDiv)
        descriptionBtn.textContent = 'about'

        const tooltip = new bootstrap.Tooltip(bookTitleElement)

    })
    displayBookDescription()
}