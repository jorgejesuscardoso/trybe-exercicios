const verificaValores = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Erro! os valores precisam ser numéricos.')
    }
}

const soma = (a, b) => {
    try {
        verificaValores(a, b);
        return a + b;
    } catch (error) {
        return error.message;
    }
}
console.log(soma(5, "5"));

console.log(soma(2, 5));
