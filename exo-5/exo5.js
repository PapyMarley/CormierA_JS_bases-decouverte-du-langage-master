// you can write js here

console.log('exo-5');

const input = prompt('Please enter your phrase: '); // step 1
const vowels = ["A", "E", "I", "O", "U", "Y"]; // step 2
let resultArray = new Array; // step 3
const upperInput = input.toUpperCase(); 
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperInput.indexOf(""); // step 8



for (let i = upperInput.length - 1; i >= 0; i -= 1) { // step 4 et 6
    for (let j = vowels.length - 1; j >= 0; j -= 1){
        if (upperInput[i] === vowels[j]){
            console.log(`${i}. ${upperInput[i]}`);
            resultArray.push(`${upperInput[i]}`); // step 7
        }        
    }    
}



console.log(resultArray); 
