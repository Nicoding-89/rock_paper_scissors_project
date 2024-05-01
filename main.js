let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
    return 'paper';
  } else {
    return 'scissors';
  };
};

function getHumanChoice () {
  const answer = prompt('Rock, Paper or Scissors?');
  let humanChoice;

  if (answer === null) {
    alert('Goodbye.');
  } else {
    humanChoice = answer.trim().toLowerCase();
    
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
      return humanChoice;
    } else {
      alert('Choose a valid option');
      return getHumanChoice();
    };
  };
};

function playGame() {

  function playRound(humanChoice, computerChoice) {
    const humanSelection = humanChoice();
    const computerSelection = computerChoice();

    if (humanSelection === undefined) {
      return;
    };

    if (humanSelection === 'rock' && computerSelection === 'paper') {
      console.log('You lose! Paper beats Rock');
      return computerScore += 1;
    } else if (humanSelection === 'paper' && computerSelection === 'rock') {
      console.log('You win! Paper beats Rock');
      return playerScore += 1;
    } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
      console.log('You win! Scissors beats Paper');
      return playerScore += 1;
    } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
      console.log('You win! Rock beats Scissors');
      return playerScore += 1;
    } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
      console.log('You lose! Scissors beats Paper');
      return computerScore += 1;
    } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
      console.log('You lose! Rock beats Scissors');
      return computerScore += 1;
    } else {
      console.log("It's a tie!");
      return true;
    };
    
  };

  let result;

  result = playRound(getHumanChoice, getComputerChoice);
  if (result === undefined) {
    return;
  };

  result = playRound(getHumanChoice, getComputerChoice);
  if (result === undefined) {
    return;
  };

  result = playRound(getHumanChoice, getComputerChoice);
  if (result === undefined) {
    return;
  };

  result = playRound(getHumanChoice, getComputerChoice);
  if (result === undefined) {
    return;
  };

  result = playRound(getHumanChoice, getComputerChoice);
  if (result === undefined) {
    return;
  };

  if (playerScore > computerScore) {
    return `You win! ${playerScore} vs ${computerScore}`;
  } else if (playerScore < computerScore) {
    return `Computer wins! ${computerScore} vs ${playerScore}`;
  } else {
    return `It's a tie ${computerScore} vs ${playerScore}`;
  };
};

console.log(playGame() || `Game aborted. Computer scores: ${computerScore}. You score: ${playerScore}`);