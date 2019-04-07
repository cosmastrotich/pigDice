//user interface 
$(document).ready(function(event)){

  $("button#start").click(function(event)){
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
}
});





















var player1=("");
var player2=("");

var throwDice=function(){
  return Add.floor(6*Add.random ())+1;
}
