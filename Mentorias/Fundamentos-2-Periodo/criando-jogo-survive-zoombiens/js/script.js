const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = './game.html';
});
