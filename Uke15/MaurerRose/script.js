
class Maurer {
    constructor(n, maurer, d, size, gg) {
        this.n = n;
        this.d = d;
        this.k = n / d;
        this.x = 0;
        this.y = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.maurer = maurer;
        this.size = size;
        this.gg = gg;
        this.ctx = document.getElementById('maurer').getContext("2d");
        this.xStart = 800 / 2;
        this.yStart = 800 / 2;
        this.calculate();
    }

    calculate() {
        //let fi = this.indexes.map(i => (i * this.maurer) * Math.PI / 180);
        //let r = this.fi.map(i => Math.sin(-this.k * i) * (this.xStart - 20));
        //this.points.x = this.indexes.map(i => this.xStart + r[i] * Math.cos(fi[i]));
        //this.points.y = this.indexes.map(i => this.yStart + r[i] * Math.sin(fi[i]));
        for (let i = 0; i <= 3600; i++) {
            this.ctx.beginPath();
            let fi = this.maurer * i * Math.PI / 180;
            let r = Math.sin(-this.k * fi) * this.size + Math.round(this.gg);
            this.x = this.xStart + r + Math.cos(fi);
            this.y = this.yStart + r + Math.sin(fi);
            if (i === 0) {
                this.ctx.moveTo(this.x, this.y);
            } else {
                this.ctx.moveTo(this.lastX, this.lastY);
            }
            this.lastX = this.x;
            this.lastY = this.y;
            this.ctx.lineTo(this.x, this.y);
            this.ctx.stroke();
        }
    }
}


const canvas = document.getElementById('rose')
const cx = canvas.getContext('2d')

let r, x, y, fi, deg
let settings = {
    n: 2,
    d: 20,
    maurer: 71,
    size: 400,
    rotate: 0,
    gg: 0,
    drawMaurer: true,
    drawRose: false
}

let xStart, yStart

window.addEventListener('resize', () => {
    canvas.width = document.body.offsetWidth
    canvas.height = document.body.offsetHeight

    xStart = canvas.width / 2
    yStart = canvas.height / 2
    draw()
})

canvas.width = document.body.offsetWidth
canvas.height = document.body.offsetHeight
xStart = canvas.width / 2
yStart = canvas.height / 2

cx.lineCap = 'round'

function draw() {
    const {
        n,
        d,
        maurer,
        size,
        gg,
        drawMaurer,
        drawRose
    } = settings

    let k = n / d
    cx.clearRect(0, 0, canvas.width, canvas.height)
    // connecting rose on angle
    if (drawMaurer) {
        for (let i = 0; i <= 3600; i++) {
            cx.strokeStyle = 'black'
            cx.lineWidth = 0.5
            cx.beginPath()
            fi = maurer * i * Math.PI / 180
            r = Math.sin(-k * fi) * size + Math.round(gg)
            x = xStart + r * Math.cos(fi)
            y = yStart + r * Math.sin(fi)
            if (i === 0) {
                cx.moveTo(x, y)
            } else {
                cx.moveTo(xPrev, yPrev)
            }
            xPrev = x
            yPrev = y
            cx.lineTo(x, y)
            cx.stroke()
        }
    }
    // drawing rose
    if (drawRose) {
        cx.beginPath()
        cx.strokeStyle = 'red'
        cx.lineWidth = 0.1
        for (let a = 0; a < 3600 * Math.ceil(d); a++) {
            deg = a * Math.PI / 180
            r = Math.sin(-k * deg - rotate) * size + Math.round(gg)
            x = xStart + r * Math.cos(deg)
            y = yStart + r * Math.sin(deg)
            cx.lineTo(x, y)
        }
        cx.stroke()
    }
}

// pre-render
//draw()

const randomize = () => {
    Object.assign(settings, {
        n: Math.random() * 20,
        d: Math.random() * 30,
        maurer: Math.random() * 360,
        size: Math.random() * 1100 - 100,
        gg: Math.random() * 500
    })
    draw()
}