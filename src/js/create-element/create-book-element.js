import { get } from "lodash";
import createElement from "./template";
import displayBookDescription from "../display-element/displayDescription";
// createElement(tag, className, parentContainer)

export default function createBookElement(booksDetails){
    const library = document.getElementById('library')

    booksDetails.map(detail => {
        const {title, authors, key} = detail
        const bookDiv = createElement('div', 'book-div', library)
        bookDiv.dataset.key = key

        const bookInfoContainer = createElement('div', 'info-container', bookDiv)

        const bookTitle = createElement('h2', 'book-title', bookInfoContainer)
        bookTitle.textContent = title

        const bookAuthors = createElement('p', 'book-authors', bookInfoContainer)
        bookAuthors.textContent = authors

        const descriptionBtn = createElement('button', 'description-btn', bookDiv)
        descriptionBtn.textContent = 'about'

    })
    displayBookDescription()
}