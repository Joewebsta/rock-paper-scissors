function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function computerPlay() {
    let selectPlay = getRandomInt(3);

    switch (selectPlay) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// function playRound(playerSelection, computerSelection) { 

// }


function playRound(playerSelection, computerSelection) { 
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "You tied! Rock nullifies rock!"
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats rock!"
        } else {
            return "You win! Rock beats scissors!"
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock!"
        } else if (computerSelection === "paper") {
            return "You tied! Paper nullifies paper!"
        } else {
            return "You lose! Scissors beat rock!"
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Scissors beats rock!"
        } else if (computerSelection === "paper") {
            return "You win! Scissors beats paper!"
        } else {
            return "You tied! Scissors nullfies scissors!"
        }
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))