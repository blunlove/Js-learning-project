//你这里相当于new 一个类的实例出来然后对其进行赋值了，苹果这个概念和一个苹果不是一个东西，我希望你创造的是一个概念
//事实上在js中，我们往往是这么定义一个类的:
/*
function Snake() {
    this.size = 20;
    this.x = 0;
    this.y = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.color = 'red'
    this.isAlive = true;

    //这段就相当于构造函数了，我觉得既然蛇作为一个new出来的对象，应该是在new出来的时候画到屏幕上更合适
    //如果以后要有两条蛇，你也只需要在外面多new一条出来，而不用去改什么html
    this.element = $('<div>');
    this.element.css("background-color", this.color);
    this.element.css("width",this.size);
    this.element.css("height",this.size);
    $('body').append(this.element);

    this.turnLeft = function() {
        this.speedX = -1;
        this.speedY = 0;
    }

    this.turnRight = function() {
        this.speedX = 1;
        this.speedY = 0;
    }

    this.turnTop = function() {
        this.speedX = 0;
        this.speedY = 1;
    }

    this.turnBottom = function() {
        this.speedX = 0;
        this.speedY = -1;
    }

    this.update = function() {
        this.x = this.x + this.speed * this.size;
        this.y = this.y + this.speed * this.size;

        if (this.x > screenWidth || this.x < 0 || this.y > screenHeight || this.y < 0) {
            this.isAlive = false;
            return;
        }
       this.element.css("left",this.x);
       this.element.css("right",this.y);
    }

    this.eat = function(x , y) {
        if (this.x == x && this.y == y) return true;
        else return false;
    }
} 
*/


function Snake(){
    this.color='red';
    this.element = $('<div></div>');
    this.element.css({'position': 'absolute','background-color':this.color,'width':snakeSize,'height':snakeSize});
    $("#World").append(this.element);
    this.rest=function(){
        this.length=1;
        this.x=parseInt((Math.random()*maxX));
        this.y=parseInt((Math.random()*maxY));
        this.speedY=0;
        this.speedX=0;
        this.isAlive=true;
        this.lastX=new Array();
        this.lastY=new Array();
        this.element.css({"left":this.x*snakeSize,"top":this.y*snakeSize});
    }
    this.turnLeft=function(){
        if(this.speedX==1){return;}
        this.speedX=-1;
        this.speedY=0;
    }
    this.turnRight=function(){
        if(this.speedX==-1){return;}
        this.speedX=1;
        this.speedY=0;
    }
    this.turnUp=function(){
        if(this.speedY==1){return;}
        this.speedX=0;
        this.speedY=-1;
    }
    this.turnDown=function(){
        if(this.speedY==-1){return;}
        this.speedX=0;
        this.speedY=1;
    }
    this.upDate=function(){
        this.x=this.x+this.speedX;
        this.y=this.y+this.speedY;
        this.element.css({"left":this.x*snakeSize,"top":this.y*snakeSize});
        if(this.x<0||this.x>maxX||this.y<0||this.y>maxY){
            this.isAlive=false;
            return;
        }
    }
    this.eat=function(x,y){
        if(this.x==x && this.y==y){
            this.length++;
            return true;
        }
        else return false;
    }
}
/*function Grow () {

}*/

/*
 我觉得蛇内部不应该监听键盘，这个是游戏逻辑，但是蛇会移动，所以蛇有转向方法。参考上面
 */
/*
 function Running () {
    if (Snake.direction==1) {
        Snake.lastDirection=Snake.direction;
        Snake.lastPositionX[1]=Snake.lastPositionX[0];
        Snake.lastPositionX[0]=Snake.lastPositionX[0]-1;
        $(".Snake").css({'left':(Snake.lastPositionX[0])*Snake.size});
        if(Snake.lastPositionX[1]==0){
            GameOver();
        }
    }
    if (Snake.direction==3) {
        Snake.lastPositionX[1]=Snake.lastPositionX[0];
        Snake.lastPositionX[0]=Snake.lastPositionX[0]+1;
        $(".Snake").css({'left':(Snake.lastPositionX[0])*Snake.size});
        if(Snake.lastPositionX[1]==Snake.maxX){
            GameOver();
        }
    }
    if (Snake.direction==2) {
        Snake.lastPositionY[1]=Snake.lastPositionY[0];
        Snake.lastPositionY[0]=Snake.lastPositionY[0]-1;
        $(".Snake").css({'top':(Snake.lastPositionY[0])*Snake.size});
        if(Snake.lastPositionY[1]==0){
            GameOver();
        }
    }
    if (Snake.direction==4) {
        Snake.lastPositionY[1]=Snake.lastPositionY[0];
        Snake.lastPositionY[0]=Snake.lastPositionY[0]+1;
        $(".Snake").css({'top':(Snake.lastPositionY[0])*Snake.size});
        if(Snake.lastPositionY[1]==Snake.maxY){
            GameOver();
        }
    }
}*/
    /*
    你跑的时候就要吃东西吗？？这东西可不是蛇做的事情，你放到game.js处理吃东西的逻辑是不是
    更合适，因为在那里，他是知道蛇跟食物的。（万一我要让你吃另外一种食物或者别的呢，对蛇来说只有一个eat
    方法，因为吃是蛇的本事，吃什么传进来，比如这里你可以直接传食物的x、y坐标，这样蛇的吃方法就只判断是否
    等于自己的坐标，如果是则返回true,否则false。然后game.js根据这个来决定刷新food位置
    */
