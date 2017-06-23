/*var frameRate=60;
var frameTime=1000/frameRate;
function reflash () {
	$(".Snake").css({'teft':Snake.lastPositionX[1]*Snake.size,'top':Snake.lastPositionY[1]*Snake.size})
}
var start =setInterval(reflash,frameTime);*/
var speed=100;
var running =setInterval(Running,speed);
function rest() {
    Snake.direction=0;
    Snake.lastDirection=0;
    Snake.lastPositionX[0]=parseInt((Math.random()*Snake.maxX));
    Snake.lastPositionY[0]=parseInt((Math.random()*Snake.maxY));
    Snake.lastPositionX[1]=Snake.lastPositionX[0];
    Snake.lastPositionY[1]=Snake.lastPositionY[0];
    $(".Snake").css({'left':(Snake.lastPositionX[0]*Snake.size),'top':(Snake.lastPositionY[0]*Snake.size)});

}
rest();