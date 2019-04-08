// business logic
var player1="";
var player2="";

var throwDice=function(){
  return Math.floor(6*Math.random ())+1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

// checking for 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  // this.changeturn();
  } else {
  this.tempscore += this.roll;
  }
}

// hold
Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  // this.changeturn();
  alert(this.playerName + ", your turn is over, pass the mouse!");
}
// this.changeturn();
  } else {
  this.tempscore += this.roll;
  }
}

Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}

//user interface
$(document).ready(function(event){

  $("button#start").click(function(event){
  player1= new Player(true);
  player2= new Player(false);
  $(".player-console").show();
 $(".start").hide():

  var player1Name= $(".player1Name").val();
  $("#player1Name").text(player1Name);

  var player2Name= $(".player2Name").val();
  $("#player2Name").text(player2Name);

  player1.playerName=player1Name
  player2.playerName=player2Name
});

$("button#New Game").click(function(event){
  $(".player-console").hide();
  clearValues();
  player1.newgame();
  player2.newgame();
  $("#Round-total-1").empty();
  $("#Total-scores-1").empty();
$("#Die-roll-1").empty();
$("#Round-total-2").empty();
$("#Total-score-2").empty();
$("#Die-roll-2").empty();

(".start").show();

});
