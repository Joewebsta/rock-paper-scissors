let playerWinCount = 0;
let computerWinCount = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function getPlayerSelection() {
    return prompt("Rock, paper or scissors?").trim().toLowerCase();
  } 

function computerPlay() {
    let selectPlay = getRandomInt(3);

    switch (selectPlay) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(playerSelection, computerSelection) { 
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "You tied! Rock nullifies rock!"
        } else if (computerSelection === "paper") {
            computerWinCount++;
            return "You lose! Paper beats rock!"
        } else {
            playerWinCount++;
            return "You win! Rock beats scissors!"
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerWinCount++;
            return "You win! Paper beats rock!"
        } else if (computerSelection === "paper") {
            return "You tied! Paper nullifies paper!"
        } else {
            computerWinCount++;
            return "You lose! Scissors beat rock!"
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerWinCount++;
            return "You lose! Scissors beats rock!"
        } else if (computerSelection === "paper") {
            playerWinCount++;
            return "You win! Scissors beats paper!"
        } else {
            return "You tied! Scissors nullfies scissors!"
        }
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