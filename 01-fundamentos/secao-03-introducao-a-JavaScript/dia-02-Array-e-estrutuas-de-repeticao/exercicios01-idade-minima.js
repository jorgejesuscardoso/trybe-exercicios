// 1 - descubra a idade minima entre 3 pessoas

//  passo a passo

// 1. descobrira as idades
// 2. armazenar em diferentes variáveis
// 3. criar variável para armazenar idade minima
// 4. comparar as idades entre si
// 5. ao descobrir a menor idade armazenar na variável
// 6. exibir o resultado na tela
 
// mão na massa

// 1. descobrira as idades

// marina: 27 anos, Silvia: 18 anos e iza 63 anos

// 2. armazenar em diferentes variáveis
const marinaAge = 27;
const silviaAge = 18;
const izaAge = 63;

// 3. criar variável para armazenar idade minima

let minAge;
let minAgeName;

// 4. comparar as idades entre si

if (marinaAge < silviaAge && marinaAge < izaAge){
    minAge = marinaAge;
    minAgeName = 'Marina';
} else if (silviaAge < marinaAge && silviaAge < izaAge){
    minAge = silviaAge;
    minAgeName = 'Silvia';
} else{
    minAge = izaAge
    minAgeName = 'Iza';
}

console.log(minAgeName + " é a pessoa com a menor idade e tem " + minAge + " de idade");

// Template literals