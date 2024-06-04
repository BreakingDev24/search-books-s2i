export default function createElement(tag, className, parentContainer) {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    if (parentContainer) {
        parentContainer.appendChild(element);
    }
    return element;
}