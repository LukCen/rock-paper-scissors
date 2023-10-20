'use strict'
const btnRock = document.querySelector('.select-rock')
const btnPaper = document.querySelector('.select-paper')
const btnScissors = document.querySelector('.select-scissors')
const scorePlayer = document.querySelector('.player')
const scoreComputer = document.querySelector('.computer')
const scoreDraw = document.querySelector('.draw')

// I don't like the idea of keeping these variables in global scope but it'll have to do for now as I have no ideas about this
// and i dont want to cram everything into a single function
let playerWins = 0
let computerWins = 0
let draws = 0

function handleScore () {
  function playerVictory () {
    playerWins++
  }
  function computerVictory () {
    computerWins++
  }
  function draw () {
    draws++
  }
  return { playerWins, computerWins, draws, playerVictory, computerVictory, draw } // need this to access those outside of this function, because scope (I think)
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
        scoreDraw.innerText = `Draws : ${handleScore().draws}`
      } else if (getComputerChoice() === 'paper') {
        handleScore().computerVictory()
        scoreComputer.innerText = `Computer : ${handleScore().computerWins}`
      } else {
        handleScore().playerVictory()
        scorePlayer.innerText = `Computer : ${handleScore().playerWins}`
      }
    }

    if (player === 'paper') {
      if (getComputerChoice() === player) {
        handleScore().draw()
        scoreDraw.innerText = `Draws : ${handleScore().draws}`
      } else if (getComputerChoice() === 'scissors') {
        handleScore().computerVictory()
        scoreComputer.innerText = `Computer : ${handleScore().computerWins}`
      } else {
        handleScore().playerVictory()
        scorePlayer.innerText = `Player : ${handleScore().playerWins}`
      }
    }

    if (player === 'scissors') {
      if (getComputerChoice() === player) {
        handleScore().draw()
        scoreDraw.innerText = `Draws : ${handleScore().draws}`
      } else if (getComputerChoice() === 'rock') {
        handleScore().computerVictory()
        scoreComputer.innerText = `Computer : ${handleScore().computerWins}`
      } else {
        handleScore().playerVictory()
        scorePlayer.innerText = `Player : ${handleScore().playerWins}`
      }
    }
  })
}

playGame()
