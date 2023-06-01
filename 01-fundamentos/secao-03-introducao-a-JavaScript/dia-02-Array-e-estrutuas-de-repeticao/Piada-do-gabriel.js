//Mãe: "Gabriel meu filho querido, faz um favor pra sua mãe, vai no supermercado e traz um leite, ah!! e se tiver ovos, tragam seis"

//A few minutes later

//Gabriel: "Mamãe querida aqui estão seus leites!"
//Mãe: "Mas por que você trouxe seis leites, menino?"
//Gabriel: "Porque tinha leite!"

//debugging

//Oquê o Gabriel entendeu?

/*gabriel.goToMarket();

if (eggs.length > 0){
    gabriel.getmilk(6);
} else {
    gabriel.getMilk(1);
}

//Oquê era para fazer? Não totalmente funcional por quê pode ser que tenha menos que 6 ovos

gabriel.goToMarket();
gabriel.getMilk(1);

if (eggs.length > 0){
    gabriel.getEgg(6);
}

//Totalmente funcional

gabriel.goToMarket();
gabriel.getMilk(1);

if (eggs.length >= 6){
    gabriel.getEgg(6);
}

//Totalmente funcional variação 1 (abrir a porta)

gabriel.openDoor();
gabriel.goToMarket();
gabriel.getMilk(1);

if (eggs.length >= 6){
    gabriel.getEgg(6);
}

//Totalmente funcional variação 2 (abrir a porta, pegar o endereço do mercado)

gabriel.openDoor();

let marketAdress = findMarketAdress();

gabriel.goToMarket();
gabriel.getMilk(1);

if (eggs.length >= 6){
    gabriel.getEgg(6);
}*/

//Totalmente funcional variação 3 (abrir a porta, pegar o endereço do mercado, pega o leite se houver leite)


gabriel.openDoor();

let marketAdress = findMarketAdress();

gabriel.goToMarket();

if  (milks.length >= 1){

gabriel.getMilk(1);

}

if (eggs.length >= 6){

    gabriel.getEgg(6);

}
