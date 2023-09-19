const items = ["rock", "paper", "scissors"];

function computerChoice(arr) {
  const randomItem = Math.floor(Math.random() * arr.length);
  const item = arr[randomItem];
  return item;
}

const result = computerChoice(items);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (playerSelection === "rock" && computerSelection == "paper") {
    return "Computer wins!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "Computer wins!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "Computer wins!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win!";
  } else {
    return "Something went wrong!";
  }
}

let playerSelection = prompt(
  "Please enter rock, paper, or scissors"
).toLowerCase();
let computerSelection = computerChoice(items);

console.log(playRound(playerSelection, computerSelection));
