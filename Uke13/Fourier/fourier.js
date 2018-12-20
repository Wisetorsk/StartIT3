let time = 0;

class Fourier {
    constructor(x, y, rate, canvas) {
        this.time = 0;
        this.step = rate;  // Time step
        this.radius = 50;
        this.offset = { x: x, y: y };
        this.wave = [];
        this.canvas = document.getElementById(canvas);
        this.ctx = this.canvas.getContext("2d");
        this.ctx.fillStyle = "#FF0000";
        this.drawCircle(this.offset.x, this.offset.y, this.radius);
    }

    drawCircle(x, y, r) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    drawLine(xS, yS, xE, yE) {
        this.ctx.beginPath();
        this.ctx.moveTo(xS, yS);
        this.ctx.lineTo(xE, yE);
        this.ctx.stroke();
    }

    drawPoint(x, y) {
        this.ctx.fillRect(x, y, 1, 1);
    }

    oneStep() {
        this.cls();
        this.drawCircle(this.offset.x, this.offset.y, this.radius);
        this.time += this.step;
        let coor = this.point(this.radius, this.time);
        this.addY(coor.y);
        this.drawCircle(this.offset.x + coor.x, this.offset.y + coor.y, 5);
        this.drawLine(this.offset.x * 2, this.offset.y + coor.y, coor.x + this.offset.x, this.offset.y + coor.y);
        this.drawCircle(this.offset.x * 2, this.offset.y + coor.y, 5);
        this.drawWave();
    }

    cls() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    point(r, time) {
        /*Returns the x and y coordinates of the point at a given time as it traverses the circular path*/
        return { x: r * Math.cos(time), y: r * Math.sin(time) };
    }

    addY(y) {
        this.wave.unshift(y);
        if (this.wave.length > 200) {
            this.wave.splice(-1);
        }
    }

    drawWave() {
        for (let i = 0; i < this.wave.length; i++) {
            this.drawPoint(i + this.offset.x*2, this.offset.y + this.wave[i]);
            // Draw the resulting wave
        }
    }
}