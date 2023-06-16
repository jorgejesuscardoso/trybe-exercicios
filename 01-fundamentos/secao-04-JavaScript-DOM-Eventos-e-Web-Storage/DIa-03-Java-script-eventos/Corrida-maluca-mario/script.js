/*  EVENTOS
        são ações que acontecem quando o usuário ou o navegador manipula uma página, 
        permitindo que os elementos de uma página da web mudem dinamicamente.   */

window.onload = () => {
    // Captura de elementos que iremos usar:
    const startBtn = document.getElementById('start-race-btn'); // captura o botao start
    const resetBtn = document.getElementById('reset-race-btn'); // captura o botao reset
    const player1 = document.getElementById('player1');         // captura o elemento player1
    const player2 = document.getElementById('player2');         // captura o elemento player2
    const audioWinner = document.getElementById('audioWinner'); // captura o elemento de audio

player1.style.marginLeft = 0;
player2.style.marginLeft = 0;

startBtn.addEventListener('click' , (evento) => {
    evento.target.innerText = 'Go Go Go!!!';
    });

    const cars = document.querySelectorAll('.car');
    for (let car of cars){
        car.addEventListener('click', (event) => {
            const selected = document.querySelector('.selected')
            if (selected){
                selected.classList.remove('selected');
            }
            event.target.classList.add('selected');
        });
    };

    const personagens = document.querySelectorAll('.playersImages');
    for (let personagem of personagens) {
        personagem.addEventListener('click', (event) => {
            const selected = document.querySelector('.selected');
            if (selected){
                selected.style.backgroundImage = (`url(${event.target.src})`);
                selected.classList.remove('selected');
            };
        });
    };

};