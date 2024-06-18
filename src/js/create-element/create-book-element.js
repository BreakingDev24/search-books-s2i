import { get } from "lodash";
import { addBookToWishList } from "../components/wishlist/addToWishlist";
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
        initializeTooltip(bookTitleElement, bookTitle)

        bookTitleElement.textContent = bookTitle

        // Create element for the main authors
        const bookAuthors = createElement('p', 'book-authors', bookInfoContainer)
        bookAuthors.textContent = firstAuthor

        // If there are other authors, create a link to show details with a popover
        if(otherAuthors.length > 0){
            const other = createElement('a', 'other-author', bookAuthors)
            other.textContent = ' and other';
            // Set attributes for the popover of other authors
            initializePopover(other, otherAuthors.join(', '))
        } 

        // Create function for the book description
        const descriptionBtn = createElement('button', 'description-btn', bookDiv)
        descriptionBtn.textContent = 'about'

        const wishBtn = createElement('button', 'wish-btn', bookDiv)
        wishBtn.innerHTML = '<i class="bi bi-plus-circle"></i>'

        wishBtn.addEventListener('click', () => addBookToWishList(bookTitle, wishBtn))
    })
    displayBookDescription()
}



function initializeTooltip(element, title){
    element.setAttribute('data-bs-toggle', 'tooltip');
    element.setAttribute('data-bs-placement', 'top');
    element.setAttribute('data-bs-custom-class', 'custom-tooltip');
    element.setAttribute('title', title);
    new bootstrap.Tooltip(element)
}

function initializePopover(element, content){
    element.setAttribute('tabindex', '0')
    element.setAttribute('role', 'button');
    element.setAttribute('data-bs-toggle', 'popover');
    element.setAttribute('data-bs-trigger', 'focus');
    element.setAttribute('data-bs-title', 'Other Author');
    element.setAttribute('data-bs-content', content);
    
    // Initialize the popover for the other authors using bootstrap
    new bootstrap.Popover(element, {
        trigger: 'focus'
    });
      
}