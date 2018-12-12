class Player {
    constructor() {
        if (debug) console.log("User Player instance");
        this.ships = [ // Attribute cells contains the cells that the current ship occupies
            {type: 'Destroyer', cells: []},
            {type: 'Destroyer', cells: []},
            {type: 'Destroyer', cells: []},
            {type: 'Destroyer', cells: []},
            {type: 'Submarine', cells: []},
            {type: 'Submarine', cells: []},
            {type: 'Submarine', cells: []},
            {type: 'Battleship', cells: []},
            {type: 'Battleship', cells: []},
            {type: 'Carrier', cells: []}
        ];
        this.currentLength;
        this.placed = 0;
        this.done = false;
        this.shipLen = {Destroyer: 2, Submarine: 3, Battleship: 4, Carrier: 5}
        this.shipLengths = [
            { name: 'Destroyer', ships: 4, length: 2 },
            { name: 'Submarine', ships: 3, length: 3 },
            { name: 'Battleship', ships: 2, length: 4 },
            { name: 'Carrier', ships: 1, length: 5 } ];
        this.placements = this.shipLengths.map(i => i.ships).reduce((total, sum) => total + sum);
        this.board = new Board();
        this.myDivs = document.getElementsByClassName("cell");
        this.currentShip = this.ships[this.placed];
        this.placeShips();

    }

    /*placeShip(len) {
        if (debug) console.log(len);
        let direction = null;
        let radios = document.getElementsByName('direction');
        for (var x in radios) {
            if (radios[x].checked) {
                direction = radios[x].value;
                break;
            }
        }
        return new Promise(function (resolve, reject) { 
            if (this.lastCor[0] !== lastX && this.lastCor[1] !== lastY) {
                if (this.lastCor[0])
                resolve(function () {
                        // Place the ship at lastX, lastY if possible.
                        this.placed++;
                        this.lastCor = [lastX, lastY];
                });
            } else {
                reject(false);
            }
        });
    }

    placeShips() {
        // Await change in lastCor
        this.lastCor = [lastX, lastY];
        if (debug) console.log("User ship placement method");
        if (debug) console.log(this.placements);
        
        while (this.placements !== this.placed) { //Infinite...
            
            console.log('Ship Placement');
            this.currentLength = this.shipLen[this.ships[this.placed].type];
            console.log(this.currentLength);
            let promise = this.placeShip(this.currentLength);
            promise.then(callback => callback()).catch();
            this.placed++; //Only to break infinite loop...
        }
    }*/

    placeShips() {
        document.getElementById('shp').innerHTML = this.shipLen[this.ships[this.placed].type];
    }

    placeShip(element) {
        let x = parseInt(element.getAttribute('yIndex'));
        let y = parseInt(element.getAttribute('xIndex'));
        document.getElementById('brd').innerHTML = 'Player';
        document.getElementById('ly').innerHTML = x;
        document.getElementById('lx').innerHTML = y;

        if (!this.done) {
            try {
                let direction = null;
                let radios = document.getElementsByName('direction');
                for (var i in radios) {
                    if (radios[i].checked) {
                        direction = radios[i].value;
                        break;
                    }
                }
                if (direction === null) {
                    throw ('Direction not set');
                }
                
                this.currentShip = this.ships[this.placed];
                this.currentLength = this.shipLen[this.currentShip.type];
                if (debug) console.log(x, y, this.currentShip, this.currentLength, direction);
                //Try to place ship
                if (direction = 'Horizontal') {
                    if (x + this.currentLength - 1 < 10) {
                        for (let index of arr(this.currentLength)) {
                            this.currentShip.cells.push(this.board.field[x + index - 1][y - 1]);
                            this.board.field[x + index - 1][y - 1].occupied = true;
                        }
                        this.placed++;
                    } else {
                        throw ('Ship does not fit: x: ' + x + '  y: ' + y + '  Length:' + this.currentLength);
                    }
                } else {
                    if (y + this.currentLength - 1 < 10) {
                        for (let index of arr(this.currentLength)) {
                            this.currentShip.cells.push(this.board.field[x - 1][y + index - 1]);
                        }
                        this.placed++;
                    } else {
                        throw ('Ship does not fit: x: ' + x + '  y: ' + y + '  Length:' + this.currentLength);
                    }
                }

                
                if (this.placed === this.placements) {
                    console.log('all ships placed');
                    this.done = true;
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}

class Ai extends Player {
    constructor() {
        super();
        if (debug) console.log("Ai Player instance");
    }
}