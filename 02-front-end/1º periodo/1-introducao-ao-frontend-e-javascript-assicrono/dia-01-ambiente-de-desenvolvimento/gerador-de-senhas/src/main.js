import { nanoid } from "nanoid";
import copy from "clipboard-copy";
const btnSenha = document.querySelector('button');
const h2S = document.querySelector('h2');

btnSenha.addEventListener('click', () => {
    const nid = nanoid();
    h2S.innerText = nid;
});

h2S.addEventListener('click', (event) => {
    copy(event.target.textContent);
    alert('Senha copiada!')
});