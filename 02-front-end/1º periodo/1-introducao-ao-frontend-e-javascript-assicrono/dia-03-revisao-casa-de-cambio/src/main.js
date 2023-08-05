import './style.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import '@sweetalert2/theme-dark/dark.scss';

const btn = document.querySelector('#ps');
const pp = document.querySelector('.p');
const entrada = document.querySelector('#enter');
const coin = document.querySelector('#v1');

btn.addEventListener('click', (event) => {

event.preventDefault();

const moeda = entrada.value.toUpperCase();
const url = `https://api.exchangerate.host/latest?base=${moeda}`

if (!moeda) return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Você precisa passar uma moeda!'
  })

fetch(url).then((response) => response.json().then((data) => {    
    if (Object.keys(data.rates).includes(moeda)) {  
        coin.textContent = moeda;
        pp.innerHTML = ' ';
        for (const [moedinha, valor] of Object.entries(data.rates)) {
            const divResult = document.createElement('div');
            divResult.classList = 'coin';
            divResult.innerHTML = `🪙<span style="color: white">${moedinha}:</span> <span style="color: gold">${valor}</span>`;
            
            pp.appendChild(divResult);

        }
   
    } else {
     Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Moeda não existe!'
          })
    }
})).catch((err) => Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Ocorreu um erro na requisição dos dados da API:'
  },err));
})
