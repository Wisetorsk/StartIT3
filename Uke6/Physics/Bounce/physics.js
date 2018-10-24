// JavaScript source code
class Ball {
    constructor(mass, xInit, yInit, height, width) {
        this.mass = mass;
        this.height = height;
        this.width = width;
        this.x = xInit;
        this.y = yInit;
        this.xVelocity = 0;
        this.yVelocity = 0;
    }

    updatePosition(gravity) {
        this.x += this.xVelocity;
        this.xVelocity += gravity;
        this.y += this.yVelocity;
        if (this.x >= this.width || this.x < 0) { // Edge impact
            this.xVelocity = -this.xVelocity;
        }
        if (this.y >= this.height || this.y < 0) { // Edge impact
            this.yVelocity = -this.yVelocity;
        }
    }
}

class System {
    constructor(gravity, mass, height, width) {
        this.gravity = gravity;
        this.width = width;
        this.height = height;
        this.ball = new Ball(mass, width / 2, 50, height, width);
    }

    step() {
        this.ball.updatePosition(this.gravity);
    }
}

class Palette {
    constructor(canvasID) {
        this.id = canvasID;
        this.ctx = document.getElementById(this.id).getContext("2d");
        this.ctx.fillStyle = "#FF0000";
    }
}