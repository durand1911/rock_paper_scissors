// 1. Write the logic to get the computer choice
// write a function that randomly returns “rock”, “paper” or “scissors”
// 1) Create a new function named getComputerChoice
// 2) Write the code so that getComputerChoice function will randomly return one of three options => rock, paper, scissors
function getComputerChoice() {
    let result = 0;
    result = Math.floor(Math.random() * 3) + 1;
    
    if(result === 1) {
        return "rock";
    } else if(result === 2) {
        return "paper";
    } else if(result === 3) {
        return "scissors";
    }
}
// 3) Test that my function returns what I expect
console.log(getComputerChoice());