const verifyNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('Os valores devem ser númericos')
    }
}

const sum = (value1,value2) =>{
   try {
    verifyNumber(value1, value2);
    return value1 + value2;
   } catch (error) {
    return error.message;
   }
};
console.log(sum(2, '3'));
