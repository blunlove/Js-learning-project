
var lastTime=new Date();
var frameRate=10;
var frameTime=1000/frameRate;;
function update () {
    if (Snake.direction == 1) {
      Snake.lastPositionX=Snake.lastPosition-1;
        $("Snake").css({'left':Snake.lastPositionX*Snake.size,'top':Snake.lastpositonY});
    }
    //if(!0<Snake.lastPositionX<(Snake.maxX-1) && )
        }

while (true) {
	var thisTime = new Date();
	if (thisTime.getTime() - lastTime.getTime()>=frameTime) {
		lastTime=thisTime;
		update();
	}
}

