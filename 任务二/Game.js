var speed = 100;
var worldSizeX =800;
var worldSizeY=600;
var snakeSize=20;
var foodSize=20;
var maxX=worldSizeX/snakeSize-1;
var maxY=worldSizeY/snakeSize-1;
var theWorld=$("#World");
var theScore=$("#theScore");
theWorld.css({'width':worldSizeX,'height': worldSizeY});
theScore.css({'left':(worldSizeX/2-25),'top':(worldSizeY+50)}).text("0");
var snake=new Snake(theWorld,snakeSize,snakeSize,maxX,maxY,theScore);
var food=new Food(theWorld,foodSize,foodSize,maxX,maxY);
food.rest();
snake.rest();
function start(){
	snake.update();
	if(snake.eat(food.x,food.y)){
		food.rest();
	}
	if(!snake.isAlive){
		food.rest();
	}
}
setInterval(start,speed);
$(document).keydown(function(event){
	event.preventDefault();
	if (event.keyCode==37) {
        snake.turnLeft();//left
    }
    if (event.keyCode==38) {
        snake.turnUp();//top
    }
    if (event.keyCode==39) {
        snake.turnRight();;//right
    }
    if (event.keyCode==40) {
        snake.turnDown();//down
    }
});