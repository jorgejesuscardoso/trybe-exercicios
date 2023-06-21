let fralda; // RN, RN+, P, M, G, XG, XXG
let tamanhoBebe = 17;

if (tamanhoBebe <= 4){
    fralda = 'RN';
}else if (tamanhoBebe > 4 && tamanhoBebe <= 6){
    fralda = 'RN+';
}else if(tamanhoBebe > 6 && tamanhoBebe <= 8){
    fralda = 'P';
}else if(tamanhoBebe > 8 && tamanhoBebe <= 10){
    fralda = 'M';
} else if (tamanhoBebe > 10 && tamanhoBebe <= 12){
    fralda = 'G';
}else if(tamanhoBebe > 12 && tamanhoBebe <= 14){
    fralda = 'XG';
} else{
    fralda = 'XXG';
}

console.log(fralda);