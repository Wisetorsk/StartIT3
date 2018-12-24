let flock = [];

let alignSlider, cohesionSlider, seperationSlider;

function setup() {
    createCanvas(640, 360);
    alignSlider = document.getElementById('align');
    alignSlider.step = "0.1";
    cohesionSlider = document.getElementById('cohesion');
    cohesionSlider.step = "0.1";
    seperationSlider = document.getElementById('seperation');
    seperationSlider.step = "0.1";
    perceptionSlider = document.getElementById('perception');
    perceptionSlider.step = "0.1";
    for (let i = 0; i < 100; i++) {
        flock.push(new Boid());
    }
}

function draw() {
    background(51);

    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}