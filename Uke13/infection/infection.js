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

/*Vue.component('cell-element', {
    props: ['x', 'y', 'infected'],
    data: function () {
        return {
            cellStyle: {
                backgroundColor: 'rgba(' + infected + ',0,0,0)',
                border: '1px solid black'
            },
            cls: 'cell'
        }
    },
    template: '<div class="cell" v-bind:x="x" v-bind:y="y" v-bind:style="cellStyle"></div>'
});*/

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
        this.element = null;
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
                        x: (this.x === 0) ? (this.x + 1) : ((this.x === this.params.width - 1) ? (this.x - 1) : ((Math.random() > 0.5) ? (this.x + 1) : (this.x - 1))),
                        y: this.y
                    }
                } else {
                    obj = {
                        person: person,
                        x: this.x,
                        y: (this.y === 0) ? (this.y + 1) : ((this.y === this.params.height - 1) ? (this.y - 1) : ((Math.random() > 0.5) ? (this.y + 1) : (this.y - 1)))
                    }
                }
                if (obj != null) movements.push(obj);
            }
        }
        //console.log(movements);
        this.movements = movements;
    }

    mapInfections() {
        this.infected = 0;
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
                for (let move of cell.movements) {
                    for (let person of cell.people) {
                        if (person === move.person) {
                            this.cells[move.y][move.x].people.push(move.person);
                            //cell.people.splice(cell.people.indexOf(person));
                            break;
                        }
                    }
                }
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
        this.history = [];
        this.params = parameters;
        this.board = new Board(parameters);
        this.done = false;
        this.view = new View('board', 'table', parameters.width, parameters.height);
        this.infectRandomPerson();
        this.infectedTotal;
        this.view.build(this.board.cells);
        this.link();
        this.history.push({ iteration: this.iteration, infected: 1 });
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
        this.view.updateDisplay(this.board.cells);
    }

    link() {
        for (let row in arr(this.params.height)) {
            for (let column in arr(this.params.width)) {
                this.board.cells[row][column].element = document.getElementById('X' + column + 'Y' + row);
            }
        }
    }

    run() {
        /*Repeat OneStep with n ms pause */
        this.oneStep();
        this.updateView();
    }

    updateView() {
        this.view.updateDisplay(this.board.cells);
    }

    infectRandomPerson() {
        let xIndex = Math.floor(Math.random() * this.params.width);
        let yIndex = Math.floor(Math.random() * this.params.height);
        console.log('Infecting random person in cell  x:' + xIndex + ' y:' + yIndex)
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
        this.board.move();
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
        this.history.push({ iteration: this.iteration, infected: this.infectedTotal });
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
                //this.display.innerHTML += '<cell-element x=' + column + ' y=' + row + ' infected=' + board[row][column].infected + '></cell-element>';
                this.display.innerHTML += '<div class="cell" id="X' + column + 'Y' + row + '" x="' + column + '" y="' + row + '" infected="' + board[row][column].infected + '"></div>';

            }
        }
    }

    updateDisplay(data) {
        for (let row of data) {
            for (let cell of row) {
                if (cell.infected === 0) {
                    cell.element.style.backgroundColor = 'rgba(255,0,0,0)';
                } else if (cell.infected < 2 && cell.infected > 0) {
                    cell.element.style.backgroundColor = 'rgba(255,0,0,0.28)';
                } else if (cell.infected < 5 && cell.infected >= 2) {
                    cell.element.style.backgroundColor = 'rgba(255,0,0,0.42)';
                } else if (cell.infected < 7 && cell.infected >= 5) {
                    cell.element.style.backgroundColor = 'rgba(255,0,0,0.56)';
                } else if (cell.infected < 10 && cell.infected >= 7) {
                    cell.element.style.backgroundColor = 'rgba(255,0,0,0.70)';
                } else if (cell.infected < 15 && cell.infected >= 10) {
                    cell.element.style.backgroundColor = 'rgba(255,0,0,0.84)';
                } else if (cell.infected < 20 && cell.infected >= 15) {
                    cell.element.style.backgroundColor = 'rgba(255,0,0,1)';
                }
            }
        }
    }

    updateLog(iteration, infected) {
        this.log.innerHTML = '<div>Step: ' + iteration + ' Infected: ' + infected + '</div>';
    }
}

class Main {

    constructor() {
        this.sim = new Simulation(params);
        console.table(params);
        //console.log(this.sim);
        this.sim.oneStep();
        console.log(this.sim);
        //this.sim.run();
    }
}
