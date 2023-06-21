localStorage.setItem('filme', 'The Lion King');
let recoveryLocalStorageString = localStorage.getItem('filme');

console.log(recoveryLocalStorageString);
console.log(typeof recoveryLocalStorageString);

// ---

localStorage.setItem('number', 10);

let recoveryLocalStoragenumber = JSON.parse(localStorage.getItem('number'));

console.log(recoveryLocalStoragenumber);
console.log(typeof recoveryLocalStoragenumber);


// ---

const favoriteMovie = {
    filme: 'madagascar',
}

localStorage.setItem('objeto', JSON.stringify(favoriteMovie));
let recoveryLocalStorageObject = JSON.parse(localStorage.getItem('objeto'));

console.log(recoveryLocalStorageObject);
console.log(typeof recoveryLocalStorageObject);