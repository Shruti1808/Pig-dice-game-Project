// Business logic goes here....
var Player = function(playerName){
  this.playerName = playerName;
  this.turnScore = 0;
  this.gameScore = 0;
}

var rollDice = function() {
  return (Math.floor((Math.random() * 6) + 1));
}

// User logic goes here....
$(document).ready(function(){
  var player = new Player("Player 1");
  $(".roll").click(function(){
    event.preventDefault();


    var thisRoll = rollDice();
    player.turnScore += thisRoll;
    if (thisRoll ===0){
     player.turnScore = 0;
      }
    $(".turnscore1").text(player.turnScore);
    $("#result1").text();
  })
})
