
function getComputerchoice() {
    let randomChoice = Math.random() * 3;    
    if (randomChoice <= 1) { 
        randomChoice = "Rock"
    } else if (randomChoice <= 2) {      // Create a function to return randomly 'Paper', 'Rock' or 'Paper'
        randomChoice = "Scissors"
    } else { 
        randomChoice = "Paper"
    };
    return randomChoice;
}
console.log(getComputerchoice());