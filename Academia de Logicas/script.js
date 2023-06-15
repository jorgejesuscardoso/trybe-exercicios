const combinacoes =[
    [0,1,2], // linha 1
    [3,4,5], // linha 2
    [6,7,8], // linha 3
    [0,3,6], // coluna 1
    [1,4,7], // coluna 2
    [2,5,8], // coluna 3
    [0,4,8], // diagonal esqueda direita
    [2,4,6] // diagonal direita esquerda
  ]
  
const game =['','','','','','','','','',];
const board = document.getElementsByClassName('board')[0];

const creatBoard = () => {
  for (let index = 0; index < game.length; index += 1) {
    const celula = document.createElement('div');
    
    celula.className = 'celula';
    celula.setAttribute('id', index)
    play(celula, updateBoard);

    board.element.appendChild(celula);
  };
};