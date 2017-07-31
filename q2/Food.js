function Food(parent,color,w,h,mX,mY){
	this.element=$('<div>');
	this.element.css({'position': 'absolute','background-color':color,'width':w,'height':h});
	$(parent).append(this.element);
	this.rest=function(){
		this.x=parseInt((Math.random()*mX));
		this.y=parseInt((Math.random()*mY));
		this.element.css({"left":this.x*w,"top":this.y*h});
	}
	this.updateSize=function(_w,_h){
        w=_w;
        h=_h;
        this.element.css({"left":this.x*w,"top":this.y*h,'width':w,'height':h});
    }
}