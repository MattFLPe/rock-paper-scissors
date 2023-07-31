
let playerScore = 0;
let cpuScore = 0;

// Create function to randomly generate Rock, Paper or Scissors

function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]; 
    
}

// Create a function to play a single round

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
     } else if (playerChoice === "rock" && computerChoice ===  "scissors") { 
        playerScore+=1;
        return "You win! Rock beats Scissors";
     } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore+=1;
        return "You win! Paper beats Rock";
     } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore+=1;
        return "You win! Scissors beats Paper";
     } else {
        cpuScore+=1;
        return `You lose! ${computerChoice} beats ${playerChoice}`;
     }
     
  }
  
 // In order to play the game, users will have to click one of the buttons;
const scorePlayer = document.querySelector('#player-score')
const scoreCPU = document.querySelector('#cpu-score')
const btnRock = document.querySelector('.btn-rock')
const btnPaper = document.querySelector('.btn-paper')
const btnScissors = document.querySelector('.btn-scissors')

btnRock.addEventListener('click', () => {
console.log(playRound("rock", getComputerChoice()))
scorePlayer.innerHTML = `Player: ${playerScore}`
scoreCPU.innerHTML = `CPU: ${cpuScore}`
});

btnPaper.addEventListener('click', () => {
console.log(playRound("paper", getComputerChoice()))
scorePlayer.innerHTML = `Player: ${playerScore}`
scoreCPU.innerHTML = `CPU: ${cpuScore}`
});

btnScissors.addEventListener('click', () => {
console.log(playRound("scissors", getComputerChoice()))
scorePlayer.innerHTML = `Player: ${playerScore}`
scoreCPU.innerHTML = `CPU: ${cpuScore}`
}); 






 







  



 

