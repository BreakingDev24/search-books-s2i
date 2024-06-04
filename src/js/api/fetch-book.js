import axios from "axios";
import { get } from "lodash";

import createBookElement from "../create-element/create-book-element";

export const fetchBookData = async (inputBookGenres) => {
    try {
        const bookUrl = `https://openlibrary.org/subjects/${inputBookGenres}.json`;
        const response = await axios.get(bookUrl)
        const bookDetails = getBookDetails(response)
        console.log(bookDetails)
    } catch(err) {
        console.log(err);
    }

}

const getBookDetails = (book) => {
    const data = _.get(book, 'data', []);
    const works = _.get(data, 'works', [])

  return works.map(work => {
    const title = _.get(work, 'title', 'titolo non disponibile');
    const authors = _.get(work, 'authors', []).map(author => _.get(author, 'name', 'autore non disponibile'));
    return {title, authors}

  });

}