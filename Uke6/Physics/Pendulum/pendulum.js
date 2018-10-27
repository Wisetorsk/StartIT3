// JavaScript source code
// Model
class Ball {
    constructor(mass, radius, x, y) {
        this.mass = mass;
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
}

class String {
    constructor(length, theta, x0, y0) {
        this.l = length;
        this.theta = theta;
        this.x1 = x0;
        this.x2 = Math.cos(this.theta) * this.l;
        this.y1 = y0;
        this.y2 = Math.sin(this.theta) * this.l;
    }
}

class Simulation {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.elements = [];
    }
}

// End Model


// View
class Window {
    constructor(width, height, id) {
        this.width = width;
        this.height = height;
        this.id = id;
        this.buildCanvas();
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.sim = new Simulation(this.with, this.height);
    }

    buildCanvas() {
        /* Builds the canvas element*/
        var html = '<canvas height="' + this.height + '" width="%' + this.width + '" id="' + this.id + '"></canvas>';
        var container = document.getElementById("canvasContainer");
        container.innerHTML = html;
    }
}

// End View


// Controller 

class Controller {
    constructor(width, height, id) {
        this.window = new Window(width, height, id);
    }
}

// End Controller

function main() {
    var controller = new Controller(600, 600, "canvas");
}