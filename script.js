// 1. Write the logic to get the computer choice
// write a function that randomly returns “rock”, “paper” or “scissors”
// 1) Create a new function named getComputerChoice
// 2) Write the code so that getComputerChoice function will randomly return one of three options => rock, paper, scissors
function getComputerChoice() {
    let comChoice = 0;
    comChoice = Math.floor(Math.random() * 3) + 1;
    
    if(comChoice === 1) {
        return "rock";
    } else if(comChoice === 2) {
        return "paper";
    } else if(comChoice === 3) {
        return "scissors";
    }
}
// 3) Test that my function returns what I expect
console.log(getComputerChoice());

// 2. Write the logic to get the human choice
// 1) Create a new function named getHumanChoice
// 2) Write the code so that the function will return one of three options based on what the user inputs

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice: ");
    return humanChoice;
}

console.log(getHumanChoice());