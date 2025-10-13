let humanScore=0;
let computerScore=0;
let gameOver=false;

function getComputerChoice(){
    let rpsvalue = Math.floor(Math.random() * 3) + 1;
    if (rpsvalue==1){
        return "rock";
    }
    else if (rpsvalue==2){
        return "paper";
    }
    else{
        return "scissors";
    }
  }

  

// function getHumanChoice(){
//     let humanrpschoice= prompt("what's your choice?")
//     if(humanrpschoice.toLowerCase()=="rock"){
//         return "rock";
//     }

//     else if(humanrpschoice.toLowerCase()=="paper"){
//         return "paper";
//     }
    
//     else if(humanrpschoice.toLowerCase()=="scissors"){
//         return "scissors";
//     }     
// }
const rockBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const paperBtn = document.createElement("button");

rockBtn.textContent = "Rock";
scissorsBtn.textContent = "Scissors";
paperBtn.textContent = "Paper";


rockBtn.addEventListener("click", function() {
  playRound("rock", getComputerChoice());
});
scissorsBtn.addEventListener("click", function() {
  playRound("scissors", getComputerChoice());
});
paperBtn.addEventListener("click", function() {
  playRound("paper", getComputerChoice());
});

document.body.appendChild(rockBtn);
document.body.appendChild(scissorsBtn);
document.body.appendChild(paperBtn);

const resulte = document.createElement("div");
document.body.appendChild(resulte);

const runningScore = document.createElement("div");
document.body.appendChild(runningScore);

const winorlose= document.createElement("div");
document.body.appendChild(winorlose);

 function playRound(humanChoice, computerChoice){

    if (gameOver){
    humanScore=0;
    computerScore=0;
    winorlose.textContent="";
    runningScore.textContent="";
    resulte.textContent="";
    gameOver=false;
  }
   
        if (humanChoice==="paper" && computerChoice==="rock"){
            resulte.textContent = "You win! Paper beats Rock.";
            humanScore++;
        }

        else if (humanChoice==="paper" && computerChoice==="scissors"){
            resulte.textContent = "You lose! Scissors beat Paper.";
            computerScore++;
        }

        else if (humanChoice==="rock" && computerChoice==="scissors"){
            resulte.textContent = "You win! Rock beats Scissors.";
            humanScore++;
        }

        else if (humanChoice==="rock" && computerChoice==="paper"){
            resulte.textContent = "You lose! Paper beats Rock.";
            computerScore++;
        }

        else if (humanChoice==="scissors" && computerChoice==="paper"){
            resulte.textContent = "You win! Scissors beat Paper.";
            humanScore++;
        }

        else if (humanChoice==="scissors" && computerChoice==="rock"){
            resulte.textContent = "You lose! Rock beats Scissors.";
            computerScore++;
        }
        else{resulte.textContent = "Draw, kinda insane actually.";}
        runningScore.textContent = "Current Score: "+humanScore+" for the player and "+computerScore+" for the computer.";

        

        if(humanScore===5){
            winorlose.textContent="You win!";
            gameOver=true;
            
        }
        else if (computerScore===5){
            winorlose.textContent="You lose!";
            computerScore=0;
            humanScore=0;
            gameOver=true;
        }
        

}


