console.log('JS OK');

/* Traccia
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// Chiediamo all'utente di scegliere pari o dispari e di scegliere un numero da 1 a 5.

const userChoise = prompt('Scegli pari o dispari.').trim();
console.log(userChoise);
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5.', '1').trim());
console.log(userNumber);

function getRandomNumber(min, max) { //* Funzione che permette di generare un numero random compreso tra due estremi
    max++;
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

const pcNumber = getRandomNumber(1, 5); // Generiamo un numero random compreso tra 1 e 5.
console.log(pcNumber);

let sum = 0; // Variabile d'appoggio dove andremo a sommare i numeri.

sum = pcNumber + userNumber; //Calcoliamo la somma dei numeri dell'utente e del pc
console.log(sum);

// Funzione che permette di capire se un numero è pari o dispari

function isEven(number) { // E' vera (è pari) la variabile che sto analizzando?
    return number % 2 === 0 ? true : false; // Se la variabile che  analizzo divisa per 2 da resto zero allora è vera. Altrimenti è Falsa.
}

isEven(sum);

// Dichiariamo il vincitore

if (sum == true && userChoise == 'pari') {
    console.log('La somma dei numeri è pari, hai vinto!');
} else if (sum == false && userChoise == 'pari') {
    console.log('La somma dei numeri è dispari, hai perso!');
} else if (sum == true && userChoise == 'disapari') {
    console.log('La somma dei numeri è pari, hai perso!');
} else {
    console.log('La somma dei numeri è dispari, hai vinto!');
}