// CS - Calculo de Dinheiro

const round = 1; // entre 1-16
const killweapon = 'knife'; // 'AWP', 'Molotov', 'Desert Eagle', 'MP7', 'Knife'
const howin = 'Bomb Explode'; // 'Eliminate', 'Time Out', 'Bomb Has Been Planted', 'Bomb has been Defused'
const win = true;
const bombDetonate = false;
const defusedBomb = true;

let money = 0;

if (round === 1 || round === 16){

    money = 800;

} else if ( win === true && (howin === 'Eliminate' || howin === 'Time Out')){

    money += 3250;

}

console.log(money);