function Snake(parent,w,h,mX,mY,score){
    var _this=this;
    _this.color='red';
    _this.bodycolor='rgb(150,0,0)';
    _this.element = $("<div>");
    _this.element.css({'position': 'absolute','background-color':_this.color,'width':w,'height':h});
    $(parent).append(_this.element);
    _this.rest=function(){
        _this.length=0;
        _this.x=parseInt((Math.random()*mX));
        _this.y=parseInt((Math.random()*mY));
        _this.speedY=0;
        _this.speedX=0;
        _this.isAlive=true;
        _this.lastX=new Array();
        _this.lastY=new Array();
        _this.bodyElement=new Array();
        _this.element.css({"left":_this.x*w,"top":_this.y*h});
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
    _this.update=function(){
        if(_this.length>0) {
            for (var i = 0; i < _this.length; i++) {
                _this.lastX[_this.length-i]=_this.lastX[_this.length-i-1];
                _this.lastY[_this.length-i]=_this.lastY[_this.length-i-1];
            }
        }
        _this.lastX[0]=_this.x;
        _this.lastY[0]=_this.y;
        _this.x=_this.x+_this.speedX;
        _this.y=_this.y+_this.speedY;
        _this.bumpBody();
        _this.element.css({"left":_this.x*w,"top":_this.y*h});
        for (var i = 0; i < _this.length; i++) {
            _this.bodyElement[i].css({'left':_this.lastX[i]*w,'top':_this.lastY[i]*h});
        }
    }
    _this.eat=function(x,y){
        if(_this.x==x && _this.y==y){
            _this.length++;
            _this.Grow();
            $(score).text(snake.length);
            return true;
        }
        else return false;
    }
    _this.Grow=function() {
        _this.bodyElement[_this.length-1] = $("<div>");
        _this.bodyElement[_this.length-1].css({'position': 'absolute','background-color':_this.bodycolor,'width':h,'height':h});
        _this.bodyElement[_this.length-1].css({'left':_this.lastX[_this,length]*w,'top':_this.lastY[_this,length]*h});
        $("#World").append(_this.bodyElement[_this.length-1]);
    }
    _this.removeBody=function(){
        for (var i = 0; i <_this.length; i++) {
            _this.bodyElement[i].remove();
        }
    }
    _this.bumpBody=function(){
        if(_this.x<0||_this.x>mX||_this.y<0||_this.y>mY){
            _this.isAlive=false;
        }
        for (var i = 4; i <= _this.length; i++) {
            if(_this.x==_this.lastX[i] && _this.y==_this.lastY[i]){
                _this.isAlive=false;
            }
        }
        if(!_this.isAlive){
            alert("Game Over...");
            $(score).text("0");
            _this.removeBody();
            _this.rest();
        }
    }
}
