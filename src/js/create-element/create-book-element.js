import { get } from "lodash";
import createElement from "./template";
import displayBookDescription from "../display-element/displayDescription";
// createElement(tag, className, parentContainer)

/**
 * Function for dynamically creating HTML elements representing books within a virtual library.
 * Each book is represented by a div containing title, main author, and, if available, other authors with popover.
 * Also initializes tooltips for each book title.
 */

export default function createBookElement(booksDetails){
    // Get the library element from the DOM
    const library = document.getElementById('library')

    // Iterate through each book in the provided details
    booksDetails.map(detail => {
        const {bookTitle, authors, key, firstAuthor, otherAuthors} = detail;

        // Create the main container for the book
        const bookDiv = createElement('div', 'book-div', library)
        bookDiv.dataset.key = key

        // Create the container for the book information
        const bookInfoContainer = createElement('div', 'info-container', bookDiv)

        // Create the book title element with tooltip
        const bookTitleElement = createElement('h2', 'book-title', bookInfoContainer);
        // Set attribute for the book title tooltip
        bookTitleElement.setAttribute('data-bs-toggle', 'tooltip');
        bookTitleElement.setAttribute('data-bs-placement', 'top');
        bookTitleElement.setAttribute('data-bs-custom-class', 'custom-tooltip');
        bookTitleElement.setAttribute('title', bookTitle);

        bookTitleElement.textContent = bookTitle

        // Create element for the main authors
        const bookAuthors = createElement('p', 'book-authors', bookInfoContainer)
        bookAuthors.textContent = firstAuthor

        // If there are other authors, create a link to show details with a popover
        if(otherAuthors.length > 0){
            const other = createElement('a', 'other-author', bookAuthors)
            other.textContent = ' and other';
            // Set attributes for the popover of other authors
            other.setAttribute('tabindex', '0')
            other.setAttribute('role', 'button');
            other.setAttribute('data-bs-toggle', 'popover');
            other.setAttribute('data-bs-trigger', 'focus');
            other.setAttribute('data-bs-title', 'Other Author');
            other.setAttribute('data-bs-content', otherAuthors.join(', '));
            
            // Initialize the popover for the other authors using bootstrap
            new bootstrap.Popover(other, {
                trigger: 'focus'
            });
              
        } 

        // Create function for the book description
        const descriptionBtn = createElement('button', 'description-btn', bookDiv)
        descriptionBtn.textContent = 'about'

        // Initialize the tooltip for the book title using bootstrap
        const tooltip = new bootstrap.Tooltip(bookTitleElement)

    })
    displayBookDescription()
}