const library = document.getElementById('library');

function setGridView() {
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

    if(! eventTarget || eventTarget.nodeName !== 'BUTTON' ){
        return
    }

    switch(eventTarget.id) {
        case 'list-btn': 
            setListView()
            break;
        case 'grid-btn': 
            setGridView()
            break;
    }
}