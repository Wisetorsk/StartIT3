let angle = 0;
let wave = [];

function setup() {
    let canvas = createCanvas(800, 400);
    canvas.parent('sketch-holder');
}

function draw() {
    background(0);
    translate(200, 200);
    let radius = 50;
    stroke(255);
    noFill();
    ellipse(0, 0, radius * 2);
    let x = 0;
    let y = 0;

    //let coor = polToCart(radius, angle);
    for (let i = 0; i < 10; i++) {
        n = i * 2 + 1;
        let coor = fourierStep(n, radius, angle);
        x += coor.x;
        y += coor.y;
    }

    wave.unshift(y);
    fill(255);
    ellipse(x, y, 8);
    line(0, 0, x, y);
    noFill();
    translate(200, 0);
    line(x - 200, y, 0, wave[0]);

    beginShape();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();
    if (wave.length > 200) {
        wave.splice(-1);
    }
    angle += 0.05;
}

function polToCart(r, theta) {
    return { x: r * cos(theta), y: r * sin(theta) };
}

function fourierStep(step, r, theta) {
    return { x: r * (4 / (step * PI)) * cos(step * theta), y: r * (4 / (step * PI)) * sin(step * theta)}
}