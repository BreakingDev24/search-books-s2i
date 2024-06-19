

export function wishlsitToggle(){
    const sideContainer = document.getElementById('side-container');
    if(sideContainer.classList.contains('show')){
        sideContainer.classList.remove('show')
    } else {
        sideContainer.classList.add('show')
    }

}