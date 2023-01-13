// you can write js here
console.log('exo-3');

const playerInput= prompt("your choice (rock, paper, scissors) ?");
const playerChoice = playerInput.toLowerCase()
const computerChoice = getComputerChoice();

function getPlayerChoice(playerChoice){

    switch(playerChoice){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            return "error";
    }
}

function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function getWinner(playerChoice, computerChoice){

    if(playerChoice === computerChoice){
        return "draw";
    }
    if(playerChoice === "rock"){
        if(computerChoice === "paper"){
            return "Player Won";
        }
        if(computerChoice === "scissors"){
            return "Computer Won";
        }
    }
    if(playerChoice === "paper"){

        if(computerChoice === "rock"){
            return "Player Won";
        }
        if(computerChoice === "scissors"){
            return "Computer Won";
        }
    }
    if(playerChoice === "scissors"){

        if(computerChoice === "rock"){
            return "Computer Won";
        }
        if(computerChoice === "paper"){
            return "Player Won";
        }
    }
    if(playerChoice === "bomb"){
        return "Player Won";
    }
}

console.log(playerChoice);
console.log(computerChoice);
console.log(getWinner(playerChoice, computerChoice));