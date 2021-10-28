// MAKING THE UI PART

const buttons = document.querySelectorAll('.choice');// nodelist of all button
const body = document.querySelector('body'); // the <body> tag

buttons.forEach(button => button.addEventListener('click', playOnPress))// for all buttons we run event siltner click
buttons.forEach(button => button.addEventListener('mouseover', animateHover))
buttons.forEach(button => button.addEventListener('mouseout', animateUnhover))

const results = document.createElement('div')
results.classList.add('announce')
body.appendChild(results)

const gameOver = document.querySelector('.score')
const player = document.querySelector('.player') // stores the comp and player divs
const comp = document.querySelector('.comp')// aim is to display score in text contents of these divs
let pl = 0
let cp = 0
player.textContent = ` player : ${pl}`
comp.textContent = `computer : ${cp}`

const refresh = document.querySelector('.refresh button')// play again button refreshes
refresh.addEventListener('click', (e) => { window.location.reload() })
refresh.addEventListener('mouseover', animateHover)
refresh.addEventListener('mouseout', animateUnhover)

function playOnPress(e) {
    results.textContent = (singleRound(e.target.textContent, computerPlay()))
    if (results.textContent.includes('win')) { ++pl }
    else if (results.textContent.includes('lost')) { ++cp }
    else { }

    player.textContent = ` player : ${pl}`
    comp.textContent = `computer : ${cp}`
    if (pl >= 5) {
        player.textContent = ''
        gameOver.textContent = 'YOU WIN'
        comp.textContent = ''
        results.textContent = 'PRESS PLAY AGAIN'
        return
    }
    else if (cp >= 5) {
        player.textContent = ''
        gameOver.textContent = 'COMP WINS'
        comp.textContent = ''
        results.textContent = 'PRESS PLAY AGAIN'
        return
    }

}// function that runs 1 round of rps when we click button
function animateHover(e) {
    e.target.classList.add('playing')
}
function animateUnhover(e) {
    e.target.classList.remove('playing')
}
// returns a random string out of the three
function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    //console.log('comp choice is : '+ choice)
    return choice
}
function singleRound(playerselection, computerselection) {
    playerselection = playerselection.slice(0, 1).toUpperCase() + playerselection.slice(1).toLowerCase();

    if (playerselection === 'Scissors' && computerselection === 'Paper') {
        return (`you win ! ${playerselection} beats ${computerselection}`)
    }

    else if (playerselection === 'Rock' && computerselection === 'Scissors') {
        return (`you win ! ${playerselection} beats ${computerselection}`)
    }

    else if (playerselection === 'Paper' && computerselection === 'Rock') {
        return (`you win ! ${playerselection} beats ${computerselection}`)
    }

    else if (playerselection === computerselection) {
        return (`draw!!! both picked ${playerselection}`)
    }

    else {
        return (`you lost ! ${computerselection} beats ${playerselection}`)
    }

}


//console.log(singleRound(prompt('entr ur choice'), computerPlay()))
/*
function game() {
    player = 0
    comp = 0
    for (i = 0; i < 5; i++) {
        reoundResult = singleRound(prompt('entr ur choice'), computerPlay())
        console.log(`result of round ${i+1} is ${reoundResult}`)

        if (reoundResult.includes('win')) {
            player++
        }
        else if (reoundResult.includes('lost')) {
            comp++
        }
        else {
            // do nothing for draw
        }

    }
    if (player>comp){
        let finalScore=`player won with score player ${player} : computer ${comp}`
        return finalScore
    }
    else if (comp>player){
        let finalScore=`comp won with score player ${player} : computer ${comp}`
        return finalScore
    }
    else{
        let finalScore=`its a DRAW with score player ${player} : computer ${comp}`
        return finalScore
    }



}

console.log(game())

*/

