let angle = 0;
let wave = [];
let prevX = 0;
let prevY = 0;

function setup() {
    let canvas = createCanvas(800, 400);
    canvas.parent('sketch-holder');
}

function draw() {
    background(0);
    translate(200, 200);
    let radius = 50;
    stroke(255);
    let steps = parseInt(document.getElementById('numberInput').value);
    noFill();
    ellipse(0, 0, radius * 2+25);
    let x = 0;
    let y = 0;

    //let coor = polToCart(radius, angle);
    for (let i = 0; i < steps; i++) {
        n = i * 2 + 1;
        let coor = fourierStep(n, radius, angle);
        //let coor = sawtoothStep(n, radius, angle);
        x += coor.x;
        y += coor.y;
        prevX = x;
        prevY = y;
    }

    wave.unshift(y);
    fill(255);
    ellipse(x, y, 8);

    noFill();
    translate(200, 0);
    line(x - 200, y, 0, wave[0]);

    beginShape();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();
    if (wave.length > 300) {
        wave.splice(-1);
    }
    angle += 0.05;
}

function polToCart(r, theta) {
    return { x: r * cos(theta), y: r * sin(theta) };
}

function fourierStep(step, r, theta) {
    return {
        x: r * (4 / (step * PI)) * cos(step * theta),
        y: r * (4 / (step * PI)) * sin(step * theta)
    }
}

function sawtoothStep(step, r, theta) {
    return {
        x: r * (2 / ((step % 2 === 1) ? -step * PI : step * PI)) * cos(step * theta),
        y: r * (2 / ((step % 2 === 1) ? -step * PI : step * PI)) * sin(step * theta)
    }
}