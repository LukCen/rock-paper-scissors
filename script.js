function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors']
  let randomIndex = Math.floor(Math.random() * 3)
  return choices[randomIndex]
}

console.log(getComputerChoice())