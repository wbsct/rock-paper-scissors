answer = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  choice = Math.floor(Math.random() * answer.length);
  return answer[choice];
}

// console.log("pc: " + getComputerChoice());

function getHumanChoice() {
  const question = prompt("choose: rock, paper, scissors").toLocaleLowerCase();

  if (question === "rock" || question === "paper" || question === "scissors") {
    return question;
  } else {
    return getHumanChoice();
  }
}

// console.log("om: " + getHumanChoice());

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("egal");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("om!!!");
      humanScore++;
    } else {
      console.log("pc!!!");
      computerScore++;
    }
  }
  // 1
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  // 2
  const humanSelection2 = getHumanChoice();
  const computerSelection2 = getComputerChoice();
  playRound(humanSelection2, computerSelection2);
  // 3
  const humanSelection3 = getHumanChoice();
  const computerSelection3 = getComputerChoice();
  playRound(humanSelection3, computerSelection3);
  // 4
  const humanSelection4 = getHumanChoice();
  const computerSelection4 = getComputerChoice();
  playRound(humanSelection4, computerSelection4);
  // 5
  const humanSelection5 = getHumanChoice();
  const computerSelection5 = getComputerChoice();
  playRound(humanSelection5, computerSelection5);

  console.log(`scor final om: ${humanScore} si pc: ${computerScore}`);

  if (humanScore === computerScore) {
    console.log("egalitate");
  } else if (humanScore > computerScore) {
    console.log(`a castigat om, scor ${humanScore}`);
  } else {
    console.log(`a casatigat pc, scor ${computerScore}}`);
  }
}

playGame();
