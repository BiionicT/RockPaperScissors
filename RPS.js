/* Generates Random Number to Get Rock Paper or Scissor for CPU */
let computerSelection = Math.floor(Math.random()*3) + 1;

/* Asks to Get Rock Paper or Scissors for Player */
var playerInput = prompt("Please select rock, paper or scissors");
let playerSelection = playerInput.toLowerCase();

/* Sets Rock Paper or Scissors for CPU based on number generated */
if (computerSelection === 1){
    computerSelection = "rock";  
}
else if (computerSelection === 2){
    computerSelection = "paper";
}
else if (computerSelection === 3){
    computerSelection = "scissors";
}


function game (computerSelection, playerSelection){

/* Check for Tie */     
    if (computerSelection === playerSelection){
        return "It is a tie!";
    }
/* Check for Rock */       
    if (computerSelection === "rock"){
        if (playerSelection === "scissors"){
            return "Computer wins!";
    } else {
        return "Player Wins";
    }
}
/* Check for Paper */  
if (computerSelection === "paper"){
    if (playerSelection === "rock"){
        return "Computer wins!";
} else {
    return "Player Wins";
    }
}
/* Check for Scissor */  
if (computerSelection === "scissors"){
    if (playerSelection === "paper"){
        return "Computer wins!";
} else {
    return "Player Wins";
    }
}
}



game();

console.log("CPU " + computerSelection)
console.log("Player " + playerSelection)

console.log(game(computerSelection, playerSelection))