Snake=new Object();
//Snake.Speed=100;
Snake.size=20;
$(".Snake").css({'width':Snake.size,'height':Snake.size});
Snake.maxX=worldSizeX/Snake.size-1;
Snake.maxY=worldSizeY/Snake.size-1;
Snake.lastPositionX=new Array();
Snake.lastPositionY=new Array();
function rest() {
    Snake.direction=0;
    Snake.lastPositionX[0]=parseInt((Math.random()*Snake.maxX));
    Snake.lastPositionY[0]=parseInt((Math.random()*Snake.maxY));
    Snake.lastPositionX[1]=Snake.lastPositionX[0];
    Snake.lastPositionY[1]=Snake.lastPositionY[0];
    $(".Snake").css({'left':(Snake.lastPositionX[0]*Snake.size),'top':(Snake.lastPositionY[0]*Snake.size)});

}
rest();
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
    if(Snake.lastPositionX[1]==0 || Snake.lastPositionX[1]==Snake.maxX || Snake.lastPositionY[1]==0||Snake.lastPositionY[1]==Snake.maxY){
        //$(".Snake").css({'left':(Snake.lastPositionX[1])*Snake.size,'top':(Snake.lastPositionY[1])*Snake.size});
        alert("Game Over...");
        rest();
        return;
    }
    if (Snake.direction==1) {
        Snake.lastPositionX[1]=Snake.lastPositionX[0];
        Snake.lastPositionX[0]=Snake.lastPositionX[0]-1;
        $(".Snake").css({'left':(Snake.lastPositionX[0])*Snake.size});
    }
    if (Snake.direction==3) {
        Snake.lastPositionX[1]=Snake.lastPositionX[0];
        Snake.lastPositionX[0]=Snake.lastPositionX[0]+1;
        $(".Snake").css({'left':(Snake.lastPositionX[0])*Snake.size});
    }
    if (Snake.direction==2) {
        Snake.lastPositionY[1]=Snake.lastPositionY[0];
        Snake.lastPositionY[0]=Snake.lastPositionY[0]-1;
        $(".Snake").css({'top':(Snake.lastPositionY[0])*Snake.size});
    }
    if (Snake.direction==4) {
        Snake.lastPositionY[1]=Snake.lastPositionY[0];
        Snake.lastPositionY[0]=Snake.lastPositionY[0]+1;
        $(".Snake").css({'top':(Snake.lastPositionY[0])*Snake.size});
    }
}
