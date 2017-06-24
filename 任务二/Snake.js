function Snake(){
    var _this=this;
    _this.color='red';
    _this.element = $('<div>');
    _this.element.css({'position': 'absolute','background-color':_this.color,'width':snakeSize,'height':snakeSize});
    $("#World").append(_this.element);
    _this.rest=function(){
        _this.length=0;
        _this.x=parseInt((Math.random()*maxX));
        _this.y=parseInt((Math.random()*maxY));
        _this.speedY=0;
        _this.speedX=0;
        _this.isAlive=true;
        _this.lastX=new Array();
        _this.lastY=new Array();
        _this.element.css({"left":_this.x*snakeSize,"top":_this.y*snakeSize});
    }
    _this.turnLeft=function(){
        if(_this.speedX==1){return;}
        _this.speedX=-1;
        _this.speedY=0;
    }
    _this.turnRight=function(){
        if(_this.speedX==-1){return;}
        _this.speedX=1;
        _this.speedY=0;
    }
    _this.turnUp=function(){
        if(_this.speedY==1){return;}
        _this.speedX=0;
        _this.speedY=-1;
    }
    _this.turnDown=function(){
        if(_this.speedY==-1){return;}
        _this.speedX=0;
        _this.speedY=1;
    }
    _this.upDate=function(){
        _this.x=_this.x+_this.speedX;
        _this.y=_this.y+_this.speedY;
        if(_this.x<0||_this.x>maxX||_this.y<0||_this.y>maxY){
            _this.isAlive=false;
            return;
        }
        _this.element.css({"left":_this.x*snakeSize,"top":_this.y*snakeSize});
    }
    _this.eat=function(x,y){
        if(_this.x==x && _this.y==y){
            _this.length++;
            return true;
        }
        else return false;
    }
}
/*function Grow () {

}*/