const container = document.getElementById('first');

const createElement = (classes) => {

    const newDiv = document.createElement('div');
    newDiv.className = classes;
    return newDiv;
};

const addElement = (parent, child) => {
        parent.appendChild(child);
};

addElement(container, createElement('small green circle '));
addElement(container, createElement('small yellow square'));
addElement(container, createElement('small red square'));
addElement(container, createElement('small yellow circle'));

const filhosDeContainer = container.children;
const todos = document.querySelectorAll('.small');

for (let i = 0; i < todos.length; i += 1) {
    if (todos[i].style.backgroundColor != 'blue') {

        todos[i].style.backgroundColor = 'blue';

    } else if (todos[i].style.backgroundColor == 'blue') {
        todos[i].style.backgroundColor = 'green';

    };
};