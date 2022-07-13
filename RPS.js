/* Generates Random Number to Get Rock Paper or Scissor for CPU */
let computerSelect = Math.floor(Math.random()*3) + 1;
console.log (computerSelect)

/* Asks to Get Rock Paper or Scissors for Player */
var playerSelect = prompt("Please select rock, paper or scissors");

function computerPlay (){
if (computerSelect === 1){
    computerSelect ="rock";  
}
else if (computerSelect === 2){
    computerSelect ="paper";
}
else if (computerSelect === 3){
    computerSelect ="scissors";
}
}


computerPlay();

console.log(computerSelect)
console.log(playerSelect)