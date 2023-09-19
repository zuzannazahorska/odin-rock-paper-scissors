const items = ["rock", "paper", "scissors"];

function computerChoice(arr) {
  const randomItem = Math.floor(Math.random() * arr.length);
  const item = arr[randomItem];
  return item;
}

const result = computerChoice(items);

function playRound(playerSelection, computerSelection) {
    const rules = {
        rock: {beats: "scissors", result: "You win!"},
        scissors: {beats: "paper", result: "You win!"},
        paper: {beats: "rock", result: "You win!"}
    };
    if (!playerSelection || !items.includes(playerSelection)){
        return "Invalid input!"
    } else {
        if (playerSelection == computerSelection) {
            return "Tie!"
        } else if (rules[playerSelection]?.beats === computerSelection) {
            return rules[playerSelection].result
        } else {
            return "Computer wins!";
        }
    }
}

let playerSelection = prompt(
  "Please enter rock, paper, or scissors"
).toLowerCase();
let computerSelection = computerChoice(items);

console.log(playRound(playerSelection, computerSelection));
