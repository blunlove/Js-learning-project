/*var frameRate=60;
var frameTime=1000/frameRate;
function reflash () {
	$(".Snake").css({'teft':Snake.lastPositionX[1]*Snake.size,'top':Snake.lastPositionY[1]*Snake.size})
}
var start =setInterval(reflash,frameTime);*/
var worldSizeX=800;
var worldSizeY=600;
$("#World").css({'width':worldSizeX,'height': worldSizeY});

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

foodRest();
rest();
$("#theScore").css({'left':(worldSizeX/2-25),'top':(worldSizeY+50)}).text(Snake.length);
var speed=100;
var running =setInterval(Running,speed);
function GameOver () {
	alert("Game Over...");
	rest();
	foodRest ();
}