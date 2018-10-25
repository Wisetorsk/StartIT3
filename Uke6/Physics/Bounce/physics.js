// JavaScript source code
let palette;
class Ball {
    constructor(mass, xInit, yInit, radius, height, width, xVelInit=50, yVelInit=-100) {
        this.mass = mass;
        this.height = height;
        this.width = width;
        this.radius = radius;
        this.x = xInit;
        this.y = yInit;
        this.xVelocity = xVelInit;
        this.yVelocity = yVelInit;
    }

    updatePosition(gravity) {
        this.x += this.xVelocity;
        this.x *= 0.96;
        this.yVelocity += gravity;
        this.y += this.yVelocity;
        if (this.x >= this.width || this.x < 10) { // Edge impact
            this.xVelocity = -this.xVelocity;
            console.log("reverse x");
        }
        if (this.y >= this.height || this.y < 10) { // Edge impact
            this.yVelocity = -this.yVelocity;
            this.y = this.height;
            console.log("reverse y");
            console.log(this.y);
        }
    }
}

class System {
    constructor(gravity, mass, radius, height, width) {
        this.gravity = gravity;
        this.width = width;
        this.height = height;
        this.ball = new Ball(mass, 150, 0, radius, height, width);
        this.interval = setInterval(updateSimulation, 20);
    }

    update(ctx) {
        ctx.clearRect(0, 0, this.width, this.height);
        this.ball.updatePosition(this.gravity)
        
        ctx.beginPath();
        ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "red";
        ctx.fill();
    }

}

class Palette {
    constructor(canvasID) {
        this.id = canvasID;
        this.ctx = document.getElementById(this.id).getContext("2d");
        this.ctx.fillStyle = "#FF0000";
        this.system = new System(9.81, 10, 10, 600, 600);
    }

    oneFrame() {
        this.system.update(this.ctx);
    }
}

updateSimulation = function () {
    palette.oneFrame();
}

function main() {
    palette = new Palette("canvas");
}
