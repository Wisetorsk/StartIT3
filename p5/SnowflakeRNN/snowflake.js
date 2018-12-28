let model;
let strokePath = null;

let x, y;
let pen = 'down';

function setup() {
    createCanvas(800, 800);
    background(0);
    x = random(width);
    y = random(height);
    model = ml5.SketchRNN('duck', modelReady);
    stroke(255);
}

function draw() {
    if (strokePath != null) {
        let newX = x + strokePath.dx * 0.1;
        let newY = y + strokePath.dy * 0.1;
        if (pen === 'down') {
            line(x, y, newX, newY);
        } else if (strokePath.pen === 'end') {
            console.log('Done');
            //throw "Done";
        }
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


function gotSketch(err, s) {
    // Error first callback function
    if (err) {
        //console.log(err);
        throw (err);
    }
    strokePath = s;
    //console.log(strokePath);
}