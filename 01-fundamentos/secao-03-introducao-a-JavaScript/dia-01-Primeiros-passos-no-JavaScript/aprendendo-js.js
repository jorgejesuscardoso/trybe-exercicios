//const nomePessoa= 'Jorge';

//  tipos primitivos  -  tipagem dinamica
//  string (''), number (01), boolean (true/false), undefined (nao definido), functio (função), object (null ou objeto)

/*
if (true){

    var xablau = 'Vaza o scopo';

}
 
console.log(xablau);

*/
/*

//  operadores:

//  atribuição =
let comparacao = 3;
let comparacao1 = "3";

//  aritiméticos + - * / ** %
console.log(3**2);
console.log(3/2);
console.log(3+2);
console.log(3-2);
console.log(3*2);
console.log(3%2);

//  comparação == === > < >= <=

console.log(comparacao == comparacao1); //  vẽ se o valor é igual
console.log(comparacao === comparacao1); // vẽ se o valor é estritamente igual, tanto o valor quanto a tipagem,

//  Operadores lógico
//  usados com valores booleanos (lógicos)

// && significa AND (exemplo, isso 'e' aquilo) precisa que ambas sejam iguais
// || significa OR (exemplo, 'ou' isso 'ou' aquilo) precisa que pelomenos uma seja true

// ! NOT,significa negação, inverte o valor booleano

//exemplo.

let negacao = true;

console.log(!negacao);
*/

// Estruturas Condicionais: if/else

let num1 = 2;
let num2 = 2;

if (num1 > num2)// Se for verdadeiro entra no if
{ // False, nao entre no scopo do if
    console.log('Num1 venceu');
} else if(num1 < num2)// Senão não for verdadeiro entra no else
{ // True, entra no scopo do if
    console.log('Num2 venceu');
} else {
    console.log('Empate');
}