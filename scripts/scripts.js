let playerWinCount = 0;
let computerWinCount = 0;

function getPlayerSelection() {
return prompt("Rock, paper or scissors? Choose your weapon!").trim().toLowerCase();
} 

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomNuber = Math.floor(Math.random() * 3);
    return choices[randomNuber];
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function win(playerSelection, computerSelection) {
    playerWinCount++;
    return `You won! ${capitalize(playerSelection)} beats ${computerSelection}!`;
}

function lose(playerSelection, computerSelection) {
    computerWinCount++;
    return `You lost... ${capitalize(playerSelection)} loses to ${computerSelection}.`;
}

function tie(playerSelection, computerSelection) {
    return `You tied! ${capitalize(playerSelection)} nullifies ${computerSelection}.`;
}

function playRound(playerSelection, computerSelection) { 
    
    switch(playerSelection + computerSelection) {
        //user win scenarios
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            return win(playerSelection, computerSelection);

        //user lose scenarios
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            return lose(playerSelection, computerSelection);

        //user tie scenarrios
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
            return tie(playerSelection, computerSelection);
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