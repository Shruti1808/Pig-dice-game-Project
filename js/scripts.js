// Business logic goes here....
var Player = function(playerName){
  this.playerName = playerName;
  this.turnScore = 0;
  this.gameScore = 0;
}
 // Pick a random number between 1 and 6
var rollDice = function() {
  return (Math.floor((Math.random() * 6) + 1));
}

Player.prototype.rollHold = function(){
  this.gameScore += this.turnScore;
}


// User logic goes here....
$(document).ready(function(){
  var player = new Player("Player 1");
  $(".roll").click(function(){
    event.preventDefault();


    var thisRoll = rollDice();
    player.turnScore += thisRoll;
    if (thisRoll ===1){
     player.turnScore = 0;
      }
      $(".turnscore1").text(player.turnScore);
      $(".rollscore").text(thisRoll);

    })

    $(".hold").click(function(){
      event.preventDefault();
     player.rollHold();
     $(".turnscore1").text(player.turnScore);
     $(".rollscore").text("");
     console.log(player.gameScore);
     $(".gamescore1").text(player.gameScore);

    })
})
// $("#result1").text();
