Food=new Object();
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