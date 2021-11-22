// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const choice = prompt('Inserisci pari o dispari');
const num = parseInt(prompt('Inserisci un numero da 1 a 5'));


const pcNum = Math.floor(Math.random()*4 +1);


const sum = num + pcNum;
console.log( 'numero utente', num ,'numero pc', pcNum, 'somma', sum);

if((even(sum) && choice === 'pari') || (!(even(sum)) && choice === 'dispari')){
    alert('hai vinto');
}


function even(a){
    if(a % 2 === 0){
        console.log('somma pari');
        return true;
    }
    console.log('somma dispari');
    return false;
}