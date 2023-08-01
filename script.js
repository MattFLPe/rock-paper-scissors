
let playerScore = 0;
let cpuScore = 0;

// This function is here to randomly generate Rock, Paper or Scissors 

function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];   
}

// This function contains the conditional statements to decide the winner of the round

const scorePlayer = document.querySelector('#player-score')
const scoreCPU = document.querySelector('#cpu-score')

function playRound(playerChoice, computerChoice) {
  const div = document.querySelector('.log')
    if (playerChoice === computerChoice) {
      div.innerHTML = "It's a tie!";
     } else if (playerChoice === "rock" && computerChoice ===  "scissors") {
        playerScore+=1;
        scorePlayer.innerHTML = `Player: ${playerScore}`
        div.innerHTML = "You win! Rock beats Scissors";
     } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore+=1;
        scorePlayer.innerHTML = `Player: ${playerScore}`
        div.innerHTML = "You win! Paper beats Rock";
     } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore+=1;
        scorePlayer.innerHTML = `Player: ${playerScore}`
        div.innerHTML = "You win! Scissors beats Paper";
     } else {
        cpuScore+=1;
        scoreCPU.innerHTML = `CPU: ${cpuScore}`
        div.innerHTML = `You lose! ${computerChoice} beats ${playerChoice}`;
     }

     if(playerScore == 5){
      const winner = document.querySelector('.result')
      winner.textContent = "You are the winner!"
      btnRock.setAttribute("disabled", 1);
      btnPaper.setAttribute("disabled", 1);
      btnScissors.setAttribute("disabled", 1);
   } else if(cpuScore == 5){
      winner = document.querySelector('.result')
      winner.textContent = "Computer is the winner!"
   }
  }
  
 // In order to play the game, users will have to click one of the buttons;
const btnRock = document.querySelector('.btn-rock')
const btnPaper = document.querySelector('.btn-paper')
const btnScissors = document.querySelector('.btn-scissors')

btnRock.addEventListener('click', () => {
playRound("rock", getComputerChoice())
});
btnPaper.addEventListener('click', () => {
playRound("paper", getComputerChoice())
});
btnScissors.addEventListener('click', () => {
playRound("scissors", getComputerChoice())
}); 









 







  



 

