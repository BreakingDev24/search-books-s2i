import '../style/styles.scss'

import { fetchBookData } from "./api/fetch-book";
import { getInput } from "./display-element/displayBook";
import { changeView } from './components/viewButtonToggle';
import { handleViewportCheck } from './components/viewportChecker';

const searchBtn = document.getElementById('search-btn');
const viewBtnContainer = document.getElementById('view-btn-container')

console.log(viewBtnContainer);
// searchBtn.addEventListener('click', getInput)
fetchBookData('love')
handleViewportCheck()
viewBtnContainer.addEventListener('click', changeView)
