/*const reGexp = (regex) => {

  const paragrafo = 'lorem ipsum adqi mMMPMMZMX ÇM   LMç|mzXç L OFAOJFFJ CZMC[MC[ [OEFJKOAJCXZM [Fodfjazjfsaodf M FOKJDFSDF JK[ASFDKJ [AD';

  const found = paragrafo.match(regex);
  const total = found.length;

console.log(found);
console.log(total);
};
reGexp(/[A-Z]/gi);*/

const rePlace = (phrase) => {

const rePlace = /[aeiou]/g;
const newString = phrase.rePlace('aeiou','!')

  
    console.log(newString);
};
rePlace('xablau');
