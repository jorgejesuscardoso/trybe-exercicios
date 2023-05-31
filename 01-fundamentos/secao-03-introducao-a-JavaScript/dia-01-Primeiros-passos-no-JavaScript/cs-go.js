const round = 1; // entree 1-16
const killweapon = 'knife'; // 'AWP', 'Molotov', 'Desert Eagle', 'MP7'
const howin = 'Bomb Explode'; // 'Eliminate', 'Time out', 'Bomb Has Been Planted', 'Bomb has been Defused'
const win = true;
const bombDetonate = false;
const defusedBomb = true;

let money = 0;

if (round === 1 || round === 16){

    money = 800;

}

console.log(money);