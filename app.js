const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'purple', 'black', 'grey']
const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click', changeColor);

function changeColor () {
    body.style.background = colors[Math.floor(Math.random() * colors.length)]
};

