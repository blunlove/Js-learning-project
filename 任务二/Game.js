var speed=100;
var worldSizeX=800;
var worldSizeY=600;
var snakeSize=20;
var foodSize=20;
var maxX=worldSizeX/snakeSize-1;
var maxY=worldSizeY/snakeSize-1;
$("#World").css({'width':worldSizeX,'height': worldSizeY});
$("#theScore").css({'left':(worldSizeX/2-25),'top':(worldSizeY+50)}).text("0");
var snake=new Snake();
snake.rest();
var food=new Food();
food.rest();

function start(){
	snake.upDate();
	if(snake.eat(food.x,food.y)){
		$("#theScore").text(snake.length);
		snake.Grow();
		food.rest();
	}
	if(!snake.isAlive){
		clearInterval(running);
		alert("Game Over...");
		$("#theScore").text("0");
		snake.rest();
		food.rest();
		running=setInterval(start,speed);
	}
}
var running=setInterval(start,speed);
$(document).keydown(function(event){
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
//var id="#body"+1
//alert(id);