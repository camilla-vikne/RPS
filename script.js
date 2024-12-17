let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  const status = document.getElementById("status");

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    status.textContent = `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    status.textContent = `Computer wins! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
  } else {
    status.textContent = "It's a draw!";
  }

  updateScores();
  checkWinner();
}

function updateScores() {
  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function checkWinner() {
  const result = document.getElementById("result");
  if (humanScore === 5) {
    result.textContent = "You win the game! 🎉";
    disableButtons();
  } else if (computerScore === 5) {
    result.textContent = "Computer wins the game! 💻";
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

document
  .getElementById("rock")
  .addEventListener("click", () => playGame("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playGame("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playGame("scissors"));

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}
