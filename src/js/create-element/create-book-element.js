import createElement from "./template";
// createElement(tag, className, parentContainer)

export default function createBookElement(booksDetails){
    const library = document.getElementById('library')

    booksDetails.map(detail => {
        const {title, authors} = detail
        const bookDiv = createElement('div', 'book-div', library)

        const bookTitle = createElement('h2', 'book-title', bookDiv)
        bookTitle.textContent = title

        const bookAuthors = createElement('p', 'book-authors', bookDiv)
        bookAuthors.textContent = authors
    })
}