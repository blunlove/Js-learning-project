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