
function getYear(){
    return new Date().getFullYear()
}

export function addDateFooter(){
    const copyrightYear = document.querySelector('.copyright-year')
    copyrightYear.textContent = getYear()
}