let userScore = 0;
let computerScore = 0;
let result = document.getElementById("result");
const userScore_span  = document.getElementById("user-score");
const compScore_span  = document.getElementById("computer-score");
const rock = document.getElementById("r");
const papper = document.getElementById("p");
const scissor = document.getElementById("s");
let userChoice = document.querySelector("user-choice");

function getComputerChoice()
{
    let choices = ['r', 'p','s'];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
rock.addEventListener('click', function(){
    userChoice = "r";
    game(userChoice);
})

papper.addEventListener('click', function(){
    userChoice = "p";
    game(userChoice);
})

scissor.addEventListener('click', function(){
    userChoice = "s";
    game(userChoice);
})

function game(userChoice)
{
    let computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs": 
        case "pr":
        case "sp":
            win(userChoice,computerChoice)
            break;
        
        case "sr":
        case "pr":
        case "ps":
            loose(userChoice,computerChoice)
            break;

        case "ss":
        case "pp":
        case "rr":
            draw(userChoice,computerChoice)
            break;
        

    }   
}
function getWordChoice(letter)
{
 if(letter === "r") return "Rock";
 if(letter === "p") return "Papper";
 return "Scissors"

}
function win(userChoice,computerChoice)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    result.innerText = `User ${getWordChoice(userChoice)} vs Computer ${getWordChoice(computerChoice)} You win`
}
function loose(userChoice,computerChoice)
{
    computerScore++;
    compScore_span.innerHTML = computerScore;
    result.innerText = `User ${getWordChoice(userChoice)} vs Computer ${getWordChoice(computerChoice)} You loose`
}
function draw(userChoice,computerChoice)
{
    result.innerText = `User ${getWordChoice(userChoice)} vs Computer ${getWordChoice(computerChoice)} draw`
}