import './style.css'

const btn = document.querySelector('#ps');
const pp = document.querySelector('.p');
const entrada = document.querySelector('#enter');

btn.addEventListener('click', (event) => {

event.preventDefault();

const moeda = entrada.value.toUpperCase();
const url = `https://api.exchangerate.host/latest?base=${moeda}`

if (!moeda) return alert('Ops.. Você precisa passar uma moeda')

fetch(url).then((response) => response.json().then((data) => {    
    if (Object.keys(data.rates).includes(moeda)) {  
        pp.innerHTML = ' ';
        for (const [moedinha, valor] of Object.entries(data.rates)) {
            const divResult = document.createElement('div');
            divResult.classList = 'coin';
            divResult.textContent = `${moedinha}: ${valor}`;
            pp.appendChild(divResult);

        }
   
    } else {
        alert('Moeda nao existe')
    }
})).catch((err) => alert('Ocorreu um erro na requisição dos dados da API:', err));
})
