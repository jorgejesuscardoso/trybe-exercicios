import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const main = document.querySelector('main');
const btnSenha = document.querySelector('button');
const h2S = document.querySelector('h2');
// const popup = document.querySelector('main');

btnSenha.addEventListener('click', () => {
  const nid = nanoid();
  h2S.innerText = nid;
});

h2S.addEventListener('click', (event) => {
  copy(event.target.textContent);

  const popup = document.createElement('div');
  main.appendChild(popup);
  popup.id = 'popup';

  const alingCl = document.createElement('div');
  popup.appendChild(alingCl);
  alingCl.textContent = 'Senha copiada!';
  alingCl.id = 'alCl';

  const closePopup = document.createElement('button');
  closePopup.id = 'clPopup';
  closePopup.textContent = 'X';
  popup.appendChild(closePopup);

  closePopup.addEventListener('click', () => {
    main.removeChild(popup);
  });
});
