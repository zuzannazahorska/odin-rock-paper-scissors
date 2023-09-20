function game() {
    const items = ["rock", "paper", "scissors"];
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        //Get user input
        let playerSelection = prompt(
            "Please enter rock, paper, or scissors"
        ).toLowerCase();

        //Get computer's choice
        let computerSelection = computerChoice(items);
        function computerChoice(arr) {
            const randomItem = Math.floor(Math.random() * arr.length);
            const item = arr[randomItem];
            return item;
        }

        //Play a round
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
                    playerScore++
                    return rules[playerSelection].result
                } else {
                    computerScore++
                    return "Computer wins!";
                }
            }
        }
        
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(`Final scores: Player ${playerScore} Computer ${computerScore}`)
}

game(); 