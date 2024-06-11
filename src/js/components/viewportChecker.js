import { setListView, setGridView,setActviteButtonOnLoad, lastClickedButton, library } from "./viewButtonToggle";

function checkViewport() {
    console.log(lastClickedButton);
    if (window.innerWidth <= 428 || lastClickedButton.id === 'list-btn') {
        setListView();
        setActviteButtonOnLoad()
    } else {
        setGridView()
        setActviteButtonOnLoad()
    }
}





export function handleViewportCheck(){
    checkViewport();
    window.addEventListener('resize', checkViewport);

}
