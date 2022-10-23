let playerScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const score_div = document.querySelector(".score");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const i = Math.floor(Math.random()*3);
    return choices[i];
}

function convertToWord(text){
    if (text === "r") return "Rock";
    if (text === "p") return "Paper";
    return "Scissors";
}

function playerWin(playerChoice, computerChoice){
    playerScore++;
    userScore_span.innerHTML = playerScore;
    result_div.innerHTML = `${convertToWord(playerChoice)} beats ${convertToWord(computerChoice)} . You win! 🎉`;
}

function gameTie(playerChoice, computerChoice){
    result_div.innerHTML = "Its a tie! 🐱‍👤";
}

function playerLose(playerChoice, computerChoice){
    computerScore++;
    compScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(playerChoice)} . You lose! 😭`;
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();

    if ((playerChoice == "r" && computerChoice == "s") || (playerChoice == "p" && computerChoice == "r") || (playerChoice == "s" && computerChoice == "p")){
        playerWin(playerChoice, computerChoice);
    } else if(playerChoice == computerChoice){
        gameTie(playerChoice, computerChoice);
    } else {
        playerLose(playerChoice, computerChoice);
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })    
}

main();




