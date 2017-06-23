/*var frameRate=60;
var frameTime=1000/frameRate;
function reflash () {
	$(".Snake").css({'teft':Snake.lastPositionX[1]*Snake.size,'top':Snake.lastPositionY[1]*Snake.size})
}
var start =setInterval(reflash,frameTime);*/
foodRest();
rest();
$("#theScore").text(Snake.length);
var speed=100;
var running =setInterval(Running,speed);
function GameOver () {
	alert("Game Over...");
	rest();
	foodRest ();
}