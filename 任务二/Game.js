
var lastTime=new Date();
var frameRate=10;
var frameTime=1000/frameRate;;
function update () {
		Running();
}
function start(){
	var thisTime = new Date();
	if (thisTime.getTime() - lastTime.getTime()>=frameTime) {
		lastTime=thisTime;
		update();
	}
	start();
}
//start();