

function getComputerChoice(){

    var choice = Math.floor(Math.random() * 3) +1;

    return choice;
}
function getPlayerChoice(){
    
    var input = prompt("Rock, paper or scissors?");
    input = input.toLowerCase();
    var choice = Math.floor(Math.random() * 3);
    switch(input){
        case "rock":
            choice = 1;
        break;
        case "paper":
            choice = 2;
        break;
        case "scissors":
            choice = 3;
        break;
        default:
        console.log("error in user input. randomizing...")
    }
        return choice;
}

function choiceToString(choice)
{
    if(choice === 1)
    {
        return "rock";
    }
    else if(choice === 2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){

    

    console.log("Player selected: " + choiceToString(playerSelection));
    console.log("Computer selected: " + choiceToString(computerSelection));

    if(playerSelection === computerSelection)
    {
        console.log("TIE!");
    }
    else if(playerSelection == 1){
        if(computerSelection == 2)
        {
            console.log("Computer wins!");
        }
        else
        {
            console.log("Player wins!");
        }
    }
    else if(playerSelection == 2){
        if(computerSelection == 3)
        {
            console.log("Computer wins!");
        }
        else
        {
            console.log("Player wins!");
        }
    }
    else if(playerSelection == 3){
        if(computerSelection == 1)
        {
            console.log("Computer wins!");
        }
        else
        {
            console.log("Player wins!");
        }
    }
}

function fiveRounds()
{
    for(var i = 0; i < 5; i++)
    {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        
        playRound(playerSelection, computerSelection);
    }
    
}
fiveRounds();