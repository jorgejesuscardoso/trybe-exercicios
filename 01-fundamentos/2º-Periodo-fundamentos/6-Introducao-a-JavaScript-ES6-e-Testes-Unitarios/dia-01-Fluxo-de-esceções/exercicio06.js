const studentRegister = (name, age) => {
let msg;
try {
    if (age < 18) {
        msg = 'Ops, infelizmente nesse momento você não pode fazer as aulas.'
    } else {
        msg = `${name}, seja bem-vindo(a) à AuTrybe!`
    }
    if (!name || !age) {
        throw new Error('Todas as informações são necessárias')
    }
    return msg;
} catch (error) {
    return error.message;
}
}
console.log(studentRegister('Jorge', 17));
