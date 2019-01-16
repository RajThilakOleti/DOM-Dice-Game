/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var totalOne = document.querySelector("#score-0");
var totalTwo = document.querySelector("#score-1");
var currentOne = document.querySelector("#current-0");
var currentTwo = document.querySelector("#current-1");
var diceImg = document.querySelector(".dice");
var player1 = document.querySelector("#name-0");
var player2 = document.querySelector("#name-1");

var scores, activePlayer, currentScore;

initialize(); 

document.querySelector(".btn-new").addEventListener("click",function(){
 initialize();    
});

function initialize(){
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    totalOne.innerHTML = "0";
    totalTwo.innerHTML = "0";
    currentOne.innerHTML = "0";
    currentTwo.innerHTML = "0";
    diceImg.style.display = "none";
    player1.innerHTML = "PLAYER 1";
    player2.innerHTML = "PLAYER 2";
    document.querySelector(".btn-new").classList.remove("heartBeat");
    document.querySelector(".btn-roll").style.display = "block";
    document.querySelector(".btn-hold").style.display = "block";
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}


document.querySelector(".btn-roll").addEventListener("click",function(){

    var randomNumber = Math.floor(Math.random()*6) + 1;
    if(randomNumber != 1){
        diceImg.src = "dice-"+randomNumber+".png";
        diceImg.style.display = "block";
        currentScore += randomNumber;
        document.querySelector("#current-"+activePlayer).innerHTML = currentScore;

    }
    else{
         //updating the score of active player in the scores array
         scores[activePlayer] += currentScore;

         //making the currents scores to zero
         document.querySelector("#current-0").innerHTML = 0;
         document.querySelector("#current-1").innerHTML = 0;
 
         //updating the total score of current player
         document.querySelector("#score-"+activePlayer).innerHTML = scores[activePlayer];

         if(scores[activePlayer] >= 100){
            gameOver();
        }
    
        else{
            nextPlayer();
        }
        
    }


});




document.querySelector(".btn-hold").addEventListener("click",function(){
    debugger;
     //updating the score of active player in the scores array
     scores[activePlayer] += currentScore;

     //making the currents scores to zero
     document.querySelector("#current-0").innerHTML = 0;
     document.querySelector("#current-1").innerHTML = 0;

     //updating the total score of current player
     document.querySelector("#score-"+activePlayer).innerHTML = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        gameOver();
    }

    else{
        nextPlayer();
    }

    
});


function gameOver(){
    document.querySelector("#name-"+activePlayer).innerHTML = "WINNER!";
    document.querySelector(".btn-roll").style.display = "none";
    document.querySelector(".btn-hold").style.display = "none";
    document.querySelector(".btn-new").classList.add("heartBeat");
}

function nextPlayer(){    
        if(activePlayer == 0){
            activePlayer = 1;
        }
        else{
            activePlayer = 0;
        }
        
        currentScore = 0;
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
}





