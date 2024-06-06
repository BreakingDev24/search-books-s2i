import { fetchBookData } from "./api/fetch-book";
import { getInput } from "./display-element/displayBook";


const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', getInput)