// Create function to randomly generate Rock, Paper or Scissors

let playerScore = 0;
let cpuScore = 0;

function getComputerChoice(){
    let computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]; 
    
}

// Create function to play a single round

function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection) {
        return "It's a tie!";
     } else if (playerSelection === "Rock" && computerSelection === "Scissors") { 
        playerScore+=1;
        return "You win! Rock beats Scissors";
     } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore+=1;
        return "You win! Paper beats Rock";
     } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore+=1;
        return "You win! Scissors beats Paper";
     } else {
        cpuScore+=1;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
     }
     
  }
  


  // Create a function to play five rounds and keep track of the score

function game(){
    for (let i = 0; i < 5; i++){
    const playerSelection = prompt("What is your choice?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    }
}
  game();

  if(playerScore){
    console.log("Player:"+" "+ playerScore +" "+"CPU:"+" "+ cpuScore);
  } else if(cpuScore){
    console.log("Player:"+" "+ playerScore +" "+"CPU:"+" "+ cpuScore);
  }

  if(playerScore > cpuScore){
    alert("Player is the winner!");
} else if(playerScore < cpuScore) {
    alert("Computer is the winner!");
} else {
    alert("It's a tie!");
};