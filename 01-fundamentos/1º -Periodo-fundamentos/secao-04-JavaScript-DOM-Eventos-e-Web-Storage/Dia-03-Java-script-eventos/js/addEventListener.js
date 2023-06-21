let clickp = document.getElementById("clicar");

clickp.addEventListener("click", recebeClick);

function recebeClick (eventoDeOrigem) {
    console.log(eventoDeOrigem.targe);
    console.log(eventoDeOrigem.type);
};

let mouseOverLeaveButton = document.getElementById("mou-over-leave");

mouseOverLeaveButton.addEventListener('mouseover', mouseEmCima);
mouseOverLeaveButton.addEventListener('mouseleave', mousesaiu);

function mouseEmCima (evento1) {
    console.log('Mouse passou em riba');
    console.log(evento1.targe);
};

function mousesaiu (evento2) {
    console.log('Mouse se foi!');
    console.log(evento2.targe);
};