let userScore = 0;
let computerScore = 0;

const result = document.getElementById("result");
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

// Generate computer's choice
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Convert letters to words
function getWord(letter) {
  if (letter === 'r') return "Rock";
  if (letter === 'p') return "Paper";
  return "Scissors";
}

// Game outcome logic
function game(userChoice) {
  const computerChoice = getComputerChoice();
  const combo = userChoice + computerChoice;

  switch (combo) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

// Result handlers
function win(user, comp) {
  userScore++;
  userScoreSpan.innerText = userScore;
  result.innerText = `🎉 You Win! ${getWord(user)} beats ${getWord(comp)}.`;
}

function lose(user, comp) {
  computerScore++;
  computerScoreSpan.innerText = computerScore;
  result.innerText = `😢 You Lose! ${getWord(comp)} beats ${getWord(user)}.`;
}

function draw(user, comp) {
  result.innerText = `🤝 It's a Draw! You both chose ${getWord(user)}.`;
}

// Event listeners
rock.addEventListener('click', () => game("r"));
paper.addEventListener('click', () => game("p"));
scissors.addEventListener('click', () => game("s"));
