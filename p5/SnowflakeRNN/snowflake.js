// Source: https://www.youtube.com/watch?v=pdaNttb7Mr8
let model;
let strokePath = null;
let scale = 0.2;
let x, y;
let pen = 'down';

function setup() {
    let canvas = createCanvas(1900, 660);
    canvas.parent('ducksu');
    background(0);
    x = random(width);
    y = random(height);
    model = ml5.SketchRNN('duck', modelReady);
    stroke(255);
}

function draw() {
    if (strokePath != null) {
        let newX = x + strokePath.dx * scale;
        let newY = y + strokePath.dy * scale;
        if (pen === 'down') line(x, y, newX, newY);
        pen = strokePath.pen;
        x = newX;
        y = newY;
        strokePath = null;
        if (pen !== 'end') {
            model.generate(gotSketch);
        } else {
            model.reset();
            model.generate(gotSketch);
            x = random(width);
            y = random(height);
        }
    }
}

function modelReady() {
    console.log("model ready");
    model.reset();
    model.generate(gotSketch);
    console.log(model);
}


function gotSketch(err, sPath) {
    // Error first callback function
    if (err) {
        throw (err);
    }
    strokePath = sPath;
}