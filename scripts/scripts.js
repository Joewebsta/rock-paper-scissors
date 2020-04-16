const content = document.querySelector('.content');
const message = document.querySelector('.message');
const choices = document.querySelector('.choices');
const playerScore = document.querySelector('.player-score');
const tieTotal = document.querySelector('.tie-total');
const compScore = document.querySelector('.comp-score');
const roundNum = document.querySelector('.round');
const playerSelectionText = document.querySelector('.player-selection'); 
const compSelectionText = document.querySelector('.comp-selection');
const selectionContainer = document.querySelector('.selection-container');
const playAgain = document.createElement('button');
playAgain.innerText = "Play again?"
playAgain.classList.add('play-again');


let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;
let roundCount = 0;

window.addEventListener('click', (e) => {
    
    console.log(e.target.className);

    const playerSelection = e.target.dataset.choice;
    const computerSelection = computerPlay();
    if (!playerSelection) return;


    if (e.target.className === 'play-again') {
        selectionContainer.style.visibility = 'hidden';
    } else {
        selectionContainer.style.visibility = 'visible';
    }
    
    playerSelectionText.innerText = playerSelection.toUpperCase();
    compSelectionText.innerText = computerSelection.toUpperCase();

    playRound(playerSelection, computerSelection);
    increaseRoundCount();
    
    if (roundCount === 5) {
        showGameResults();
    }
});


function increaseRoundCount() {
    roundCount++;
    roundNum.textContent = roundCount;
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

//Display indivdual round score results
function showRoundResults() {
    return `Player score: ${playerWinCount} Computer score: ` + `${computerWinCount}`;
}

//Display game's final score results
function showGameResults() {
    choices.style.display = 'none';
    content.appendChild(playAgain);
    // playAgain.style.display = 'inline-block';
    
    if (playerWinCount > computerWinCount) {
        message.innerText = `Congrats! \n After ${roundCount} rounds you beat the computer \n ${playerWinCount} to ${computerWinCount}!`;
    } else if (playerWinCount === computerWinCount) {
        message.innerText = `Womp womp. After ${roundCount} rounds you \n tied the computer ${playerWinCount} to ${computerWinCount}.`;
    } else {
        message.innerText = `Sorry! After ${roundCount} rounds you lost to the computer ${computerWinCount} to ${playerWinCount}.`;
    }
}

//Helper method
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

playAgain.addEventListener('click', () => {
    playerWinCount = 0;
    tieCount = 0;
    computerWinCount = 0;
    roundCount = 0;
    
    playerScore.innerText = playerWinCount;
    tieTotal.innerText = tieCount;
    compScore.innerText = computerWinCount;
    roundNum.innerText = roundCount;

    choices.style.display = 'flex';
    selectionContainer.style.visibility = 'hidden';
    message.innerText = "Choose your weapon:"

    content.removeChild(playAgain);
});