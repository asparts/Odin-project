
window.onload = function (){

    var rockBtn = document.getElementById('rock-button');
    var paperBtn = document.getElementById('paper-button');
    var scissorsBtn = document.getElementById('scissors-button');

    rockBtn.onclick = function(){
        playRound(1)
    };
    paperBtn.onclick = function(){
        playRound(2)
    };
    scissorsBtn.onclick = function(){
        playRound(3)
    };
}
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

function playRound(playerSelection){

    var computerSelection = getComputerChoice();

    var results = document.getElementById('results-text');
    var computer_score = document.getElementById('computer-score');
    var comp_score_int = parseInt(computer_score.innerText);
    var player_score = document.getElementById('player-score');
    var play_score_int = parseInt(player_score.innerText);

    results.innerText = "Player selected: " + choiceToString(playerSelection) + "\nComputer selected: " + choiceToString(computerSelection);

    if(playerSelection === computerSelection)
    {
        results.innerText += "\nTIE!"
    }
    else if(playerSelection == 1){
        if(computerSelection == 2)
        {
            results.innerText += "\nComputer wins!"
            computer_score.innerText = "";
            computer_score.innerText = comp_score_int + 1;
            comp_score_int++;
        }
        else
        {
            results.innerText += "\nPlayer wins!"
            player_score.innerText = "";
            player_score.innerText = play_score_int + 1;
            play_score_int++;
        }
    }
    else if(playerSelection == 2){
        if(computerSelection == 3)
        {
            results.innerText += "\nComputer wins!"
            computer_score.innerText = "";
            computer_score.innerText = comp_score_int + 1;
            comp_score_int++;
        }
        else
        {
            results.innerText += "\nPlayer wins!"
            player_score.innerText = "";
            player_score.innerText = play_score_int + 1;
            play_score_int++;
        }
    }
    else if(playerSelection == 3){
        if(computerSelection == 1)
        {
            results.innerText += "\nComputer wins!"
            computer_score.innerText = "";
            computer_score.innerText = comp_score_int + 1;
            comp_score_int++;
        }
        else
        {
            results.innerText += "\nPlayer wins!"
            player_score.innerText = "";
            player_score.innerText = play_score_int + 1;
            play_score_int++;
        }
    }

    if(play_score_int === 5)
    {
        play_score_int = 0;
        comp_score_int = 0;
        player_score.innerText = play_score_int;
        computer_score.innerText = comp_score_int;
        results.innerText = "Player reaches 5 points and wins the game!";
    }
    else if(comp_score_int === 5)
    {
        play_score_int = 0;
        comp_score_int = 0;
        player_score.innerText = play_score_int;
        computer_score.innerText = comp_score_int;
        results.innerText = "Computer reaches 5 points and wins the game!";
    }
}


function game()
{
    
    
}