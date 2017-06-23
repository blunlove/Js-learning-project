/*var frameRate=60;
var frameTime=1000/frameRate;
function reflash () {
	$(".Snake").css({'teft':Snake.lastPositionX[1]*Snake.size,'top':Snake.lastPositionY[1]*Snake.size})
}
var start =setInterval(reflash,frameTime);*/
var worldSizeX=800;
var worldSizeY=600;
$("#World").css({'width':worldSizeX,'height': worldSizeY});
foodRest();
rest();
$("#theScore").css({'left':(worldSizeX/2-25),'top':(worldSizeY+50)}).text(Snake.length);
var speed=100;
var running =setInterval(Running,speed);
function GameOver () {
	alert("Game Over...");
	rest();
	foodRest ();
}