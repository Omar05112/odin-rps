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

function playRound(humanSelection, computerSelection){
    if (humanSelection="paper" && computerSelection=="rock"){
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }

    else if (humanSelection=="paper" && computerSelection=="scissors"){
        console.log("You lose! Scissors beat Paper.");
    }

    else if (humanSelection=="rock" && computerSelection=="scissors"){
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }

    else if (humanSelection=="rock" && computerSelection=="paper"){
        console.log("You lose! Paper beats Rock.");
        humanScore++;
    }

    else if (humanSelection=="scissors" && computerSelection=="paper"){
        console.log("You win! Scissors beat Paper.");
        humanScore++;
    }

    else if (humanSelection=="scissors" && computerSelection=="rock"){
        console.log("You lose! Rock beats Scissors.");
        humanScore++;
    }
    else console.log("Draw, kinda insane actually.");


}

playRound();






//console.log(humanSelection);
//console.log(computerSelection);