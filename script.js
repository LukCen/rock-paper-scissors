// function getComputerChoice(){
//   const choices = ['rock', 'paper', 'scissors']
//   let randomIndex = Math.floor(Math.random() * 3)
//   return choices[randomIndex]
// }

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
