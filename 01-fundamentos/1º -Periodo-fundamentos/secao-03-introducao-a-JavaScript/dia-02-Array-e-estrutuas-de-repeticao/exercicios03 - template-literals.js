const product = 'iPhone 32';
const price = (58000).toFixed(2);
const discount = 10;

const message = 
`Produto: ${product}
Preço: R$${price}
Desconto: ${discount}%
Preço com desconto: R$${(price - (price * (discount / 100))).toFixed(2)}`;


console.log(message);