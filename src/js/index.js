import '../style/styles.scss'

import { getInput } from "./display-element/displayBook";
import { changeView } from './components/viewButtonToggle';
import { handleViewportCheck } from './components/viewportChecker';
import { initializeSidePanelEvent, activeSidePanel } from './components/wishlist/handleSidePanelVisibility';
import { restoreLocalData } from './components/wishlist/addToWishlist';
import { addDateFooter } from './components/footer/dateUtils';

const searchBtn = document.getElementById('search-btn');
const viewBtnContainer = document.getElementById('view-btn-container');
document.addEventListener("DOMContentLoaded", activeSidePanel)

addDateFooter()
restoreLocalData()

searchBtn.addEventListener('click', getInput)
handleViewportCheck()
viewBtnContainer.addEventListener('click', changeView)
initializeSidePanelEvent()

