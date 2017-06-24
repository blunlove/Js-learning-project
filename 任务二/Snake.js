function Snake(parent){
    /* 不想你跟外面的东西有强关联的关系，所以在构造函数传进来他应该添加到哪个元素下面，是不是更灵活，而且这个
    文件是不是可以拖出去给别的项目用，你的别的蛇的项目？你抽象的越好，你这个类就越强大，强大到以后你随意的组合你写过的类就好了
    不过这个类还不够纯净，我看你还直接引用了maxX和sankeSize。仔细想想如果你有个_this.width以及_this.height，通过外面传进来，
    你是不是可以实现长方形的蛇？？而且别的类也不用局限自己一定要定义一个叫做snakeSzie的变量，他取任何名字都可以，只要他传给你，
    完成这些替换，这个类就足够的面对对象了，好好感受一下。
    */
    var _this=this;
    _this.color='red';
    _this.bodycolor='rgb(150,0,0)';
    _this.element = $("<div>");
    _this.element.css({'position': 'absolute','background-color':_this.color,'width':snakeSize,'height':snakeSize});
    $(parent).append(_this.element);
    _this.rest=function(){
        _this.length=0;
        _this.x=parseInt((Math.random()*maxX));
        _this.y=parseInt((Math.random()*maxY));
        _this.speedY=0;
        _this.speedX=0;
        _this.isAlive=true;
        _this.lastX=new Array();
        _this.lastY=new Array();
        _this.bodyElement=new Array();
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
        _this.element.css({"left":_this.x*snakeSize,"top":_this.y*snakeSize});
        for (var i = 0; i < _this.length; i++) {
            _this.bodyElement[i].css({'left':_this.lastX[i]*snakeSize,'top':_this.lastY[i]*snakeSize});
        }
    }
    _this.eat=function(x,y){
        if(_this.x==x && _this.y==y){
            _this.length++;
            return true;
        }
        else return false;
    }
    _this.Grow=function() {
        _this.bodyElement[_this.length-1] = $("<div>");
        _this.bodyElement[_this.length-1].css({'position': 'absolute','background-color':_this.bodycolor,'width':snakeSize,'height':snakeSize});
        _this.bodyElement[_this.length-1].css({'left':_this.lastX[_this,length]*snakeSize,'top':_this.lastY[_this,length]*snakeSize});
        $("#World").append(_this.bodyElement[_this.length-1]);
    }
    _this.removeBody=function(){
        for (var i = 0; i <_this.length; i++) {
            _this.bodyElement[i].remove();
        }
    }
    _this.bumpBody=function(){
        if(_this.x<0||_this.x>maxX||_this.y<0||_this.y>maxY){
            _this.isAlive=false;
            return;
        }
        for (var i = 4; i <= _this.length; i++) {
            if(_this.x==_this.lastX[i] && _this.y==_this.lastY[i]){
                _this.isAlive=false;
                return;
            }
        }
    }
}
