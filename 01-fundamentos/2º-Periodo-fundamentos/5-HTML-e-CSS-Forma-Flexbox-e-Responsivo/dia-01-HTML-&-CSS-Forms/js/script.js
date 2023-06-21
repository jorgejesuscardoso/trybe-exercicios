window.onload = () => {
    const butao = document.querySelector('button[type=submit]');
    butao.addEventListener('click', (event) => {
        event.preventDefault();
    })
}