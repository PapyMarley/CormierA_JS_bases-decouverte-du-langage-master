// you can write js here
console.log('hello from file');

let kelvins = prompt("Bonjour, quel est la température aujourd'hui ?")

const kelvins = 294; // initialise la variable "kelvins" à la valeur 294
const celsius = kelvins - 273; // initialise la variable "celsius" qui converti la valeur "kelvin" en valeur "celsius"
let fahrenheits = celsius * (9/5) + 32 // initialise la variable "fahrenheits" et converti la valeur "celsius" en valeur "fahrenheits"

fahrenheits = Math.floor(fahrenheits);

console.log(fahrenheits);