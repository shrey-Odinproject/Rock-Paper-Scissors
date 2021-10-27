// MAKING THE UI PART
function func(e) {
    console.log(singleRound(e.target.textContent, computerPlay())) //console.log(e.target.textContent) gives string in the respective button
}// function that runs when we click
const buttons = document.querySelectorAll('button');// nodelist of all button
buttons.forEach(button => button.addEventListener('click', func))// for all buttons we run event siltner click



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

