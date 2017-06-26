function gameStart(){
    var worldSizeX = 800;
    var worldSizeY = 600;
    var snakeSize = 20;
    var foodSize = 20;
    var frame = 60;
    var speed = 1000 / frame;
    var maxX = worldSizeX / snakeSize - 1;
    var maxY = worldSizeY / snakeSize - 1;
    var theWorld = $("#World");
    var theScore = $("#theScore");
    var tempKey;
    var tempKey2;

    theWorld.css({'width' : worldSizeX,'height' : worldSizeY});
    theScore.css({'left' : (worldSizeX/2-50), 'top' : (worldSizeY+30)}).text("0");
    var snake=new Snake(theWorld,'red','rgb(150,0,0)', snakeSize, snakeSize, maxX, maxY);
    var snake2=new Snake(theWorld, 'blue', 'blue', snakeSize, snakeSize, maxX, maxY);

    var snakeBaseFrame=2;
    var snakeBaseSpeed = 1000/snakeFrame; // 初始速度 500ms 移动一次
    //var foodAcc = 20; // 吃一个食物缩短20ms移动间隔
    var s1Frame = snakeBaseFrame;
    var s2Frame = snakeBaseFrame;
    var s1Speed = snakeBaseSpeed/snakeBaseFrame;
    var s2Speed = snakeBaseSpeed/snakeBaseFrame;

    //用于记录时间间隔
    var lastS1Update = 0;
    var lastS2Update = 0;

    var food=new Food(theWorld, 'green', foodSize, foodSize, maxX, maxY);
    snake.rest();
    snake2.rest();
    function foodRest(){
        food.rest();
        while ((food.x == snake.x && food.y == snake.y ) || (food.x == snake2.x && food.y == snake2.y)) food.rest();
    }
    foodRest();
    function start(){
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

        var time = new Date().getTime();
        if (time - lastS1Update >= s1Speed) {
            lastS1Update = time;
            snake.update();
            if(snake.eat(food.x, food.y)) {
                theScore.text(snake.length * 100);
                foodRest();
                s1Frame = s1Frame+0.5;
                s1Speed = s1Speed/s1Frame;
            }
            if(!snake.isAlive) {
                gameOver();
            }
        }

        if (time - lastS2Update >= s2Speed) {
            lastS2Update = time;
            snake2.update();
            if(snake2.eat(food.x,food.y)) {
                theScore.text(snake2.length * 100);
                food.rest();
                foodRest();
                s2Frame = s2Frame+0.5;
                s2Speed = s2Speed/s2Frame;
            }
            if(!snake.isAlive) {
                gameOver();
            }
        }
    }

    function gameOver() {
        alert("Game Over...");
        tempKey = null;
        tempKey2 = null; 
        theScore.text("0");
        snake.removeBody();
        snake.rest();
        snake2.removeBody();
        snake2.rest();
        foodRest();
    }

    setInterval(start, speed);
    $(document).keydown(function(event) {
        event.preventDefault();
        tempKey = event.keyCode;
        tempKey2 = event.keyCode;
    });
}