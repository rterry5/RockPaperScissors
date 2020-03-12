let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    let result;

    if (computerChoice === 1) {
        result = 'rock';
    } else if (computerChoice === 2) {
        result = 'paper';
    } else if (computerChoice === 3) {
        result = 'scissors';
    }
    console.log(result);
    return result;
}

function playerPlay() {
    let playerPick = prompt("Rock, Paper or Scissors?");
    return playerPick.toLowerCase();
}

function playRound() {
    let playerPick = playerPlay();
    let computerPick = computerPlay();

    if ((playerPick === 'paper' && computerPick === 'rock') || (playerPick === 'rock' && computerPick === 'scissors') || (playerPick === 'scissors' && computerPick === 'paper')) {
        playerScore++;
        console.log('Player score is ' + playerScore);
        return alert("Player wins!");
    } else if ((playerPick === 'paper' && computerPick === 'scissors') || (playerPick === 'scissors' && computerPick === 'rock') || (playerPick === 'rock' && computerPick === 'paper')) {
        computerScore++;
        console.log('Computer score is ' + computerScore);
        return alert("Computer wins!");
    } else if (playerPick === computerPick) {
        return alert("Tie!");
    } else {
        return alert("That is not a valid choice!")
    }
} playRound();

function game() {
    for (let i = 0; i < 10; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log('You win game with ' + playerScore + ' points!')
        alert("You won the game!")
    } else {
        console.log('Computer wins game with ' + computerScore + ' points!')
        alert("You lost the game!")
    }
} game();