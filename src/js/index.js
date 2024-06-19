import '../style/styles.scss'

import { fetchBookData } from "./api/fetch-book";
import { getInput } from "./display-element/displayBook";
import { changeView } from './components/viewButtonToggle';
import { handleViewportCheck } from './components/viewportChecker';
import { wishlsitToggle } from './components/wishlist/wishlistButtonToggle';
import { handleToggleMyLibraryBtn } from './components/wishlist/wishlistButtonToggle';

const searchBtn = document.getElementById('search-btn');
const viewBtnContainer = document.getElementById('view-btn-container');


searchBtn.addEventListener('click', getInput)
handleViewportCheck()
viewBtnContainer.addEventListener('click', changeView)
handleToggleMyLibraryBtn()

