const isStarCorrect = () => {
    const gameInfos = JSON.parse(localStorage.getItem('gameInfos'));
    
    if (!gameInfos) {
        window.alert('Não vem não, tem que preencher o formulario')
        window.location.href = 'index.html';
    };
};

window,onload = () => {
    isStarCorrect();
};