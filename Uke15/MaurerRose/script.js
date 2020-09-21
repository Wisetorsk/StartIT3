
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
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    xStart = canvas.width / 2
    yStart = canvas.height / 2
    draw()
})

canvas.width = window.innerWidth
canvas.height = window.innerHeight
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
    } = settings

    let k = n / d
    cx.clearRect(0, 0, canvas.width, canvas.height)
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
}

const randomize = () => {
    Object.assign(settings, {
        n: Math.random() * 20,
        d: Math.random() * 30,
        maurer: Math.random() * 720,
        size: Math.random() * 800 - 200,
        gg: Math.random() * 500
    })
    draw()
}
