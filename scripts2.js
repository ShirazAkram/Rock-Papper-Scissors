

let gameNumberInput = document.getElementById('game-number');
let playButton = document.getElementById('play-game');


let leftRounds = document.getElementById('rounds-left');
let pointsUser = document.getElementById('user-points');
let pointsComputer = document.getElementById('computer-points');
let resultRound = document.getElementById('round-result');
let gameResult = document.getElementById('game-result');

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');

let totalTurns = 0;
let roundsLeft = 0;
let userPoints = 0;
let computerPoints = 0;


document.getElementById('rock').onclick=()=> {
    totalTurns = parseInt(gameNumberInput.value);
    if(totalTurns <= 0 || isNaN(totalTurns)) {
        rockBtn.disabled = true;
        alert('Please Enter a Valid Number then Press PLAY Button')
    }
    else {
        playRound("ROCK");
    }
    
}

document.getElementById('paper').onclick=()=> {
    totalTurns = parseInt(gameNumberInput.value);
    if(totalTurns <= 0 || isNaN(totalTurns)) {
        paperBtn.disabled = true;
        alert('Please Enter a Valid Number then Press PLAY Button')
    }
    else {
        playRound("PAPER");
    }
    
}

document.getElementById('scissors').onclick=()=> {
    totalTurns = parseInt(gameNumberInput.value);
    if(totalTurns <= 0 || isNaN(totalTurns)) {
        scissorsBtn.disabled = true;
        alert('Please Enter a Valid Number then Press PLAY Button')
    }
    else {
        playRound("SCISSORS");
    }
    
}


document.getElementById('play-game').onclick=()=> {
    totalTurns = parseInt(gameNumberInput.value);
    
    if(totalTurns <= 0 || isNaN(totalTurns)) {
        alert('Please enter a valid number')

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
    else {
    roundsLeft = totalTurns;
    leftRounds.textContent = roundsLeft;
    userPoints = 0;
    computerPoints = 0;
    pointsUser.textContent = userPoints;
    pointsComputer.textContent = computerPoints;
    resultRound.textContent = "";
    gameResult.textContent = "";
    playButton.disabled = true;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    playRound();
    }


}

let computerChoices = ["ROCK", "PAPER", "SCISSORS"]; // [0 1 2]

function playRound(userChoice) {
    let computerChoice = computerChoices[parseInt(Math.random() * 3)];
    let roundResult = "";

    if(userChoice === computerChoice) {
        roundResult = "TIE";
    }
    else if (
        (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (userChoice === "PAPER" && computerChoice === "ROCK") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        roundResult = "WON";
        userPoints++;
    }
    else {
        roundResult = "LOSE";
        computerPoints++;
    }
    roundsLeft--;
    leftRounds.textContent = roundsLeft;
    pointsUser.textContent = userPoints;
    pointsComputer.textContent = computerPoints;
    resultRound.textContent = `Round Result: ${roundResult}`;
    
    if (roundsLeft === 0) {
        gameEnd();
    }
}

function gameEnd() {
    if(userPoints > computerPoints) {
        gameResult.textContent = "Game Result: YOU WON THE GAME";
    }
    else if (userPoints < computerPoints) {
        gameResult.textContent = "Game Result: COMPUTER WON THE GAME";
    }
    else  {
        gameResult.textContent = "Game Result: TIE";
    }
    playButton.disabled = true;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    
}

