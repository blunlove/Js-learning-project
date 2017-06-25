//这里我就帮你弄了parent，理由以及接下来的改动见Snake.js的注释。
function Food(parent,w,h,mX,mY){
	_this=this;
	_this.color='green';
	_this.element=$('<div>');
	_this.element.css({'position': 'absolute','background-color':_this.color,'width':w,'height':h});
	$(parent).append(_this.element);
	_this.rest=function(){
		_this.x=parseInt((Math.random()*mX));
		_this.y=parseInt((Math.random()*mY));
		_this.element.css({"left":_this.x*w,"top":_this.y*h});
	}
}