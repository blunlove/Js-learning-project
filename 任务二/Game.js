function gameStart(){
    var worldSizeX =800;
    var worldSizeY=600;
    var snakeSize=20;
    var foodSize=20;
    var score=0;
    var frame = 100;
    var speed = 1000/frame;
    var maxX=worldSizeX/snakeSize-1;
    var maxY=worldSizeY/snakeSize-1;
    var theWorld=$("#World");
    var theScore=$("#theScore");
    theWorld.css({'width':worldSizeX,'height': worldSizeY});
    theScore.css({'left':(worldSizeX/2-50),'top':(worldSizeY+30)}).text(score);
    var player1=new Snake(theWorld,'red','rgb(150,0,0)',snakeSize,snakeSize,maxX,maxY);
    var player2=new Snake(theWorld,'rgb(150,0,0)','red',snakeSize,snakeSize,maxX,maxY);
    var food=new Food(theWorld,'green',foodSize,foodSize,maxX,maxY);
    function snakeRest(){                //贪吃蛇刷新
        player1.rest();
        player2.rest();
    }
    snakeRest();
    function foodRest(p1,p2){            //食物刷新
        food.rest();
        while (true) {
            if(food.x!=p1.x&&food.y!=p1.y&&food.x!=p2.x&&food.y!=p2.y){
                return;
            }
            else {
                food.rest();
            }
        }
    }
    foodRest(player1,player2);
    function start(){                    //世界刷新
        function snakeStart(snake){
            snake.element.css({"left":snake.x*snakeSize,"top":snake.y*snakeSize});
            for (var i = 0; i < snake.length; i++) {
                snake.bodyElement[i].css({'left':snake.lastX[i]*snakeSize,'top':snake.lastY[i]*snakeSize});
            }
            if(snake.eat(food.x,food.y)){
                score=score+100;
                theScore.text(score);
                foodRest(player1,player2);
                food.rest();
            }
            snake.bumpBody();
            if(!snake.isAlive){
                alert("Game Over...");
                score=0;
                theScore.text(score);
                snakeRest();
                foodRest(player1,player2);
                food.rest();
            }
        }
        snakeStart(player1);             //开始更新player1的位置
        snakeStart(player2);             //开始更新player2的位置
    }
    var running= setInterval(start,speed);
    $(document).keydown(function(event){
        event.preventDefault();
        if(event.keyCode==37){
            player1.tempKey=37;
        }
        if(event.keyCode==38){
            player1.tempKey=38;
        }
        if(event.keyCode==39){
            player1.tempKey=39;
        }
        if(event.keyCode==40){
            player1.tempKey=40;
        }
        if(event.keyCode==65){
            player2.tempKey=37;
        }
        if(event.keyCode==87){
            player2.tempKey=38;
        }
        if(event.keyCode==68){
            player2.tempKey=39;
        }
        if(event.keyCode==83){
            player2.tempKey=40;
        }
    });
}