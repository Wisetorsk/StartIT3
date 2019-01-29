class Rose {
    constructor(steps, k, factor=2) {
        this.k = k;
        this.steps = steps;
        this.points = {
            x: [],
            y: []
        }
        this.factor = factor;
        this.canvas = new Painter("rose");
        this.calculate();
        this.canvas.drawShape(this.points);
    }

    calculate() {
        this.points.x = [...Array(this.steps).keys()].map(theta => this.stepX(theta));
        this.points.y = [...Array(this.steps).keys()].map(theta => this.stepY(theta));
    }

    stepX(theta) {
        return (350 * Math.cos(theta / this.steps * Math.PI * this.factor * this.k) * Math.cos(theta / this.steps * Math.PI * this.factor)) + 400;
    }

    stepY(theta) {
        return (350 * Math.cos(theta / this.steps * Math.PI * this.factor * this.k) * Math.sin(theta / this.steps * Math.PI * this.factor)) + 400;
    }
}


class Painter {
    constructor(identity) {
        this.ctx = document.getElementById(identity).getContext("2d");
    }

    drawShape(xy) {
        console.log('draw');
        this.ctx.clearRect(0, 0, 800, 800);
        this.ctx.beginPath();
        for (let index = 0; index < xy.x.length; index++) {
            let x = xy.x[index];
            let y = xy.y[index];
            this.ctx.lineTo(x, y);
        }
        this.ctx.stroke();
    }
}

function drawRose() {
    let k = eval(document.getElementById('k').value);
    let steps = parseFloat(document.getElementById('steps').value);
    let factor = parseInt(document.getElementById('factor').value);
    new Rose(steps, k, factor);
    var str = "Parameters: K:\t" + k + "\nSteps:\t" + steps + "\nDrawn over factor of PI:\t" + factor;
    console.log(str);

}

