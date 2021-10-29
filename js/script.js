let parolaUtente = prompt('Inserisci una parola qualsiasi');
let esito = isPalindromo(parolaUtente);

console.log(esito);

function isPalindromo(parola) {
  for (let i = 0; i < parola.length / 2; i++) {

    if(parola[i] !== parola[parola.length - 1 - i]) {
      // console.log(parola[i]);
      return `la parola ${parola} non è palindroma`;
    }
  }
  return `la parola ${parola} è palindroma`;
}

let pdUser;
do{
  pdUser = prompt('Scegli pari o dispari');
  // let pdUser = 'pari';
} while (pdUser !== 'pari' && pdUser !== 'dispari') 

let numUtente;
do{
  numUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
  // numUtente = 3;
} while (numUtente < 1 || numUtente > 5);

//creo la funzione per generare numero random 1-5
function calcolaNumero (max, min){
  let numeroRandom = Math.floor(Math.random()*max + min);
  return numeroRandom;
}

//memorizzo il numero calcolato in una variabile
let numeroCPU = calcolaNumero(5,1);

console.log('pd utente',pdUser);
console.log('num utente', numUtente);
console.log('numeroRandom',numeroCPU);

let sommaNum = numUtente + numeroCPU;
console.log('somma',sommaNum);

//creo la funziona per stabilire chi vince il pari e dispari in base alla scelta iniziale
function dimmichivince(somma, pdUtente){
  if(somma % 2 === 0 && pdUtente==='pari'){
    return 'HAI VINTO';
  } else if(somma % 2 !== 0 && pdUtente==='dispari'){
    return'HAI VINTO';
  }else{
    return'HAI PERSO';
  }
}

let risultato = dimmichivince(sommaNum, pdUser);
console.log('questo è il risultato:' ,risultato);

