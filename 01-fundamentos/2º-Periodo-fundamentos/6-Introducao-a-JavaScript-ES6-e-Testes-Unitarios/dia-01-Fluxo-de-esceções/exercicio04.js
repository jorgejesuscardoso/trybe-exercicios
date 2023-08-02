const media = (nan) => {
    try {
        checkNumber(parseInt(nan))

        return a + b + c + d;
    } catch (error) {
       return error.message;
    }

    
}

const checkNumber = (d) => {
    if (typeof d !== 'number') { 
        throw new Error('O valor deve ser numérico!')
    }
}
console.log(media(1, 3, 41, '1'));
