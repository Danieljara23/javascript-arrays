// Arrays
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Declarar arrays
// const names = new Array();
// names.push('Daniel');

// Acceso a los elementos de un array
console.log(fruits[0]) // 'Banana'
console.log(fruits[2]) // 'Apple'

// Longitud de un array
console.log(fruits.length); // 4

// Métodos de arrays
const names = [];
names.push('Daniel');
console.log(names);
fruits.pop();
fruits.shift();

//Iteración
let frutas = ['🍎', '🍌', '🍓']
// for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}
// for of
for (let fruta of frutas) {
  console.log(fruta) // imprime el elemento en la posición i
}
//forEach
frutas.forEach(function (fruta, index, originalArray) {
  console.log(fruta) // imprime el elemento en la posición i
})
