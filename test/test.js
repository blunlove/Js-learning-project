let log = console.log.bind(console)

class Man {
    constructor(image, width, height, x, y) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
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
    goLeft() {
        this.directionX = -1;
        this.directionY = 0;
        this.animation_direction = 1;
        this.move();
    }
    goRight() {
        this.directionX = 1;
        this.directionY = 0;
        this.animation_direction = 2;
        this.move();
    }
    goUp() {
        this.directionX = 0;
        this.directionY = -1;
        this.animation_direction = 3;
        this.move();
    }
    goDown() {
        this.directionX = 0;
        this.directionY = 1;
        this.animation_direction = 0;
        this.move();
    }
    move() {
        let nowTime = Date.now();
        if (nowTime - this.lastTime >= this.dTime) {
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
        if (x < 0 || x > 400 - this.width) {
            return true;
        }
        if (y < 0 || y > 300 - this.height) {
            return true;
        }
    }
    animation_K() {
        let nowTime = Date.now();
        if (nowTime - this.animation_lastTime >= this.animation_earchTime && this.isMove) {
            this.animation_lastTime = nowTime;
            this.animation_k++;
            this.animation_k = this.animation_k % 4;
        }
        return this.animation_k;
    }
}

class Game {
    constructor() {
        this.actions = {};
        this.keydowns = {};
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
const _main = () => {
    let canvas = document.getElementById("world");
    let context = canvas.getContext("2d");
    let fps = 60;
    let game = new Game();
    //注册按键
    game.regiserAction('ArrowUp', () => {
        man.goUp();
    });
    game.regiserAction('ArrowDown', () => {
        man.goDown();
    });
    game.regiserAction('ArrowLeft', () => {
        man.goLeft();
    });
    game.regiserAction('ArrowRight', () => {
        man.goRight();
    });
    //监听键盘哪个键被按下
    window.addEventListener('keydown', event => {
        game.keydowns[event.key] = true;
    });
    window.addEventListener('keyup', event => {
        delete game.keydowns[event.key];
    });
    let man = new Man(image, 32, 48, 10, 10);
    context.drawImage(man.image, man.width * man.animation_K(), man.height * man.animation_direction, man.width, man.height, man.x, man.y, man.width, man.height);
    setInterval(() => {
        let keydowns = Object.keys(game.keydowns);
        let lastKey = keydowns[keydowns.length - 1];
        if (lastKey) {
            man.isMove = true;
            game.actions[lastKey]();
        } else {
            man.isMove = false;
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(man.image, man.width * man.animation_K(), man.height * man.animation_direction, man.width, man.height, man.x, man.y, man.width, man.height);
    }, 1000 / fps);
}

let image = imageFromPath('man.png');
_main();
