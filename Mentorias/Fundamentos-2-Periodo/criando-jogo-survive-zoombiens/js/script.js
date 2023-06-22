const getZombiesAndBullets = () => {
    const zombiesValue = document.getElementById('zombies').value;
    const bulletsValue = document.getElementById('bullets').value;

return {zombies: zombiesValue, bullets: bulletsValue}
};
const submit = () => {

};
const setSubmitBtn = (event) => {
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
   
const gameInfos = getZombiesAndBullets();

  localStorage.setItem('gameInfos', JSON.stringify(gameInfos));
    
  window.location.href = './game.html';
  });
}

window.onload = () => {
    setSubmitBtn();
};
