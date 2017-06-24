/*
怎么定义类看下snake.js的注释
我觉得食物只要有一个在指定位置展示的方法就可以了
*/
/*
function Food(){
	this.size=20;
	this.x;
	this.y;
	this.color=green;
	this.element=$('div');
	this.element.css({"background-color":this.color,"width":this.size,"height":this.size});
	this.element.css({"left":this.x*this.size,"top":this.y*this.size});
}

$(".Food").css({'width':Snake.size,'height':Snake.size});
function foodRest () {
	Food.beginPositionX=parseInt((Math.random()*Snake.maxX));
	Food.beginPositionY=parseInt((Math.random()*Snake.maxY));
	$(".Food").css({'left':(Food.beginPositionX*Snake.size),'top':(Food.beginPositionY*Snake.size)});
}

function toEat(){
	if(Snake.lastPositionX[0]==Food.beginPositionX && Snake.lastPositionY[0]==Food.beginPositionY){
		foodRest();
		Snake.length++;
		$("#theScore").text(Snake.length);
	}
}
*/