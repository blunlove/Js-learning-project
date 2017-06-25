var frame = 2;
var speed = 1000/frame;
var worldSizeX =800;
var worldSizeY=600;
var snakeSize=20;
var foodSize=20;
var maxX=worldSizeX/snakeSize-1;
var maxY=worldSizeY/snakeSize-1;
var theWorld=$("#World");
var theScore=$("#theScore");
var tempKey;
theWorld.css({'width':worldSizeX,'height': worldSizeY});
theScore.css({'left':(worldSizeX/2-25),'top':(worldSizeY+50)}).text("0");
var snake=new Snake(theWorld,'red','rgb(150,0,0)',snakeSize,snakeSize,maxX,maxY);
snake.rest();
var food=new Food(theWorld,'green',foodSize,foodSize,maxX,maxY);
food.rest();
if (food.x==snake.x&&food.y==snake.y)food.rest();
function start(){
	if (tempKey==37) {
        snake.turnLeft();//left
    }
    if (tempKey==38) {
        snake.turnUp();//top
    }
    if (tempKey==39) {
        snake.turnRight();;//right
    }
    if (tempKey==40) {
        snake.turnDown();//down
    }
    snake.update();
    if(snake.eat(food.x,food.y)){
        theScore.text(snake.length);
        clearInterval(running);
        frame=frame+0.5;
        speed=1000/frame;
        running= setInterval(start,speed);
        food.rest();
        if(food.x==snake.x&&food.y==snake.y){
            food.rest();
        }
        for (var i = 0; i < snake.length; i++) {
            if(food.x==snake.lastX[i]&&food.y==snake.lastY[i]){
                food.rest();
            }
        }
    }
    if(!snake.isAlive){
        alert("Game Over...");
        theScore.text("0");
        snake.removeBody();
        snake.rest();
        food.rest();
        tempKey=null;
    }
}
var running= setInterval(start,speed);
$(document).keydown(function(event){
	event.preventDefault();
    tempKey=event.keyCode;
});