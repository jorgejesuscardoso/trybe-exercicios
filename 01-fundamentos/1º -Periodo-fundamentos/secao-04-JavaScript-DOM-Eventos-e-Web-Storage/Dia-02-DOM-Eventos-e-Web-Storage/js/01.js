const search = document.getElementById('where-are-you');
const parent = search.parentElement;
    parent.style.color = 'green';

const firstChildChild = search.firstElementChild;
    firstChildChild.innerText = 'First child of child';
const firstChild = parent.firstElementChild;

const firstChild2 = search.previousElementSibling;

const thirdChild = search.nextElementSibling;
const thirdChild2 = parent.lastElementChild.previousElementSibling;