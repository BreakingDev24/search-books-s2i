import axios from "axios";
import { get } from "lodash";

import { showSpinner, hideSpinner } from "../create-element/createSpinner";

import createBookElement from "../create-element/create-book-element";

/**
 * Function to fetch and display book data based on input genres.
 * 
 * This function performs the following steps:
 * 1. Shows a loading spinner to indicate that data fetching is in progress.
 * 2. Constructs a URL to fetch book data from the Open Library API based on the provided genres.
 * 3. Makes an asynchronous request to fetch the data.
 * 4. Extracts relevant book details from the API response.
 * 5. Creates and displays book elements using the fetched data.
 * 6. Handles any errors that occur during the data fetching process.
 * 7. Hides the loading spinner after the data fetching process is complete, regardless of success or failure.
 * */

export const fetchBookData = async (inputBookGenres) => {
    showSpinner()
    try {
        const bookUrl = `https://openlibrary.org/subjects/${inputBookGenres}.json`;
        const response = await axios.get(bookUrl)
        const bookDetails = getBookDetails(response)
        createBookElement(bookDetails)
    } catch(err) {
        console.error(err);
    } finally {
      hideSpinner()
    }

}

// Helper function to extract book details from the API response
const getBookDetails = (book) => {
    const data = _.get(book, 'data', []);
    const works = _.get(data, 'works', [])

  return works.map(work => {
    const key = _.get(work, 'key', 'No description')
    const bookTitle = _.get(work, 'title', 'titolo non disponibile');
    const authors = _.get(work, 'authors', []).map(author => _.get(author, 'name', 'autore non disponibile'));
    const firstAuthor = authors.length > 0 ? authors[0] : 'autore non disponibile'
    const otherAuthors = authors.length > 1 ? authors.slice(1) : []

    return {key, bookTitle, authors, firstAuthor, otherAuthors}

  });

}

