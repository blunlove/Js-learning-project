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
        this.draw();
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
    update() {
        this.draw();
    }
    draw() {
        let canvas = document.getElementById("world");
        let context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(this.image, this.width * this.animation_K(), this.height * this.animation_direction, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    animation_K() {
        let nowTime = Date.now();
        if (nowTime - this.animation_lastTime >= this.animation_earchTime) {
            this.animation_lastTime = nowTime;
            this.animation_k++;
            this.animation_k = this.animation_k % 4;
        }
        return this.animation_k;
    }
}

const imageFromPath = path => {
    let img = new Image();
    img.src = path;
    return img;
}

const game = () => {
    let fps = 60;
    let man = new Man(image, 32, 48, 10, 10);
    let inputKeys = {
        Up: 'ArrowUp',
        Down: 'ArrowDown',
        Left: 'ArrowLeft',
        Right: 'ArrowRight',
    }
    let key;
    $(document).keydown(function (event) {
        key = event.key;
    });
    //有个bug
    // $(document).keyup(function (event) {
    //     key = null;
    // });
    setInterval(() => {
        if (key == inputKeys.Down) {
            man.goDown();
        }
        if (key == inputKeys.Left) {
            man.goLeft();
        }
        if (key == inputKeys.Right) {
            man.goRight();
        }
        if (key == inputKeys.Up) {
            man.goUp();
        }
        man.update();
    }, 1000 / fps);
}

let image = imageFromPath('man.png');
image.onload = () => {
    game();
};
