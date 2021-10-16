function computerPlay(){
    let choices=['Rock','Paper','Scissors'];
    let choice=choices[Math.floor(Math.random() * choices.length)];
    //console.log('comp choice is : '+ choice)
    return choice
}
computerPlay()