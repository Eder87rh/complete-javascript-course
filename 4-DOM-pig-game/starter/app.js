/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, prevDiceVal, winnerValue = 100;

init();

document.getElementById("input").addEventListener("keyup", function(){
  //console.log(document.getElementById("input").value);
  winnerValue = document.getElementById("input").value;
});



document.querySelector(".btn-roll").addEventListener('click', function() {
  if(!gamePlaying) return;

  var dice = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;

  if(dice === 6 && prevDiceVal === 6){
    scores[activePlayer] = 0;
    document.querySelector("#score-" + activePlayer).textContent = 0;
    prevDiceVal = undefined;
    nextPlayer();

  } else {
    prevDiceVal = dice;
    var diceDOM = document.querySelector(".dice");
    var diceDOM2 = document.querySelector(".dice2");
  
    diceDOM.style.display = 'block';
    diceDOM.src = "dice-" + dice + ".png";

    diceDOM2.style.display = 'block';
    diceDOM2.src = "dice-" + dice2 + ".png";
  
    if(dice === 1 || dice2 ===1){
      nextPlayer();
    } else {
      roundScore += dice + dice2;
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    }
  }

});

document.querySelector(".btn-hold").addEventListener("click", function(){
  if(!gamePlaying) return;

  scores[activePlayer] +=roundScore;
  document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

  if(scores[activePlayer] >= winnerValue){
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice2").style.display = "none";
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    gamePlaying = false;
  } else {
    nextPlayer();
  }

});

document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".dice2").style.display = "none";
}


function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  
  document.querySelector('.dice').style.display = "none";
  document.querySelector(".dice2").style.display = "none";
  document.getElementById("score-0").textContent = '0';
  document.getElementById("score-1").textContent = '0';
  document.getElementById("current-0").textContent = '0';
  document.getElementById("current-1").textContent = '0';
  document.getElementById("name-0").textContent = 'Player 1';
  document.getElementById("name-1").textContent = 'Player 2';

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}