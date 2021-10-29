let parolaUtente = prompt('Inserisci una parola qualsiasi');
let risultato = isPalindromo(parolaUtente);

console.log(risultato);

function isPalindromo(parola) {
  for (let i = 0; i < parola.length / 2; i++) {

    if(parola[i] !== parola[parola.length - 1 - i]) {
      console.log(parola[i]);
      return 'la parola non è palindroma';
    }
  }
  return 'la parola è palindroma';
}

//INIZIO PARI E DISPARI ***********************************************************************************

let pdUtente;
do{
  pdUtente = prompt('Scegli pari o dispari');
}while (pdUtente !== 'pari' && pdUtente !== 'dispari') 

let numUtente;
do{
  numUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
}while (numUtente < 1 || numUtente > 5);



function numeroCPU(max, min){
  numeroRandom = Math.floor(Math.random()*max + min);
}

let risultatoFinale = parDis(pdUtente, numUtente, numeroCPU(5,1));

console.log("hai scelto", pdUtente);

function parDis(utentePD, utenteNum, numCPU ){

  // let somma = parseInt(utenteNum) + parseInt(numCPU);
  // console.log('utenteNum', utenteNum);
  // console.log('numCPU', numCPU);

    if((utenteNum + numCPU) % 2 === 0){
      if(utentePD === "pari")
      return "hai perso" ;
    }else {
      return "hai vinto"; 
    }

  }


console.log('numero del computer: ',numeroRandom);

console.log('il numero che hai scelto: ', numUtente);

console.log('la somma è: ', parseInt(numeroRandom)+parseInt(numUtente));

console.log("risultato", risultatoFinale);
