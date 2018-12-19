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
 
Vue.component('cell', {
    props: ['x', 'y', 'infected'],
    data: function () {
        return {
            cellStyle: {
                backgroundColor: 'rgba(' + infected + ',0,0,0)',
                border: '1px solid black'
            }
        }
    },
    template: '<div class="cell" v-bind:x="x" v-bind:y="y" v-bind:style="cellStyle"></div>'
});

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
        this.newCoordinates = { x: NaN, y: NaN };
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
        this.infected = 0; // The number of total infected persons in cell
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
                //console.log('Moving');
                if (Math.random() > 0.5) {
                    obj = {
                        person: person,
                        x: (this.x === 0) ? (this.x + 1) : ((this.x === this.params.width) ? (this.x + 1) : ((Math.random() > 0.5) ? (this.x + 1) : (this.x - 1))),
                        y: this.y
                    }
                } else {
                    obj = {
                        person: person,
                        x: this.x,
                        y: (this.y === 0) ? (this.y + 1) : ((this.y === this.params.height) ? (this.y + 1) : ((Math.random() > 0.5) ? (this.y + 1) : (this.y - 1)))
                    }
                }
                if (obj != null) movements.push(obj);
            }
        }
        //console.log(movements);
        this.movements = movements;
    }

    mapInfections() {
        this.infections = 0;
        for (let person of this.people) {
            if (person.infected) this.infected++;
            if (person.infect()) this.infections++;  //Adds one to the number of people to infect
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

    mapInfections() {
        for (let row of this.cells) {
            for (let cell of row) {
                cell.mapInfections();
            }
        }
    }

    infect() {
        for (let row of this.cells) {
            for (let cell of row) {
                for (let _ in arr(cell.infections)) {
                    for (let person of cell.people) {
                        if (!person.infected) {
                            person.infected = true;
                            break;
                        }
                    }
                }
            }
        }
    }

    move() {
        for (let row of this.cells) {
            for (let cell of row) {

            }
        }
    }

    mapMovements() {
        for (let row of this.cells) {
            for (let cell of row) {
                cell.mapMovements();
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
        this.iteration = 0;
        this.params = parameters;
        this.board = new Board(parameters);
        this.done = false;
        this.view = new View('board', 'table', parameters.width, parameters.height);
        this.infectRandomPerson();
        this.infectedTotal;
        this.view.build(this.board.cells);
    }

    oneStep() {
        /*
         Map infections
         Infect
         Map movements
         Move
         Update view
         */
        this.mapInfections();
        this.infection();
        this.mapMovements();
        this.movePersons();
        this.iteration++;
        this.updateLog();
    }

    run() {
        /*Repeat OneStep with n ms pause */
        this.oneStep();
        this.updateView();
    }

    updateView() {

    }

    infectRandomPerson() {
        let xIndex = Math.floor(Math.random() * this.params.width);
        let yIndex = Math.floor(Math.random() * this.params.height);
        this.board.cells[yIndex][xIndex].people[Math.floor(Math.random() * this.params.mapping)].infected = true;
    }

    mapInfections() {
        this.board.mapInfections();
    }

    infection() {
        this.board.infect();
    }

    mapMovements() {
        this.board.mapMovements();
    }

    movePersons() {
        
    }

    listAllInfected() {
        /* Create list of all infected persons and their objects */
    }

    mapAllInfected() {
        // Updates the number of total infected persons
        let infected = 0;
        for (let row of this.board.cells) {
            for (let cell of row) {
                for (let person of cell.people) {
                    if (person.infected) infected++;
                }
            }
        }
        this.infectedTotal = infected;
    }

    updateLog() {
        this.mapAllInfected();
        this.view.updateLog(this.iteration, this.infectedTotal);
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
    constructor(container, log, width, height) {
        this.width = width;
        this.height = height;
        this.display = document.getElementById(container);
        this.log = document.getElementById(log);
    }

    build(board) {
        console.log('build');
        for (let row in arr(this.height)) {
            for (let column in arr(this.width)) {
                this.display.innerHTML += '<cell x=' + column + ' y=' + row + ' infected=' + board[row][column].infected + '></cell>';
            }
        }
    }

    updateDisplay(data) {
        this.display.innerHTML = '';
    }

    updateLog(iteration, infected) {
        /*this.log.innerHTML += '<tr>';
        this.log.innerHTML += '<td>' + iteration + '</td>';
        this.log.innerHTML += '<td>' + infected + '</td>';
        this.log.innerHTML += '</tr>';*/
        this.log.innerHTML += '<div>Infected: ' + infected + '</div>';
    }
}

class Main {

    constructor() {
        this.sim = new Simulation(params);
        //this.sim.infectRandomPerson();
        console.table(params);
        console.log(this.sim);
        this.sim.oneStep();
        console.log(this.sim);
        //this.sim.run();
    }
}