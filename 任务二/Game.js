var speed = 100;
var worldSizeX =800;
var worldSizeY=600;
var snakeSize=20;
var foodSize=20;
var maxX=worldSizeX/snakeSize-1;
var maxY=worldSizeY/snakeSize-1;
$("#World").css({'width':worldSizeX,'height': worldSizeY});
$("#theScore").css({'left':(worldSizeX/2-25),'top':(worldSizeY+50)}).text("0");
var snake=new Snake($("#World"),snakeSize,snakeSize);
var food=new Food($("#World"),foodSize,foodSize);
food.rest();
snake.rest();

function start(){
	snake.update();
	if(snake.eat(food.x,food.y)){
		$("#theScore").text(snake.length);
		snake.Grow();
		food.rest();
	}
	if(!snake.isAlive){
		//这里好像没必要清掉定时器再设置一个一样的定时器
		alert("Game Over...");
		$("#theScore").text("0");
		snake.removeBody();
		snake.rest();
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