console.log('JS OK');

/* Traccia:
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedere all'utente una parola

const userWord = prompt('Inserisci una parola.').trim();
console.log(userWord);

// Creare una funzione che indichi se la parola dell'utente è palindroma o meno

function reverseWord(word) {
    let revWord = ''; // Poniamo una variabile che servirà a comporre la nostra parola inversa (stringa)

    //  Poniamo la variabile di partenza 'i' uguale alla lunghezza degli elementi che compognono la parola, trattandola come fosse un'array.

    for (let i = word.length - 1; i >= 0; i--) { // Andiamo a togliere elementi finchè la lunghezza della parola composta non arriva a 0.
        revWord += word.charAt(i); // Andiamo ad aggiungere alla variabile d'appoggio l'elemento che stiamo analizzando in questo momento ( ossia la lettera della parola che analizziamo ). 
        console.log(revWord);
    }
    console.log(word);

    // Risultato

    if (word === revWord) { // Se la parola che analizziamo è uguale a quella che abbiamo ottenuto precedentemente
        console.log('La parola è palindroma.');
    } else {
        console.log('La parola non è palindroma');
    }

    return revWord;
}

reverseWord(userWord);