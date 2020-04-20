const rpsContainer = document.querySelector('.rps-container');
const message = document.querySelector('.message');
const choicesContainer = document.querySelector('.choices-container');
const choiceIcons = document.querySelectorAll('.choice img');
const playerScore = document.querySelector('.player-score');
const tieTotal = document.querySelector('.tie-total');
const compScore = document.querySelector('.comp-score');
const roundNum = document.querySelector('.round');
const playerSelectionText = document.querySelector('.player-selection'); 
const compSelectionText = document.querySelector('.comp-selection');
const selectionContainer = document.querySelector('.selection-container');
const playAgain = createPlayAgainBtn();

let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;
let roundCount = 0;

function playGame(e) {
    const playerSelection = e.target.dataset.choice;
    const computerSelection = getComputerSelection();
    
    playRound(playerSelection, computerSelection);
    showSelectionContainer(e);
    displaySelectionText(playerSelection, computerSelection);
    increaseRoundCount();
    showGameResults();
}

function getComputerSelection() {
    const choices = ["rock", "paper", "scissors"];
    const randomNuber = Math.floor(Math.random() * 3);
    return choices[randomNuber];
}

function playRound(playerSelection, computerSelection) { 
    
    switch(playerSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            return win(playerSelection, computerSelection);

        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            return lose(playerSelection, computerSelection);

        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
            return tie(playerSelection, computerSelection);
    }
}

function showSelectionContainer(e) {
    if (e.target.className === 'play-again') {
        selectionContainer.style.visibility = 'hidden';
    } else {
        selectionContainer.style.visibility = 'visible';
    }
}

function displaySelectionText(playerSelection, computerSelection) {
    playerSelectionText.innerText = playerSelection.toUpperCase();
    compSelectionText.innerText = computerSelection.toUpperCase();
}

function increaseRoundCount() {
    roundCount++;
    roundNum.textContent = roundCount;
}

//Determine text for individual round results
function win(playerSelection, computerSelection) {
    playerWinCount++;
    playerScore.innerText = playerWinCount;
    message.innerText = `You won! ${capitalize(playerSelection)} beats ${computerSelection}!`;    
}

function lose(playerSelection, computerSelection) {
    computerWinCount++;
    compScore.innerText = computerWinCount;
    message.innerText = `You lost... ${capitalize(playerSelection)} loses to ${computerSelection}.`;
}

function tie(playerSelection, computerSelection) {
    tieCount++;
    tieTotal.innerText = tieCount;
    message.innerText = `You tied! ${capitalize(playerSelection)} nullifies ${computerSelection}.`;
}

//Display game's final score results
function showGameResults() {
    if (roundCount === 5) {
    
        choicesContainer.style.display = 'none';
        rpsContainer.appendChild(playAgain);
   
        if (playerWinCount > computerWinCount) {
            message.innerText = `Congrats! \n After ${roundCount} rounds you beat the computer \n ${playerWinCount} to ${computerWinCount}!`;
        } else if (playerWinCount === computerWinCount) {
            message.innerText = `Womp womp. After ${roundCount} rounds you \n tied the computer ${playerWinCount} to ${computerWinCount}.`;
        } else {
            message.innerText = `Sorry! After ${roundCount} rounds you lost to the computer ${playerWinCount} to ${computerWinCount}.`;
        }
    }
}

function resetGame() {
    playerWinCount = 0;
    tieCount = 0;
    computerWinCount = 0;
    roundCount = 0;
    
    playerScore.innerText = 0;
    tieTotal.innerText = 0;
    compScore.innerText = 0;
    roundNum.innerText = '-';

    choicesContainer.style.display = 'flex';
    selectionContainer.style.visibility = 'hidden';
    message.innerText = "Choose your weapon:";

    rpsContainer.removeChild(playAgain);
}

function createPlayAgainBtn() {
    const btn = document.createElement('button');
    btn.innerText = "Play again?";
    btn.classList.add('play-again');
    return btn;
}

//Helper method
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

choiceIcons.forEach(choice => choice.addEventListener('click', playGame));
playAgain.addEventListener('click', resetGame);