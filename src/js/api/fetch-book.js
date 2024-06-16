import axios from "axios";
import { get } from "lodash";

import { showSpinner, hideSpinner } from "../create-element/createSpinner";

import createBookElement from "../create-element/create-book-element";

export const fetchBookData = async (inputBookGenres) => {
    showSpinner()
    try {
        const bookUrl = `https://openlibrary.org/subjects/${inputBookGenres}.json`;
        const response = await axios.get(bookUrl)
        const bookDetails = getBookDetails(response)
        createBookElement(bookDetails)
    } catch(err) {
        console.log(err);
    } finally {
      hideSpinner()
    }

}

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

