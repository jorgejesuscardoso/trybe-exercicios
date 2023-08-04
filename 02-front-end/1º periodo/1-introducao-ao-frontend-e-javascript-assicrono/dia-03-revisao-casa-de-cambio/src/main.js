import './style.css'

const btn = document.querySelector('#ps');
const pp = document.querySelector('p');
const entrada = document.querySelector('#enter');

btn.addEventListener('click', (event) => {

event.preventDefault();

const moeda = entrada.value.toUpperCase();
const url = `https://api.exchangerate.host/latest?base=${moeda}`

if (!moeda) return alert('Ops.. Você precisa passar uma moeda')

fetch(url).then((response) => response.json().then((data) => {    
    if (Object.keys(data.rates).includes(moeda)) {  

    pp.innerText = Object.entries(data.rates)
    } else {
        alert('Moeda nao existe')
    }
}
));

})


