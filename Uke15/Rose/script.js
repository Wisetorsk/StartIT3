class Rose {
    constructor(steps, k) {
        this.k = k;
        this.steps = steps;
        this.points = {
            x: [],
            y: []
        }
        this.canvas = new Painter("rose");
        this.calculate();
        this.canvas.drawShape(this.points);
    }

    calculate() {
        this.points.x = [...Array(this.steps).keys()].map(theta => Math.cos(theta / this.steps * Math.PI * 2 * this.k) * Math.cos(theta / this.steps * Math.PI * 2)).map(i => i * 400).map(i => i + 400);
        this.points.y = [...Array(this.steps).keys()].map(theta => Math.cos(theta / this.steps * Math.PI * 2 * this.k) * Math.sin(theta / this.steps * Math.PI * 2)).map(i => i * 400).map(i => i + 400);
    }
}


class Painter {
    constructor(identity) {
        this.ctx = document.getElementById(identity).getContext("2d");
    }

    drawShape(xy) {
        console.log('draw');
        this.ctx.clearRect(0, 0, 800, 800);
        for (let index = 0; index < xy.x.length; index++) {
            let x = xy.x[index];
            let y = xy.y[index];
            this.ctx.lineTo(x, y);
        }
        this.ctx.stroke();
    }
}

let rose = new Rose(1000, 9);
