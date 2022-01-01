const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");


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
      return "Game is a draw";
      } else if (playerThrow === "rock" && computerThrow === "scissors") {
      playerScore++;
      return "Player Wins! Rock beats Scissors";
    } else if (playerThrow === "scissors" && computerThrow === "paper") {
      playerScore++;
      return "Player Wins! Scissors beats Paper";
      } else if (playerThrow === "paper" && computerThrow === "rock") {
      playerScore++;
      return "Player Wins! Paper beats Rock";
    } else if (computerThrow === "rock" && playerThrow === "scissors") {
      computerScore++;
      return "Computer Wins! Rock beats Scissors";
    } else if (computerThrow === "scissors" && playerThrow === "paper") {
      computerScore++;
      return "Computer Wins! Scissors beats Paper";
    } else if (computerThrow === "paper" && playerThrow === "rock") {
      computerScore++;
      return "Computer Wins! Paper beats Rock";
    } else {
      return "Something went wrong";
    };
  };
};

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

//create a function to reset scores without refreshing
function resetScores() {
playerScore = 0;
computerScore = 0;
drawnGames = 0;
};

//create button for player selection
rock.addEventListener("click", (e) => {
const playerChoice = e.target.id;
console.log(e.target.id);
console.log(playRockPaperScissors(playerChoice, computerChoice()));
});

paper.addEventListener("click", (e) => {
const playerChoice = e.target.id;
console.log(e.target.id);
console.log(playRockPaperScissors(playerChoice, computerChoice()));
});

scissors.addEventListener("click", (e) => {
const playerChoice = e.target.id;
console.log(e.target.id);
console.log(playRockPaperScissors(playerChoice, computerChoice()));
});