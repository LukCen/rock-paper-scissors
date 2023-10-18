'use strict'
const btnRock = document.querySelector('.select-rock')
const btnPaper = document.querySelector('.select-paper')
const btnScissors = document.querySelector('.select-scissors')

function handleScore(){
  let playerWins = 0;
  let computerWins = 0;
  let draws = 0;

  function playerVictory(){
    playerWins++
    console.log('PLAYER WON')
  }
  function computerVictory(){
    computerWins++
    console.log('COMPUTER WON')
  }
  function draw(){
    draws++
    console.log('DRAW')
  }
  return {playerWins, computerWins, draws, playerVictory, computerVictory, draw} // need this to access those outside of this function, because scope
}

function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors']
  let randomIndex = Math.floor(Math.random() * 3)
  console.log(choices[randomIndex])
  return choices[randomIndex]
}

function getPlayerChoice(){
  let playerChoice = null;
  btnRock.addEventListener('click', () => {
    playerChoice = 'rock'
    console.log(playerChoice)
    return playerChoice
  })
  btnPaper.addEventListener('click', () => {
    playerChoice = 'paper'
    console.log(playerChoice)
    return playerChoice
  })
  btnScissors.addEventListener('click', () => {
    playerChoice = 'scissors'
    console.log(playerChoice)
    return playerChoice
  })

  return {playerChoice}
}

function playGame() {
  let trackScore = handleScore()
  let player = getComputerChoice()
  let pc = getPlayerChoice()

  if(player === 'rock') {
    if (pc === player) {
      trackScore.draw()
    } else if (pc === 'paper') {
      trackScore.computerVictory()
    } else if (pc === 'scissors'){
      trackScore.playerVictory()
    }
  }
  return trackScore
}

playGame()



// function playerSelection(){
//   return prompt('What would your selection be?').toLowerCase()
// }

// let playerWins = 0;
// let computerWins = 0;
// let draws = 0;

// function playRound(getPlayerChoice, getComputerChoice) {
  
//   if(getPlayerChoice === 'rock') {
//     if(getComputerChoice === getPlayerChoice) {
//       draws++
//       console.log(`A draw! You picked ${getPlayerChoice}, the computer picked ${getComputerChoice}`)
//     } else if (getComputerChoice === 'paper') {
//       computerWins++
//       console.log(`You lost! You picked ${getPlayerChoice}, the computer picked ${getComputerChoice}`)
//     } else {
//       playerWins++
//       console.log(`You win! You picked ${getPlayerChoice}, the computer picked ${getComputerChoice}`)
//     }
//   }

//   if(getPlayerChoice === 'paper') {
//     if(getComputerChoice === getPlayerChoice) {
//       draws++
//       console.log(`A draw! You picked ${getPlayerChoice}, the computer picked ${getComputerChoice}`)
//     } else if(getComputerChoice === 'scissors') {
//       computerWins++
//       console.log(`You lost! You picked ${getPlayerChoice}, the computer picked ${getComputerChoice}`)
//     }  else {
//       playerWins++
//       console.log(`You win! You picked ${getPlayerChoice}, the computer picked ${getComputerChoice}`)
//     }
//   }
//   if(getPlayerChoice === 'scissors') {
//     if(getComputerChoice === getPlayerChoice) {
//       draws++
//       console.log(`A draw! You picked ${getPlayerChoice}, the computer picked ${getComputerChoice}`)
//     } else if(getComputerChoice === 'rock') {
//       computerWins++
//       console.log(`You lost! You picked ${getPlayerChoice}, the computer picked ${getComputerChoice}`)
//     }  else {
//       playerWins++
//       console.log(`You win! You picked ${getPlayerChoice}, the computer picked ${getComputerChoice}`)
//     }
//   }
// }

// function game(){
//   for(let i = 0; i < 5; i++){
//     playRound(playerSelection(), getComputerChoice())
//   }
//   console.log(`Score: Player - ${playerWins} | Computer - ${computerWins} | Draws - ${draws}`)
// }

// game()
