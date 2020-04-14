let playerWinCount = 0;
let computerWinCount = 0;

//Execute n rounds of rock paper scissors
function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        const playerSelection = getPlayerSelection();
        const computerSelection = computerPlay();
        
        console.log(playRound(playerSelection, computerSelection));
        console.log(showRoundResults());    
    }
    console.warn(showGameResults(rounds));
}

//Determine player and computer selections
function getPlayerSelection() {
    return prompt("Rock, paper or scissors? Choose your weapon!").trim().toLowerCase();
} 

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomNuber = Math.floor(Math.random() * 3);
    return choices[randomNuber];
}

//Play round and compare user and computer selections to determine winner
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

//Determine text for individual round results
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

//Display indivdual round score results
function showRoundResults() {
    return `Player score: ${playerWinCount} Computer score: ` + `${computerWinCount}`;
}

//Display game's final score results
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

//Helper method
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// game(5);