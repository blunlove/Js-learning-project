function Snake(parent,color,bodycolor,w,h,mX,mY){
    var _this=this;
    _this.beginframe=2;
    _this.tempKey=null;
    _this.running=null;
    _this.element = $("<div>");
    _this.element.css({'position': 'absolute','background-color':color,'width':w,'height':h});
    $(parent).append(_this.element);
    _this.turnLeft=function(){
        if(_this.directionX==1){return;}
        _this.directionX=-1;
        _this.directionY=0;
    }
    _this.turnRight=function(){
        if(_this.directionX==-1){return;}
        _this.directionX=1;
        _this.directionY=0;
    }
    _this.turnUp=function(){
        if(_this.directionY==1){return;}
        _this.directionX=0;
        _this.directionY=-1;
    }
    _this.turnDown=function(){
        if(_this.directionY==-1){return;}
        _this.directionX=0;
        _this.directionY=1;
    }
    _this.Grow=function() {
        _this.bodyElement[_this.length-1] = $("<div>");
        _this.bodyElement[_this.length-1].css({'position': 'absolute','background-color':bodycolor,'width':h,'height':h});
        _this.bodyElement[_this.length-1].css({'left':_this.lastX[_this,length]*w,'top':_this.lastY[_this,length]*h});
        $(parent).append(_this.bodyElement[_this.length-1]);
    }
    _this.eat=function(x,y){
        if(_this.x==x && _this.y==y){
            _this.length++;
            _this.frame=_this.frame+0.5;
            _this.speed=1000/_this.frame;
            clearInterval(_this.running);
            _this.running=setInterval(_this.update,_this.speed);
            _this.Grow();
            return true;
        }
        else return false;
    }
    _this.removeBody=function(){
        for (var i = 0; i <_this.length; i++) {
            _this.bodyElement[i].remove();
        }
    }
    _this.bumpBody=function(){
        if(_this.x<0||_this.x>mX||_this.y<0||_this.y>mY){
            _this.isAlive=false;
            return;
        }
        for (var i = 3; i < _this.length; i++) {
            if(_this.x==_this.lastX[i] && _this.y==_this.lastY[i]){
                _this.isAlive=false;
                return;
            }
        }
    }
    _this.update=function(){
        if (_this.tempKey==37) {
            _this.turnLeft();//left
        }
        if (_this.tempKey==38) {
            _this.turnUp();//top
        }
        if (_this.tempKey==39) {
            _this.turnRight();;//right
        }
        if (_this.tempKey==40) {
            _this.turnDown();//down
        }
        if(_this.length>0) {
            for (var i = 0; i < _this.length; i++) {
                _this.lastX[_this.length-i]=_this.lastX[_this.length-i-1];
                _this.lastY[_this.length-i]=_this.lastY[_this.length-i-1];
            }
        }
        _this.lastX[0]=_this.x;
        _this.lastY[0]=_this.y;
        _this.x=_this.x+_this.directionX;
        _this.y=_this.y+_this.directionY;
    }
    _this.rest=function(){
        _this.removeBody();
        _this.length=0;
        _this.tempKey=null;
        _this.x=parseInt((Math.random()*mX));
        _this.y=parseInt((Math.random()*mY));
        _this.directionY=0;
        _this.directionX=0;
        _this.frame=_this.beginframe;
        _this.speed=1000/_this.frame;
        _this.isAlive=true;
        _this.lastX=new Array();
        _this.lastY=new Array();
        _this.bodyElement=new Array();
        _this.element.css({"left":_this.x*w,"top":_this.y*h});
        clearInterval(_this.running);
        _this.running=setInterval(_this.update,_this.speed);
    }
}
