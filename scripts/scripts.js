let playerWinCount = 0;
let computerWinCount = 0;


function getPlayerSelection() {
return prompt("Rock, paper or scissors?").trim().toLowerCase();
} 

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomNuber = Math.floor(Math.random() * 3);
    return choices[randomNuber];
}

function playRound(playerSelection, computerSelection) { 
    switch(playerSelection + computerSelection) {
        //user chooses rock
        case "rockrock":
            return "You tied! Rock nullifies rock!";
        case "rockpaper":
            computerWinCount++;
            return "You lose! Paper beats rock!";
        case "rockscissors":
            playerWinCount++;
            return "You win! Rock beats scissors!";
        
            //user chooses paper
        case "paperrock":
            playerWinCount++;
            return "You win! Paper beats rock!";
        case "paperpaper":
            return "You tied! Paper nullifies paper!";
        case "paperscissors":
            computerWinCount++;
            return "You lose! Scissors beat rock!";

        //user chooses scissors
        case "scissorsrock":
            computerWinCount++;
            return "You lose! Scissors beats rock!";
        case "scissorspaper":
            playerWinCount++;
            return "You win! Scissors beats paper!";
        case "scissorsscissors":
            return "You tied! Scissors nullfies scissors!";
    }
}

function showRoundResults() {
    return `Player score: ${playerWinCount} Computer score: ` + `${computerWinCount}`;
}

function showGameResults(rounds) {
    if (playerWinCount > computerWinCount) {
        return `You've won the best of ${rounds} games! ` + 
                `Final score - Player: ${playerWinCount} | Computer: ${computerWinCount}`;
    } else if (playerWinCount === computerWinCount) {
        return `You tied. Final score - Player: ${playerWinCount} | Computer: ${computerWinCount}`;
    } else {
        return `You've lost the best of ${rounds} games. ` + 
                `Final score - Player: ${playerWinCount} | Computer: ${computerWinCount}`;
    }
}

function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        const playerSelection = getPlayerSelection();
        const computerSelection = computerPlay();
        
        console.log(playRound(playerSelection, computerSelection));
        console.log(showRoundResults());    
    }
    console.warn(showGameResults(rounds));
}

game(5);