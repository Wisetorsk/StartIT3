// JavaScript source code
let palette;
class Ball {
    constructor(mass, xInit, yInit, radius, height, width, xVelInit = Math.floor(Math.random() * 100), yVelInit = -Math.floor(Math.random() *150)) {
        this.mass = mass;
        this.height = height;
        this.width = width;
        this.radius = radius;
        this.x = xInit;
        this.y = yInit;
        this.xVelocity = xVelInit;
        this.yVelocity = yVelInit;
    }

    updatePosition(gravity, decay) {
        this.x += this.xVelocity;
        this.yVelocity += gravity;
        
        this.xVelocity *= decay;
        this.yVelocity *= decay;
        this.y += this.yVelocity;
        if (this.x >= this.width) { // Edge impact
            this.xVelocity = -this.xVelocity;
        } else if (this.x < 0) {
            this.xVelocity = -this.xVelocity;
        }
        if (this.y >= (this.height)) { // Edge impact
            this.yVelocity = -this.yVelocity;
            this.y = this.height;

        } else if (this.y < 0) {
            this.yVelocity = -this.yVelocity;
            this.y = 0;
        }
        if (this.x > this.width) {
            this.x = this.width;
        }
            else if (this.x < 0) {
            this.x = 0;
        }
    }
}

class System {
    constructor(gravity, mass, radius, height, width) {
        this.gravity = gravity;
        this.width = width;
        this.height = height;
        this.ball = new Ball(mass, width/2, height/2, radius, height, width);
        this.interval = setInterval(updateSimulation, 20);
    }

    update(ctx) {
        ctx.clearRect(0, 0, this.width, this.height);
        this.ball.updatePosition(this.gravity, 0.985);
        
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
        this.system = new System(9.81, 10, 20, 600, 600);
    }

    oneFrame() {
        this.system.update(this.ctx);
    }
}

updateSimulation = function () {
    try {
        palette.oneFrame();
    } catch (err) {
        clearInterval(palette.system.interval);
        console.log(err);
    }
}

function main() {
    palette = new Palette("canvas");
}
