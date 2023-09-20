//1. Creo un array che contenga la lista dei numeri che poi stampo direttamente a schermo.

//2. Mostra a video la lista di numeri solo per 5 secondi.

//3. Chiedere all'user di inserire i numeri che ricorda.

//4. Confrontare i numeri inseriti dall'utente con quelli generati in partenza.

//5. Stampare a video i risultati creando un'ulteriore funzione.

const numList = document.querySelector('h1');
const numRandomArray = [];
const numUserArray = [];
const numMatchArray = [];
let numMatch = 0;
let message = document.querySelector('span');


const whatchTime = 5;
let counter = whatchTime;

for(let i = 0; i < 5; i++){
  let numRandom = Math.ceil(Math.random() * 20);
  numRandomArray.push(numRandom)
  numList.innerHTML += `${numRandomArray[i]}` + '  ';
}
console.log(numRandomArray)

watch();
const myTimeout = setTimeout(answer, 5500);

// FUNZIONI

function watch() {
  const clock = setInterval(function() {
    counter--;
    if (counter === 0) {
      numList.classList.add('d-none')
      clearInterval(clock)
    }
  }, 1000)
}

function answer() {
  for(let i = 0; i < 5; i++){
    let insertNum = parseInt(prompt('Inserisci i numeri che ricordi'));    numUserArray.push(insertNum);
  }

  match();
}

function match() {
  for(let i = 0; i < numUserArray.length; i++)
    if(numRandomArray.includes(numUserArray[i])) {
      numMatchArray.push(numUserArray[i]);
      numMatch++
    }
    console.log(numMatchArray);
    console.log(numMatch)
}