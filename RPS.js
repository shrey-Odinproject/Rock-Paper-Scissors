function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    //console.log('comp choice is : '+ choice)
    return choice
}

function singleRound(playerselection, computerselection) {
    playerselection = playerselection.slice(0, 1).toUpperCase() + playerselection.slice(1).toLowerCase();

    if (playerselection === 'Scissors' && computerselection === 'Paper') {
        console.log(`you win ! ${playerselection} beats ${computerselection}`)
    }

    else if (playerselection === 'Rock' && computerselection === 'Scissors') {
        console.log(`you win ! ${playerselection} beats ${computerselection}`)
    }

    else if (playerselection === 'Paper' && computerselection === 'Rock') {
        return (`you win ! ${playerselection} beats ${computerselection}`)
    }

    else if (playerselection === computerselection) {
        return (`DRAW!!! both picked ${playerselection}`)
    }

    else {
        return (`you lost ! ${computerselection} beats ${playerselection}`)
    }

}



function game() {
    let playerScore = 0, computerScore = 0
    
    for (i = 0; i < 1; i++) {
        
        let roundResult = String(console.log(`round num ${i+1} RESULT: `, singleRound(prompt('entr ur choice'), computerPlay())))
        if (roundResult.includes('win')){
            console.log('yeeeeeeee')
        }
    }
    /*console.log(playerScore,computerScore)
    let final = (playerScore >= computerScore) ? 'player won' : 'comp won'
    return final*/
}
console.log(game())
