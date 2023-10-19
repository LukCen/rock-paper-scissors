'use strict'
const btnRock = document.querySelector('.select-rock')
const btnPaper = document.querySelector('.select-paper')
const btnScissors = document.querySelector('.select-scissors')

function handleScore () {
  let playerWins = 0
  let computerWins = 0
  let draws = 0

  function playerVictory () {
    playerWins++
  }
  function computerVictory () {
    computerWins++
  }
  function draw () {
    draws++
  }
  return { playerWins, computerWins, draws, playerVictory, computerVictory, draw } // need this to access those outside of this function, because scope
}

function getComputerChoice () {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * 3)
  return choices[randomIndex]
}

function getPlayerChoice (callback) {
  let playerChoice = null
  btnRock.addEventListener('click', () => {
    playerChoice = 'rock'
    callback(playerChoice)
  })
  btnPaper.addEventListener('click', () => {
    playerChoice = 'paper'
    callback(playerChoice)
  })
  btnScissors.addEventListener('click', () => {
    playerChoice = 'scissors'
    callback(playerChoice)
  })
}

function playGame () {
  getComputerChoice()

  getPlayerChoice((player) => {
    if (player === 'rock') {
      if (getComputerChoice() === player) {
        handleScore().draw()
      } else if (getComputerChoice() === 'paper') {
        handleScore().computerVictory()
      } else {
        handleScore().playerVictory()
      }
    }

    if (player === 'paper') {
      if (getComputerChoice() === player) {
        handleScore().draw()
      } else if (getComputerChoice() === 'scissors') {
        handleScore().computerVictory()
      } else {
        handleScore().playerVictory()
      }
    }

    if (player === 'scissors') {
      if (getComputerChoice() === player) {
        handleScore().draw()
      } else if (getComputerChoice() === 'rock') {
        handleScore().computerVictory()
      } else {
        handleScore().playerVictory()
      }
    }
  })
}

playGame()
