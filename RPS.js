const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resetScores = document.getElementById("resetScores");

const outcome = document.getElementById("outcome");
const winnerOutput = document.getElementById("winnerOutput");
const playerScoreOutput = document.getElementById("playerScoreOutput");
const computerScoreOutput = document.getElementById("computerScoreOutput");
const drawnGamesOutput = document.getElementById("drawnGamesOutput");


let playerScore = 0;
let computerScore = 0;
let drawnGames = 0;

// Create a function that will select an option at random
  function computerChoice() {
    let numberSelection = Math.floor(Math.random() * 3);
    if (numberSelection === 0) {
      return "Rock";
    } else if (numberSelection === 1) {
      return "Paper";
    } else if (numberSelection === 2) {
      return "Scissors";
    } else {
      return "Error!";
    };

  };

  function scoresOutput() {
    playerScoreOutput.textContent = `Player Score is: ${playerScore}`;
      computerScoreOutput.textContent = `Computer Score is: ${computerScore}`;
      if (drawnGames === 1) {
      drawnGamesOutput.textContent = `There is ${drawnGames} drawn games`;
      } else {
        drawnGamesOutput.textContent = `There are ${drawnGames} drawn games`;
      }
  };

//Make a function to take two parameters player choice and computer choice
//This should then return the outcome of the game
//added a check to ensure only valid selections will run
//changes all input to lower case
//now adds scores to totals

function playRockPaperScissors(playerSelection, computerSelection) {
  let playerThrow = playerSelection.toLowerCase();
  let computerThrow = computerSelection.toLowerCase();

  if  (playerThrow != "rock" && playerThrow != "paper" && playerThrow != "scissors") {
    return "Player must choose 'Rock', 'Paper' or 'Scissors";
  } else if (computerThrow != "rock" && computerThrow != "paper" && computerThrow != "scissors") {
    return "Computer must choose 'Rock', 'Paper' or 'Scissors";
  } else {
    if (playerThrow === computerThrow) {
      drawnGames++;
      outcome.textContent = "Game is a draw";
      scoresOutput();
      winnerAnnounce ()
      } else if (playerThrow === "rock" && computerThrow === "scissors") {
      playerScore++;
      outcome.textContent = "Player Wins! Rock beats Scissors";
      scoresOutput();
      winnerAnnounce ()
    } else if (playerThrow === "scissors" && computerThrow === "paper") {
      playerScore++;
      outcome.textContent = "Player Wins! Scissors beats Paper";
      scoresOutput();
      winnerAnnounce ()
      } else if (playerThrow === "paper" && computerThrow === "rock") {
      playerScore++;
      outcome.textContent =  "Player Wins! Paper beats Rock";
      scoresOutput();
      winnerAnnounce ()
    } else if (computerThrow === "rock" && playerThrow === "scissors") {
      computerScore++;
      outcome.textContent =  "Computer Wins! Rock beats Scissors";
      scoresOutput();
      winnerAnnounce ()
    } else if (computerThrow === "scissors" && playerThrow === "paper") {
      computerScore++;
      outcome.textContent =  "Computer Wins! Scissors beats Paper";
      scoresOutput();
      winnerAnnounce ()
    } else if (computerThrow === "paper" && playerThrow === "rock") {
      computerScore++;
      outcome.textContent =  "Computer Wins! Paper beats Rock";
      scoresOutput();
      winnerAnnounce ()
    } else {
      outcome.textContent =  "Something went wrong";
    };
  };
};

//create a function to reset scores without refreshing
function resetScore() {
playerScore = 0;
computerScore = 0;
drawnGames = 0;
scoresOutput();
};

//create a function to announce a winner
function winnerAnnounce () {
  if (playerScore === 5) {
    winnerOutput.textContent = "You are the winner!!!"
    resetScore();
  };
  if (computerScore === 5) {
    winnerOutput.textContent = "Computer Wins!!!"
    resetScore();
  };
};

//create buttons for player selection
rock.addEventListener("click", (e) => {
const playerChoice = e.target.id;
playRockPaperScissors(playerChoice, computerChoice());
});

paper.addEventListener("click", (e) => {
const playerChoice = e.target.id;
playRockPaperScissors(playerChoice, computerChoice());
});

scissors.addEventListener("click", (e) => {
const playerChoice = e.target.id;
playRockPaperScissors(playerChoice, computerChoice());
});

//button to reset scores back to 0
resetScores.addEventListener("click", resetScore);


//create a function to play five games of Rock Paper Scissors and count scores
// and reports overall winner after five

//removed game function until buttons work for making choices
/*function game() {
for (let i = 0; i < 5; i++) {
  console.log(`Player chose ${playerSelection}`);
  console.log(`Computer chose ${computerSelection}`);
  console.log(playRockPaperScissors(playerSelection, computerSelection));
  console.log(playerScore);
  console.log(computerScore);
  console.log(drawnGames);
};
};*/