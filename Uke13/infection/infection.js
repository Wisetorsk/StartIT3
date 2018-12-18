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
    alpha: 0.5,
    beta: 0.2,
    mapping: 10,
    phi: 0.5
};

class Person {
    /**
     * 
     * @param {any} parameters
     * @param {any} x
     * @param {any} y
     * @param {any} infected
     */
    constructor(parameters, x, y, infected=false) {
        this.infected = infected;
        this.params = parameters;
        this.x = x;
        this.y = y;
    }

    goingToMove() {
        return (this.params.beta > Math.random()) ? true : false;
    }

    infect() {
        return (this.infected) ? ((this.params.alpha <= Math.random()) ? true : false) : false;
    }
}


class Cell {
    /**
     * 
     * @param {any} x
     * @param {any} y
     * @param {any} parameters
     */
    constructor(x, y, parameters) {
        this.infections = 0;
        this.x = x;
        this.y = y;
        this.people = [];
        this.params = parameters;
        this.movements = [];
    }

    mapMovements() {
        this.movements = [];
        let movements = [];
        let obj = null;
        for (let person of this.people) {
            if (person.goingToMove()) {
                console.log('Moving');
                if (Math.random() > 0.5) {
                    obj = {
                        person: person,
                        x: (this.x === 0) ? (this.x + 1) : ((this.x === this.params.width) ? (this.x + 1) : ((Math.random() > 0.5) ? (this.x + 1) : (this.x - 1))),
                        y: this.y
                    }
                    console.log(obj);
                } else {
                    obj = {
                        person: person,
                        x: this.x,
                        y: (this.y === 0) ? (this.y + 1) : ((this.y === this.params.height) ? (this.y + 1) : ((Math.random() > 0.5) ? (this.y + 1) : (this.y - 1)))
                    }
                    console.log(obj);
                }
                if (obj != null) movements.push(obj);
            }
        }
        console.log(movements);
        this.movements = movements;
    }

    infect() {
        this.infections = 0;
        for (let person of this.people) {
            if (person.infect()) infections++;
        }
    }
}


class Board {
    /**
     * 
     * @param {any} parameters
     */
    constructor(parameters) {
        this.cells = [];
        this.params = parameters;

        this.buildBoard();
        this.loadCells();
    }

    infect() {
        for (let row of this.cells) {
            for (let cell of row) {
                cell.infect();
            }
        }
    }

    move() {
        for (let row of this.cells) {
            for (let cell of row) {
                cell.movement();
            }
        }
    }

    loadCells() {
        for (let row of this.cells) {
            for (let cell of row) {
                for (let _ in arr(this.params.mapping)) {
                    cell.people.push(new Person(this.params, cell.x, cell.y));
                }
            }
        }
    }

    buildBoard() {
        for (let row in arr(this.params.height)) {
            let r = [];
            for (let column in arr(this.params.width)) {
                r.push(new Cell(parseInt(column), parseInt(row), this.params));
            }
            this.cells.push(r);
        }
    }
}


class Simulation {
    /**
     * 
     * @param {any} parameters
     */
    constructor(parameters) {
        this.params = parameters;
        this.board = new Board(parameters);
        this.done = false;
        this.view = new View();
    }

    oneStep() {
        /*
         Map infections
         Infect
         Map movements
         Move
         Update view
         */
    }

    run() {
        /*Repeat OneStep with n ms pause */
        this.oneStep();
        this.updateView();
    }

    updateView() {

    }

    infectRandomPerson() {
        xIndex = Math.floor(Math.random() * this.params.width);
        yIndex = Math.floor(Math.random() * this.params.height);

    }

    mapMovements() {
        for (let row of this.board) {
            for (let cell of row) {
                cell.mapMovements();
            }
        }
    }

    movePersons() {
        for (let row of this.board) {
            for (let cell of row) {

            }
        }
    }
}


class View {
    /**
     * /
     * @param {any} container
     * @param {any} width
     * @param {any} height
     * 
     * Controls the html output
     */
    constructor(container, width, height) {
        this.width = width;
        this.height = height;
        this.element = document.getElementById(container);
    }

    build() {

    }

    update(data) {
        this.element.innerHTML = '';
    }
}

class Main {

    constructor() {
        this.sim = new Simulation(params);
        console.table(params);
        console.log(this.sim);
        //this.sim.run();
    }
}