//1. Creo un array che contenga la lista dei numeri che poi stampo direttamente a schermo.

const numList = document.querySelector('h1');

const numArray = [];

for(let i = 0; i < 5; i++){
  let numRandom = Math.ceil(Math.random() * 20);
  numArray.push(numRandom)
  numList.innerHTML += `${numArray[i]}` + '  ';
}
console.log(numArray)