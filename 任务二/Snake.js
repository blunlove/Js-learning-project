//你这里相当于new 一个类的实例出来然后对其进行赋值了，苹果这个概念和一个苹果不是一个东西，我希望你创造的是一个概念
//事实上在js中，我们往往是这么定义一个类的:
/*
function Snake() {
    _this.size = 20;
    _this.x = 0;
    _this.y = 0;
    _this.speedX = 0;
    _this.speedY = 0;
    _this.color = 'red'
    _this.isAlive = true;

    //这段就相当于构造函数了，我觉得既然蛇作为一个new出来的对象，应该是在new出来的时候画到屏幕上更合适
    //如果以后要有两条蛇，你也只需要在外面多new一条出来，而不用去改什么html
    _this.element = $('<div>');
    _this.element.css("background-color", _this.color);
    _this.element.css("width",_this.size);
    _this.element.css("height",_this.size);
    $('body').append(_this.element);

    _this.turnLeft = function() {
        _this.speedX = -1;
        _this.speedY = 0;
    }

    _this.turnRight = function() {
        _this.speedX = 1;
        _this.speedY = 0;
    }

    _this.turnTop = function() {
        _this.speedX = 0;
        _this.speedY = 1;
    }

    _this.turnBottom = function() {
        _this.speedX = 0;
        _this.speedY = -1;
    }

    _this.update = function() {
        _this.x = _this.x + _this.speed * _this.size;
        _this.y = _this.y + _this.speed * _this.size;

        if (_this.x > screenWidth || _this.x < 0 || _this.y > screenHeight || _this.y < 0) {
            _this.isAlive = false;
            return;
        }
       _this.element.css("left",_this.x);
       _this.element.css("right",_this.y);
    }

    _this.eat = function(x , y) {
        if (_this.x == x && _this.y == y) return true;
        else return false;
    }
} 
*/


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

/*
    我觉得蛇内部不应该监听键盘，这个是游戏逻辑，但是蛇会移动，所以蛇有转向方法。参考上面
    你跑的时候就要吃东西吗？？这东西可不是蛇做的事情，你放到game.js处理吃东西的逻辑是不是
    更合适，因为在那里，他是知道蛇跟食物的。（万一我要让你吃另外一种食物或者别的呢，对蛇来说只有一个eat
    方法，因为吃是蛇的本事，吃什么传进来，比如这里你可以直接传食物的x、y坐标，这样蛇的吃方法就只判断是否
    等于自己的坐标，如果是则返回true,否则false。然后game.js根据这个来决定刷新food位置
    */
