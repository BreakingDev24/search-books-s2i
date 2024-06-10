import { setListView } from "./viewButtonToggle";

function checkViewport() {
    if (window.innerWidth <= 600) {
        setListView();
    }
}

export function handleViewportCheck(){
    checkViewport();
    
    window.addEventListener('resize', checkViewport);

}
