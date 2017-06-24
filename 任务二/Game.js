/*var frameRate=60;
var frameTime=1000/frameRate;
function reflash () {
	$(".Snake").css({'teft':Snake.lastPositionX[1]*Snake.size,'top':Snake.lastPositionY[1]*Snake.size})
}
var start =setInterval(reflash,frameTime);*/

//
/*
 这里很不面对对象,其实应该是（怎么创建类你看snake和food的注释吧）:
 var snake = new Snake();
 snake.rest();
 var food = new Food();
 food.rest();

 而且我看到了你下面有同样的代码所以你可以创建一个初始化方法包起来
 function init() (){
	var snake = new Snake();
 	snake.rest();
	var food = new Food();
 	food.rest();
 }
 */
//Food=new Object();
//$("#theScore").css({'left':(worldSizeX/2-25),'top':(worldSizeY+50)}).text(Snake.length);
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
//snake.upDate();
//snake.upDate();
//snake.upDate();
//snake.upDate();
//snake.upDate();
//var begin=snake.upDate;
function start(){
	snake.upDate();
	if(snake.eat(food.x,food.y)){
		$("#theScore").text(snake.length);
		food.rest();
	}
	if(!snake.isAlive){
		clearInterval(running);
		alert("Game Over...");
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