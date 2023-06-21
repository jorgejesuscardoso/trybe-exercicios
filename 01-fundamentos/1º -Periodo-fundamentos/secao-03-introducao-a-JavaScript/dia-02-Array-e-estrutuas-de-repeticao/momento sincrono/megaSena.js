// Teste inicial

const numerosSorteados = [];
const meuJogo = [8,30,9,83,32,56];

for (let repetecao = 0; repetecao < 6; repetecao += 1){

    const numeroAleatorio = Math.floor(Math.random()*60);

    if (!numerosSorteados.includes(numeroAleatorio)){
    numerosSorteados.push(numeroAleatorio) 

    } else{
        repetecao -= 1;
    }
}

let numrosAcertei = [];
let numerosAcertos = 0;

for (let indexSorteado = 0; indexSorteado < numerosSorteados.length; indexSorteado += 1){
  for (let indexMeuJogo = 0; indexMeuJogo < meuJogo.length; indexMeuJogo += 1){
        if (numerosSorteados[indexSorteado] === meuJogo[indexMeuJogo]){
            numerosAcertos += 1;
            numrosAcertei.push(numerosSorteados[indexSorteado]);
        }

    }
}

console.log(`Meu jogo: ${meuJogo}`);
console.log(`Numeros sorteados: ${numerosSorteados}`);
console.log(`Numeros de Acertos: ${numerosAcertos}`);
console.log(`Numeros que acertei: ${numrosAcertei}`)

