const userChoiceDisplay = document.getElementById("userChoice")
const computerChoiceDisplay = document.getElementById("computerChoice")
const result = document.getElementById("result")
let userChoice
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(function (possibleChoice) {
        return possibleChoice.addEventListener('click', function (e) {
            let droid
            userChoice = e.target.id
            userChoiceDisplay.innerHTML = userChoice
            droid = generateComputerChoice()

            computerChoiceDisplay.innerHTML = droid
            result.innerHTML = getResult(droid, userChoice)
        })
    })

function generateComputerChoice(){
    let val
    let rand = Math.floor(Math.random() * possibleChoices.length)
    console.log(rand)
    switch(rand){
        case 0:
            val = 'rock'
            break
        case 1:
            val = 'paper'
            break
        case 2:
            val = 'scissor'
            break
    }
    console.log(val)
    return val
}

function getResult(droid, human){
    if (droid === 'rock' && human === 'paper'){
        return 'You win!'
    }
    if (droid === 'rock' && human === 'scissor'){
        return 'You lose!'
    }
    if (droid === 'rock' && human === 'rock'){
        return 'Draw!'
    }
    if (droid === 'paper' && human === 'rock'){
        return 'You lose!'
    }
    if (droid === 'paper' && human === 'scissor'){
        return 'You win!'
    }
    if (droid === 'paper' && human === 'paper'){
        return 'Draw!'
    }
    if (droid === 'scissor' && human === 'rock'){
        return 'You win!'
    }
    if (droid === 'scissor' && human === 'paper'){
        return 'You lose!'
    }
    if (droid === 'scissor' && human === 'scissor'){
        return 'Draw!'
    }
}

