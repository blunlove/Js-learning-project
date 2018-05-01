let log = console.log.bind(console)

class Man {
    constructor(image, width, height, k, x, y, worldX, worldY) {
        //缓存参数
        this.image = image;
        this.width = width;
        this.height = height;
        this.k = k;
        this.x = x;
        this.y = y;
        this.worldX = worldX;
        this.worldY = worldY;
        //初始化配置
        this.restState();
    }
    restState() {
        this.animation_k = 0;
        this.animation_direction = 0;
        this.animation_time = 1000;
        this.animation_frame = 4;
        this.animation_earchTime = this.animation_time / this.animation_frame;
        this.animation_lastTime = Date.now();
        this.min_distance = 1;
        this.frame = 1000;
        this.directionX = 0;
        this.directionY = 0;
        this.dTime = 1000 / this.frame;
        this.lastTime = Date.now();
        this.isMove = false;
    }
    turnLeft() {
        this.directionX = -1;
        this.directionY = 0;
        this.animation_direction = 1;
    }
    turnRight() {
        this.directionX = 1;
        this.directionY = 0;
        this.animation_direction = 2;
    }
    turnUp() {
        this.directionX = 0;
        this.directionY = -1;
        this.animation_direction = 3;
    }
    turnDown() {
        this.directionX = 0;
        this.directionY = 1;
        this.animation_direction = 0;
    }
    update() {
        this.move();
        this.animation();
    }
    stop() {
        this.isMove = false;
        this.directionX = 0;
        this.directionY = 0;
        this.animation_k = 0;
    }
    moving() {
        this.isMove = true;
    }
    move() {
        let nowTime = Date.now();
        if (nowTime - this.lastTime >= this.dTime && this.isMove) {
            this.lastTime = nowTime;
            let newX = this.x + this.directionX * this.min_distance;
            let newY = this.y + this.directionY * this.min_distance;
            if (!this.bumpBody(newX, newY)) {
                this.x = newX;
                this.y = newY;
            }
        }
    }
    bumpBody(x, y) {
        if (x < 0 || x > this.worldX - this.width) {
            return true;
        }
        if (y < 0 || y > this.worldY - this.height) {
            return true;
        }
    }
    animation() {
        let nowTime = Date.now();
        if (nowTime - this.animation_lastTime >= this.animation_earchTime && this.isMove) {
            this.animation_lastTime = nowTime;
            this.animation_k++;
            this.animation_k = this.animation_k % this.k;
        }
    }
}

class Game {
    constructor() {
        this.actions = {};
        this.keydowns = {};
        //监听键盘哪个键被按下
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true;
        });
        window.addEventListener('keyup', event => {
            delete this.keydowns[event.key];
        });
    }
    regiserAction(key, callback) {
        this.actions[key] = callback;
    }
}

const imageFromPath = path => {
    let img = new Image();
    img.src = path;
    return img;
}

const draw = (context, object) => {
    context.drawImage(object.image,
        object.width * object.animation_k,
        object.height * object.animation_direction,
        object.width, object.height, object.x, object.y,
        object.width, object.height);
}

const random = max => Math.floor(Math.random() * (max));

const _main = () => {
    let canvas = document.getElementById("world");
    let context = canvas.getContext("2d");
    let image = imageFromPath('man.png');
    let fps = 60;
    let game = new Game();
    let man = new Man(image, 32, 48, 4, random(canvas.width - 32), random(canvas.height - 48), canvas.width, canvas.height);
    //注册按键
    game.regiserAction('ArrowUp', () => man.turnUp());
    game.regiserAction('ArrowDown', () => man.turnDown());
    game.regiserAction('ArrowLeft', () => man.turnLeft());
    game.regiserAction('ArrowRight', () => man.turnRight());
    draw(context, man);
    setInterval(() => {
        let keydowns = Object.keys(game.keydowns);
        let lastKey = keydowns[keydowns.length - 1];
        if (lastKey && game.actions[lastKey]) {
            man.moving();
            game.actions[lastKey]();
        } else {
            man.stop();
        }
        man.update();
        context.clearRect(0, 0, canvas.width, canvas.height);
        draw(context, man);
    }, 1000 / fps);
}
_main();