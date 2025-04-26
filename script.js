function playGame(userChoice){
   const computerChoice = computerMove();
   let resultText;
   if(userChoice === computerChoice){
        resultText = "It's a Tie!";
   }
   else if((userChoice === 'rock' && computerChoice === 'scissors') 
        || (userChoice === 'paper' && computerChoice === 'rock')
        || (userChoice === 'scissors' && computerChoice === 'paper')){
            resultText = "You Won!";
        }
    else{
        resultText = "You Lose!";
    }

    document.getElementById('userchoice').innerHTML = `User Choice: ${userChoice}`;
    document.getElementById('computerchoice').innerHTML = `Computer Choice: ${computerChoice}`;

    if(resultText === "You Won!"){
        document.getElementById("result").innerHTML = resultText;
        document.getElementById("result").style.color = '#62F700';
        document.getElementById("result").style.backgroundColor = '#CBF7B8';
    }
    else if(resultText === "You Lose!"){
        document.getElementById("result").innerHTML = resultText;
        document.getElementById("result").style.color = '#F7020D';  
        document.getElementById("result").style.backgroundColor = '#F29B9B';      
    }
    else{
        document.getElementById("result").innerHTML = resultText; 
        document.getElementById("result").style.color = 'white';  
        document.getElementById("result").style.backgroundColor = '';      
    }

}

function computerMove(){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.round(Math.random()*2);

    return choices[computerChoice];
}