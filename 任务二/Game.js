function gameStart(){
    //var running1=null;
    //var running2=null;
    var worldSizeX =800;
    var worldSizeY=600;
    var snakeSize=20;
    var foodSize=20;
    var frame = 100;
    var speed = 1000/frame;
    var maxX=worldSizeX/snakeSize-1;
    var maxY=worldSizeY/snakeSize-1;
    var theWorld=$("#World");
    var theScore=$("#theScore");
    theWorld.css({'width':worldSizeX,'height': worldSizeY});
    theScore.css({'left':(worldSizeX/2-50),'top':(worldSizeY+30)}).text("0");
    var snake=new Snake(theWorld,'red','rgb(150,0,0)',snakeSize,snakeSize,maxX,maxY);
    var snake2=new Snake(theWorld,'rgb(150,0,0)','red',snakeSize,snakeSize,maxX,maxY);
    function snakeRest(){
        snake.rest();
        snake2.rest();
    }
    snakeRest();
    var food=new Food(theWorld,'green',foodSize,foodSize,maxX,maxY);
    food.rest();
    if (food.x==snake.x&&food.y==snake.y)food.rest();
    function start(){
        function snakeStart(snake){
            snake.element.css({"left":snake.x*snakeSize,"top":snake.y*snakeSize});
            for (var i = 0; i < snake.length; i++) {
                snake.bodyElement[i].css({'left':snake.lastX[i]*snakeSize,'top':snake.lastY[i]*snakeSize});
            }
            if(snake.eat(food.x,food.y)){
                theScore.text(snake.length*100);
                food.rest();
                if(food.x==snake.x&&food.y==snake.y){
                    food.rest();
                }
                for (var i = 0; i < snake.length; i++) {
                    if(food.x==snake.lastX[i]&&food.y==snake.lastY[i]){
                        food.rest();
                    }
                }
            }
            snake.bumpBody();
            if(!snake.isAlive){
                alert("Game Over...");
                theScore.text("0");
                snakeRest();
                food.rest();
            }
        }
        snakeStart(snake);
        snakeStart(snake2);
    }
    var running= setInterval(start,speed);
    $(document).keydown(function(event){
        event.preventDefault();
        if(event.keyCode==37){
            snake.tempKey=37;
        }
        if(event.keyCode==38){
            snake.tempKey=38;
        }
        if(event.keyCode==39){
            snake.tempKey=39;
        }
        if(event.keyCode==40){
            snake.tempKey=40;
        }
        if(event.keyCode==65){
            snake2.tempKey=37;
        }
        if(event.keyCode==87){
            snake2.tempKey=38;
        }
        if(event.keyCode==68){
            snake2.tempKey=39;
        }
        if(event.keyCode==83){
            snake2.tempKey=40;
        }
    });
}