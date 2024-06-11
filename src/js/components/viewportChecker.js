import { setListView, setGridView, lastClickedButton, library } from "./viewButtonToggle";

function checkViewport() {
    console.log(lastClickedButton);
    if (window.innerWidth <= 600 || lastClickedButton.id === 'list-btn') {
        setListView();
    } else {
        setGridView()
    }
}



export function handleViewportCheck(){
    checkViewport();
    
    window.addEventListener('resize', checkViewport);

}
