/* eslint-disable no-magic-numbers */
const genNumber = () => Math.round(Math.random() * 10);
/*
const resolv = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = genNumber();
    resolve(randomNumber);
  }, 1000);
});

resolv().then((resolve) => {
  console.log(`O valor resolvido pela promise é: ${resolve}`);
});

const rejec = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = genNumber();
    reject(new Error(`O número ${randomNumber} é inválido:`));
  }, 1000);
});

rejec().catch((error) => {
  console.log(error.message);
}); */

const randomPromise = () => new Promise((resolve, rej) => {
  setTimeout(() => {
    const genNum = genNumber();
    if (genNum % 2 === 0) {
      resolve(genNum);
    } else {
      rej(new Error(`O número ${genNum} é inválido, apenas números pares são válidos!`));
    }
  }, 1000);
});

randomPromise().then((response) => {
  console.log(`Promise resolvida. O número gerado foi: ${response}`);
}).catch((error) => {
  console.log(`Promise rejeitada: ${error.message}`);
});
