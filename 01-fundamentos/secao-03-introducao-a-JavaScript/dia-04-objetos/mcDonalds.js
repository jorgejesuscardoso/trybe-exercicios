const mcDonalds = {
    bigMac: 45.90,
    bigTasty: 39.99,
    mcFritasMedia: 9.90,
    city: 'Curitiba',
    unit: ['Shopping de Curitiba','Shopping Estação'],
    isDelcicius: true,
    outroObjeto:{
        chave: 'valor',
    }
};

//console.log(mcDonalds);
//console.log(mcDonalds.bigTasty);

//console.log(mcDonalds['bigMac']);
//const chave = 'bigMac';
//console.log(mcDonalds[chave]);

mcDonalds.xablau = 'André olhos de aguia';

//console.log(mcDonalds);

// Métodos para objetos:

//console.log(Object.keys(mcDonalds));
//console.log(Object.values(mcDonalds));
//console.log(Object.entries(mcDonalds));
console.log(Object.keys(mcDonalds.outroObjeto));