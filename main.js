// Il programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
// Dopodiché, il programma deve chiedere all'utente un numero alla volta e verificare se il numero indicato dall'utente è una mina oppure no.
// Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina, il gioco prosegue e il programma chiede all'utente un nuovo numero.
// Alla fine della partita, il programma comunica all'utente il suo punteggio, cioè quanti numeri è riuscito ad inserire prima che il gioco finisse.

// BONUS (facoltativo): all'inizio del gioco, il programma chiede all'utente il livello di difficoltà:
// 0 = l'intervallo di numeri possibili è tra 1 e 100
// 1 = l'intervallo di numeri possibili è tra 1 e 80
// 2 = l'intervallo di numeri possibili è tra 1 e 50
// In ogni caso, le mine sono sempre 16.


var numbersGenerate = [];
var myNumber = [];
var minNumber = 1;
var maxNumber = 100;
var numMine = 16;
var maxChoices = maxNumber - numMine;


// ***creo un ciclo invocando la funzione creata per generare 16 numeri casuali
while (numbersGenerate.length < numMine) {
    var mineRandom = getRndInteger(minNumber, maxNumber);
    // ***verifico se la bomba è gia presente nell'array
    // ***la inserisco solo se non è già presente
    if (numbersGenerate.includes(mineRandom) == false) {
        numbersGenerate.push(mineRandom);
    }
}
console.log(numbersGenerate);

// ***chiedo all'utente un numero
// ***se è presente nella lista delle mine generate il gioco finisce altrimenti il gioco continua fino a che l'utente non iteragisce 84 (100 - bombe) volte
var isFoundMine = false;
do {
    var userChoice = parseInt(prompt('Inserisci un numero'));
    // ***verifico che il numero inserito non sia una bomba invocando la funzione creata
    // ***myNumber.includes(userChoice) == false

    // ***verifico che la mia scelta non sia già presente nell'array delle scelte
    // ***myNumber.includes(useChoice) == false

    var isGameOver = isMine(userChoice, numbersGenerate);
    if (isGameOver == true) {
        isFoundMine = true;
        alert('hai perso, hai totalizzato ' + myNumber.length + 'punti');
    } else if (myNumber.includes(userChoice) == false) {
        myNumber.push(userChoice);
    } else {
        alert('numero duplicato');
    }

} while (isFoundMine == false && myNumber.length < maxChoices);

console.log(myNumber);

if (myNumber.length == maxChoices) {
    alert('hai vinto! Hai totalizzato ' + myNumber.length + ' punti');
}


// !!FUNZIONI!!
// ***creo una funzione per generare numeri casuali da 1 a 100
function getRndInteger(min, max) {
    return  Math.floor(Math.random() * max) + min;
}

// ***creo una funzione per vedere se un elemento è compeso in un altro
function isMine(myChoice, arrayMine) {
    var controll = false;

    if (arrayMine.includes(myChoice) == true) {
        controll = true;
    }
    return controll;
}
