import createElement from "./template";

export function showSpinner(){
    const library = document.getElementById('main')

    const spinnerContainer = createElement('div', 'spinner-container', main);
    spinnerContainer.id = 'spinner-container'

    const spinner = createElement('div', 'spinner-grow', spinnerContainer)

    const spinnerSpan = createElement('span', 'visually-hidden', spinner)

}


export function hideSpinner(){
    const spinnerContainer = document.getElementById('spinner-container')

    if(spinnerContainer){
        spinnerContainer.remove()
    }
}