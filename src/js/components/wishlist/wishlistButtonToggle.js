

export function wishlsitToggle(){
    const sideContainer = document.getElementById('side-container');
    const overlay = document.getElementById('overlay');
    if(sideContainer.classList.contains('show')){
        sideContainer.classList.remove('show');
        overlay.classList.remove('show');
    } else {
        sideContainer.classList.add('show');
        overlay.classList.add('show')
    }

}

