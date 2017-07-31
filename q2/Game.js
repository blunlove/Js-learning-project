function gameStart(){
    var worldSizeX = (($("body").width())*0.9-30);
    var worldSizeY = worldSizeX*0.75;
    var snakeSize = worldSizeX/40;
    var foodSize = worldSizeX/40;
    var frame = 100;
    var speed = 1000 / frame;
    var maxX = worldSizeX / snakeSize - 1;
    var maxY = worldSizeY / snakeSize - 1;
    var theWorld = $("#World");
    var theScore = $("#theScore");
    var theScore2 = $("#theScore2");
    var p1=$("#p1");
    var p2=$("#p2");
    var tempKey;
    var tempKey2;

    theWorld.css({'width' : worldSizeX,'height' : worldSizeY,'margin': '0 auto'});
    theScore.css({'left' : (worldSizeX/3-50), 'top' : (worldSizeY+30)}).text("0");
    theScore2.css({'left' : (worldSizeX/3*2-50), 'top' : (worldSizeY+30)}).text("0");
    p1.css({'left':(worldSizeX/3-15),'top' : (worldSizeY+80)});
    p2.css({'left':(worldSizeX/3*2-15),'top' : (worldSizeY+80)});
    var snake=new Snake(theWorld,'red','rgb(150,0,0)', snakeSize, snakeSize, maxX, maxY);
    var snake2=new Snake(theWorld, 'blue', 'blue', snakeSize, snakeSize, maxX, maxY);

    //蛇的初始帧数和刷新率
    var snakeBaseFrame=2;
    var s1Frame = snakeBaseFrame;
    var s2Frame = snakeBaseFrame;
    var s1Speed = 1000/s1Frame;
    var s2Speed = 1000/s2Frame;

    //用于记录时间间隔
    var lastS1Update = 0;
    var lastS2Update = 0;

    var food=new Food(theWorld, 'green', foodSize, foodSize, maxX, maxY);
    snake.rest();
    snake2.rest();

    //食物刷新
    function foodRest(){
        food.rest();
        while ((food.x == snake.x && food.y == snake.y ) || (food.x == snake2.x && food.y == snake2.y)) food.rest();
    }
    foodRest();
    function start(){
        var time = new Date().getTime();
        if (time - lastS1Update >= s1Speed) {
            lastS1Update = time;
            switch (tempKey) {
                case 37:
                snake.turnLeft();
                break;
                case 38:
                snake.turnUp();
                break;
                case 39:
                snake.turnRight();
                break;
                case 40:
                snake.turnDown();
                break;
            }
            snake.update();
            if(snake.eat(food.x, food.y)) {
                theScore.text(snake.length * 100);
                foodRest();
                s1Frame = s1Frame+0.5;
                s1Speed = 1000/s1Frame;
            }
            if(!snake.isAlive) {
                gameOver();
            }
        }
        if (time - lastS2Update >= s2Speed) {
            lastS2Update = time;
            switch (tempKey2) {
                case 65:
                snake2.turnLeft();
                break;
                case 87:
                snake2.turnUp();
                break;
                case 68:
                snake2.turnRight();
                break;
                case 83:
                snake2.turnDown();
                break;
            }
            snake2.update();
            if(snake2.eat(food.x,food.y)) {
                theScore2.text(snake2.length * 100);
                food.rest();
                foodRest();
                s2Frame = s2Frame+0.5;
                s2Speed = 1000/s2Frame;
            }
            if(!snake2.isAlive) {
                gameOver();
            }
        }
    }

    //结束游戏并重置蛇的属性
    function gameOver() {
        alert("Game Over...");
        tempKey = null;
        tempKey2 = null; 
        theScore.text("0");
        theScore2.text("0");
        snake.removeBody();
        snake.rest();
        snake2.removeBody();
        snake2.rest();
        foodRest();
        s1Frame = snakeBaseFrame;
        s2Frame = snakeBaseFrame;
        s1Speed = 1000/s1Frame;
        s2Speed = 1000/s2Frame;
    }

    //世界刷新计时器
    setInterval(start, speed);
    $(document).keydown(function(event) {
        event.preventDefault();
        if(event.keyCode==37||event.keyCode==38||event.keyCode==39||event.keyCode==40){
            tempKey = event.keyCode;
        }
        if(event.keyCode==65||event.keyCode==87||event.keyCode==68||event.keyCode==83){
            tempKey2 = event.keyCode;
        }
    });

    //根据窗口大小调整世界的比例
    $(window).resize(function(){
        var worldSizeX = (($("body").width())*0.9-30);
        var worldSizeY = worldSizeX*0.75;
        var snakeSize = worldSizeX/40;
        var foodSize = worldSizeX/40;
        theWorld.css({'width' : worldSizeX,'height' : worldSizeY});
        theScore.css({'left' : (worldSizeX/3-50), 'top' : (worldSizeY+30)})
        theScore2.css({'left' : (worldSizeX/3*2-50), 'top' : (worldSizeY+30)})
        p1.css({'left':(worldSizeX/3-15),'top' : (worldSizeY+80)});
        p2.css({'left':(worldSizeX/3*2-15),'top' : (worldSizeY+80)});
        snake.updateSize(snakeSize,snakeSize);
        snake2.updateSize(snakeSize,snakeSize);
        food.updateSize(snakeSize,snakeSize);
    });
}