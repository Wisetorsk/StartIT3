/*Feed in params object 
 *   alpha => Infecticity rate  (Person objcet chance to infect surrounding persons in cell)
 *   beta => propencity to move
 *   mapping => Number of people per cell at start
 *   phi =>
 *   
 *Rules:
 *  A person can only infect one person per round
 *  Person can only move one cell per round.
 *  Simulation ends when all persons are infected
 *   
 *Simulation steps:
 *  Run the chance to infect per infected person and construct a list over infections to complete
 *  Infect any healthy persons until list of infections to run is complete
 *  Run the chance to move per person in board and generate set of person objects and new coordinates to move to. [{obj: object, x: xCor, y: yCor}]
 *  Visualise the output. 
 *  
 *  When the simulation completes, return a summary.
 */
params = {
    width: 20,
    height: 20,
    alpha: 0.2,
    beta: 0.5,
    mapping: 10,
    phi: 0.5
};

class Person {
    constructor(alpha, beta, infected=false) {
        this.infected = infected;
        this.alpha = alpha;
        this.beta = beta;
    }

    goingToMove() {
        return (this.beta <= Math.floor(Math.random())) ? true : false;
    }

    infect() {
        return (this.alpha <= Math.floor(Math.random())) ? true : false;
    }
}


class Cell {
    constructor() {
        this.people = [];
    }
}


class Board {
    constructor(width, height) {
        this.cells = [[]];
        this.width = width;
        this.height = height;
    }

    loadCells() {

    }

    buildBoard() {
        for (let row in arr(this.height)) {
            let r = [];
            for (let column in arr(this.width)) {
                r.push(new Cell());
            }
            this.cells.push(r);
        }
    }
}


class Simulation {
    constructor(parameters) {
        this.alpha;
        this.beta;
        this.mapping;
        this.phi;
        this.width;
        this.height;

        this.loadParams();
        this.board = new Board();
    }

    oneStep() {

    }

    run() {

    }

    mapMovements() {
        for (let row of this.board) {
            for (let cell of row) {

            }
        }
    }

    movePersons() {
        for (let row of this.board) {
            for (let cell of row) {

            }
        }
    }

    loadParams() {
        for (let param of parameters) {

        }
    }
}


class Main {
    constructor() {
        this.view = new View();
        this.sim = new Simulation(params);
        this.sim.run();
    }
}