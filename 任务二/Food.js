/*
怎么定义类看下snake.js的注释
我觉得食物只要有一个在指定位置展示的方法就可以了
*/

function Food(){
	_this=this;
	_this.color='green';
	_this.element=$('<div>');
	_this.element.css({'position': 'absolute','background-color':_this.color,'width':foodSize,'height':foodSize});
	$("#World").append(_this.element);
	_this.rest=function(){
		_this.x=parseInt((Math.random()*maxX));
		_this.y=parseInt((Math.random()*maxY));
		_this.element.css({"left":_this.x*foodSize,"top":_this.y*foodSize});
	}
}
/*
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