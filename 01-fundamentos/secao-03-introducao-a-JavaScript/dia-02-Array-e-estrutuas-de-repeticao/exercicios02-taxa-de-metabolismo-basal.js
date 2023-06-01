// 02 - Taxa de Metabólica Basal

// passo a passo

//obeter as informações da pessoa
//armazenar as iformações em diferentes variáveis
//armazenar o resultado em uma variavel
//verificar o sexo da pessoa
//dependendo do sexo utilizar os dados em uma das fórmular
//exibir o resultado

const age1 = 32;
const sex = 'M';
const weight = 194;
const height = 187;

let result;
let seuSex;

if(sex === 'M'){
    result = (height * 6.25) + (weight *9.99) - (age1 * 4.92) + 5;
    seuSex = 'Olá garotão ';
}else{
    result = (height * 6.25) + (weight *9.99) - (age1 * 4.92)  + 161;
    seuSex = 'Olá gatona ';
}

console.log(seuSex + 'o seu metabolismo basal é de ' + result);