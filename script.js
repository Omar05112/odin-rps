let computerSelection = getComputerChoice();
let humanScore=0;
let computerScore=0;
let humanSelection = getHumanChoice();






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

function getHumanChoice(){
    let humanrpschoice= prompt("what's your choice?")
    if(humanrpschoice.toLowerCase()=="rock"){
        return "rock";
    }

    else if(humanrpschoice.toLowerCase()=="paper"){
        return "paper";
    }
    
    else if(humanrpschoice.toLowerCase()=="scissors"){
        return "scissors";
    } 




    
}



   


    
function playGame(){
    
 function playRound(humanChoice, computerChoice){
        if (humanChoice==="paper" && computerChoice==="rock"){
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }

        else if (humanChoice==="paper" && computerChoice==="scissors"){
            console.log("You lose! Scissors beat Paper.");
            computerScore++;
        }

        else if (humanChoice==="rock" && computerChoice==="scissors"){
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }

        else if (humanChoice==="rock" && computerChoice==="paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }

        else if (humanChoice==="scissors" && computerChoice==="paper"){
            console.log("You win! Scissors beat Paper.");
            humanScore++;
        }

        else if (humanChoice==="scissors" && computerChoice==="rock"){
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        }
        else console.log("Draw, kinda insane actually.");
    }


    for(let roundCount=0; roundCount>4; roundCount++){
        humanSelection;
        computerSelection;
        playRound(humanSelection, computerSelection);
    }
    if(humanScore>computerScore){
        console.log("You win!");
    }
    else if (humanScore<computerScore){
        console.log("You lose!");
    }
        return "Game over!";
    
}






console.log(humanSelection);
console.log(computerSelection);
