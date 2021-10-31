// let parolaUtente = prompt('Inserisci una parola qualsiasi');
let parolaUtente = 'ailatiditalia';
let esito = isPalindromo(parolaUtente);

console.log(esito);

const palindrom = document.querySelector('.palindrom');
const userChoise = document.querySelector('.user-choise');
const numUtenteHtml = document.querySelector('.num-utente-html');
const numComputerHtml = document.querySelector('.num-computer-html');
const sommaHtml = document.querySelector('.somma-html');
const risultatoHtml = document.querySelector('.risultato-html');

palindrom.innerHTML = esito;


let pdUser = 'pari';
// let pdUser;
// do{
  // pdUser = prompt('Scegli pari o dispari');
// } while (pdUser !== 'pari' && pdUser !== 'dispari') 

let numUtente = 3;
// let numUtente;
// do{
  // numUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
// } while (numUtente < 1 || numUtente > 5 || isNaN(numUtente));

//memorizzo il numero calcolato con la funzione in una variabile
let numeroCPU = calcolaNumero(5,1);

console.log('pd utente',pdUser);
userChoise.innerHTML = `<h2 class="text-white"> Hai scelto <strong> ${pdUser}</strong></h2>`

console.log('num utente', numUtente);
numUtenteHtml.innerHTML = `<h2 class="text-white"> Il tuo numero è <strong> ${numUtente}</strong></h2>`

console.log('numeroRandom',numeroCPU);
numComputerHtml.innerHTML = `<h2 class="text-white"> Il numero del computer è <strong> ${numeroCPU}</strong></h2>`

let sommaNum = numUtente + numeroCPU;

console.log('somma',sommaNum);
sommaHtml.innerHTML = `<h2 class="text-white"> La somma è <strong> ${sommaNum}</strong></h2>`


let risultato = dimmichivince(sommaNum, pdUser);
console.log('questo è il risultato:' ,risultato);
risultatoHtml.innerHTML = `<h2 class="text-white"> <strong> ${risultato}</strong></h2>`


function isPalindromo(parola) {
  for (let i = 0; i < parola.length / 2; i++) {

    if(parola[i] !== parola[parola.length - 1 - i]) {
      console.log(parola[i]);
      return `<h2 class="text-white">La parola <strong> ${parola}</strong> non è palindroma</h2>`;
    }
  }
  return `<h2 class="text-white">La parola <strong> ${parola}</strong> è palindroma</h2>`;
}

//creo la funzione per generare numero random 1-5
function calcolaNumero (max, min){
  let numeroRandom = Math.floor(Math.random()*max + min);
  return numeroRandom;
}

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



