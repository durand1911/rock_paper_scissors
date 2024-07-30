// 1. Write the logic to get the computer choice
// write a function that randomly returns “rock”, “paper” or “scissors”
// 1) Create a new function named getComputerChoice
// 2) Write the code so that getComputerChoice function will randomly return one of three options => rock, paper, scissors
function getComputerChoice() {
    let computerChoice = 0;
    computerChoice = Math.floor(Math.random() * 3) + 1;
    
    if(computerChoice === 1) {
        return "rock";
    } else if(computerChoice === 2) {
        return "paper";
    } else if(computerChoice === 3) {
        return "scissors";
    }
}
// 3) Test that my function returns what I expect
//console.log(getComputerChoice());

// 2. Write the logic to get the human choice
// 1) Create a new function named getHumanChoice
// 2) Write the code so that the function will return one of three options based on what the user inputs

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice: ");
    return humanChoice;
}
// 3) Test that my function returns what I expect
// console.log(getHumanChoice());

// 3. Declare the players score variables
// 1) Create two variables named humanScore and computerScore in the global scope
// 2) Initialize those variables with the value of 0
let humanScore = 0;
let computerScore = 0;

// 4. Write the logic to play a single round
// 1) create a new function named playRound
// 2) define two parameter, humanChoice and computerChoice
// 3) make the function's parameter humanChoice case-insensitive
// 4) write the code for the playRound function
// 5) increment both humanScore and computerScore every single game
function playRound(humanChoice, computerChoice) {
       
    let message;
    
    if(humanChoice === "rock" && computerChoice === "paper") {
        message = "You lose! Paper beats Rock";
        computerScore += 1;
    } else if(humanChoice === "rock" && computerChoice === "scissors") {
        message = "You win! Rock beats Scissors";
        humanScore += 1;
    } else if(humanChoice === "paper" && computerChoice === "rock") {
        message = "You win! Paper beats Rock";
        humanScore += 1;
    } else if(humanChoice === "paper" && computerChoice === "scissors") {
        message = "You lose! Scissors beats Paper";
        computerScore += 1;
    } else if(humanChoice === "scissors" && computerChoice === "rock") {
        message = "You lose! Rock beats Scissors";
        computerScore += 1;
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        message = "You win! Scissors beats Paper";
        humanScore += 1;
    } else {
        message = "It’s a tie";
    }
    console.log(message);
}

console.log(computerChoice);
console.log(humanChoice);

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);