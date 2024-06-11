export const library = document.getElementById('library');
const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');

export let lastClickedButton = ''


export function setGridView() {
    if(library.classList.contains('library-list-view')){
        library.classList.remove('library-list-view')
    }
    library.classList.add('library-grid-view')
}

export function setListView() {
    if(library.classList.contains('library-grid-view')){
        library.classList.remove('library-grid-view')
    }
    library.classList.add('library-list-view')
}

export const changeView = (e) => {
    const eventTarget = e.target.closest('button');

    if(!eventTarget || eventTarget.nodeName !== 'BUTTON' ){
        return
    }

    if(lastClickedButton){
        lastClickedButton.classList.remove('active')
    }
    eventTarget.classList.add('active')

    lastClickedButton = eventTarget
    console.log(eventTarget);

    switch(eventTarget.id) {
        case 'list-btn': 
            setListView()
            break;
        case 'grid-btn': 
            setGridView()
            break;
    }
}

export function setActviteButtonOnLoad(){
    if(library.classList.contains('library-grid-view')){
        gridBtn.classList.add('active')
        listBtn.classList.remove('active');
        lastClickedButton = gridBtn
    }
} 