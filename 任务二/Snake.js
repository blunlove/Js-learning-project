var isRunning=false;
Snake=new Object();
Snake.Speed=100;
Snake.size=20;
$(".Snake").css({'width':Snake.size,'height':Snake.size});
Snake.maxX=worldSizeX/Snake.size-1;
Snake.maxY=worldSizeY/Snake.size-1;
Snake.direction=0;
Snake.beginPositionX=parseInt((Math.random()*Snake.maxX));
Snake.beginPositionY=parseInt((Math.random()*Snake.maxY));
Snake.lastPositionX=new Array();
Snake.lastPositionY=new Array();
Snake.lastPositionX[0]=Snake.beginPositionX;
Snake.lastPositionY[0]=Snake.beginPositionY;

$(".Snake").css({'left':(Snake.beginPositionX*Snake.size),'top':(Snake.beginPositionY*Snake.size)});
$(document).keydown(function(event){
    if (event.keyCode==37) {
        Snake.direction = 1;//left
    }
    if (event.keyCode==38) {
        Snake.direction = 2;//top
    }
    if (event.keyCode==39) {
        Snake.direction = 3;//right
    }
    if (event.keyCode==40) {
        Snake.direction = 4;//down
    }
});
function Running () {
    if(!isRunning){
        isRunning=true;
        if (Snake.direction==1 && 0<Snake.lastPositionX[0]<Snake.maxX) {
            Snake.lastPositionX[0]=Snake.lastPositionX[0]-1;
            $(".Snake").delay(Snake.Speed).animate({'left':Snake.lastPositionX[0]*Snake.size},0);
        }
        if (Snake.direction==3 && 0<Snake.lastPositionX[0]<Snake.maxX) {
            Snake.lastPositionX[0]=Snake.lastPositionX[0]+1;
            $(".Snake").delay(Snake.Speed).animate({'left':Snake.lastPositionX[0]*Snake.size},0);
        }
        isRunning=false;
    }
}