answer = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(choice) {
  choice = Math.floor(Math.random() * answer.length);
  let newComputerChoice = answer[choice];
  return console.log(`my choice is ${newComputerChoice}`);
}

getComputerChoice();

function getHumanChoice() {
  const question = prompt("choose: rock, paper, scissors");
  if (question.toLowerCase() === "rock") {
    console.log("i have chosed rock");
  } else if (question.toLowerCase() === "paper") {
    console.log("i have chosed paper");
  } else if (question.toLowerCase() === "scissors") {
    console.log("i have chosed scissors");
  } else {
    return prompt("choose again: rock, paper, scissors");
  }
  return question;
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  //   if (
  //     (humanChoice === "rock" && computerChoice === "rock") ||
  //     (humanChoice === "paper" && computerChoice === "paper") ||
  //     (humanChoice === "scissors" && computerChoice === "scissors")
  //   ) {
  //     console.log("we have an equal");
  //   } else if (
  //     (humanChoice === "rock" && computerChoice === "paper") ||
  //     (humanChoice === "paper" && computerChoice === "rock") ||
  //     (humanChoice === "scissors" && computerChoice === "paper")
  //   ) {
  //     console.log("the human has win");
  //   } else {
  //     console.log("the master is the pc");
  //   }

  //   return;

  if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("equal");
  } else {
    console.log("what so ever");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
