function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors']
  let randomIndex = Math.floor(Math.random() * 3)
  return choices[randomIndex]
}

function playerSelection(){
  return prompt('What would your selection be?').toLowerCase()
}


function playRound(getPlayerChoice, getComputerChoice) {
  let playerWins = 0;
  let computerWins = 0;
  let draws = 0;
  
  if(getPlayerChoice === 'rock') {
    if(getComputerChoice === getPlayerChoice) {
      draws++
      console.log(`A draw! You picked ${getPlayerChoice}, the computer picked ${getComputerChoice}`)
    } else if (getComputerChoice === 'paper') {
      computerWins++
      console.log(`You lost! You picked ${getPlayerChoice}, the computer picked ${getComputerChoice}`)
    } else {
      playerWins++
      console.log(`You win! You picked ${getPlayerChoice}, the computer picked ${getComputerChoice}`)
    }
  }
}

console.log(playRound(playerSelection(), getComputerChoice()))