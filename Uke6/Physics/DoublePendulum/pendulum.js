// JavaScript source code
let system, view;

class Pendulum {
    constructor(radius, theta, width, mass) {
        this.radius = radius;
        this.mass = mass;
        this.yVelocity = 0;
        this.xVelocity = 0;
        this.yAcc = 0;
        this.xAcc = 0;
        this.theta = theta;
        this.thetaV = 0;
        this.thetaA = 0;
        this.x = width / 2;
        this.y = 0;
    }

    calculate() {
        this.theta += this.thetaV * 0.05;
        this.thetaV += this.thetaA * 0.05;
        this.x = this.radius * Math.sin(this.theta);
        this.y = this.radius * Math.cos(this.theta);
    }

}

class System {
    constructor(gravity, width, height) {
        this.gravity = gravity;
        this.width = width;
        this.height = height;
        this.x = width/2;
        this.y = 0;
        this.radius = 100;
    }

    updatePosition() {
        this.updateTheta();
    }

    updateTheta() {

    }
    }
}

class View {
    constructor(canvas) {
        this.id = canvas;
        this.ctx = document.getElementById(this.id).getContext("2d");
        this.ctx.fillStyle = "#FF0000";
        this.ctx.strokeStyle = "#FFFFFF";
    }

    update(system) {
        system.updatePosition();
        for (var element in system.elements) {
            this.ctx.fillRect(system.elements[element].x, system.elements[element].y, 20, 20);
        }
    }
}


function main() {

        system.updatePosition();
        view.update(system);
}

system = new System(2, 9.81, 100, 600, 600);
view = new View("viewCanvas");
system.loadPoints();