// you can write js here
console.log('exo-3');

const playerInput = prompt("Your choice ( rock, paper, scissors) ?");
let playerChoice = playerInput;

/* Player's block */
function getPlayerChoice(playerInput) {
    //vérifie que le joueur choississent l'une des 3 propositions
    console.log(playerInput.toLowerCase());
}

/* Computer's block */
function getComputerChoice(){
    //génére un choix aléatoire pour le PC
    computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    return computerChoice;
}


/* Result's block */
function findWinner(playerChoice, ComputerChoice){
    if (playerChoice === scissors){
    } else if (playerChoice == ComputerChoice) { // Si le joueur et le PC font le même choix
        console.log("It's a tie!"); 
    } else if (playerChoice == rock) { // Si le joueur choisi "rock"
        if (ComputerChoice == paper) { // et que l'ordinateur choisi "paper"
            console.log("You win!");
        }
    }
}

getPlayerChoice(playerInput);
getComputerChoice();
findWinner(playerChoice, computerChoice);