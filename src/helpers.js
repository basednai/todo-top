function createElement(tag, parent, ...className) {
    let element = document.createElement(tag);
    if (arguments.length > 2) {
        className.forEach((item) => element.classList.add(item))
    }
    if (parent)
        appendElement(parent, element)
    return element;
}

function appendElement(parent, child) {
    parent.appendChild(child);
}

function handleImage(theImage, className, parent) {
    let image = new Image();
    image.classList.add(className)
    image.src = theImage;

    parent.appendChild(image);
}

function changeHTML(element, newText) {
    element.innerHTML = newText;
}

function changeText(element, newText) {
    element.textContent = newText;
}

export { createElement, appendElement, handleImage, changeHTML, changeText };