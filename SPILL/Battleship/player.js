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
        this.shipLen = {Destroyer: 2, Submarine: 3, Battleship: 4, Carrier: 5}
        this.shipLengths = [
            { name: 'Destroyer', ships: 4, length: 2 },
            { name: 'Submarine', ships: 3, length: 3 },
            { name: 'Battleship', ships: 2, length: 4 },
            { name: 'Carrier', ships: 1, length: 5 } ];
        this.placements = this.shipLengths.map(i => i.ships).reduce((total, sum) => total + sum);
        this.board = new Board();
        this.myDivs = document.getElementsByClassName("cell");
        this.placeShips();

    }

    placeShip(len) {
        if (debug) console.log(len);

        return new Promise(function (resolve, reject) { 
            if () {
                resolve(function () {
                    this.placed++;
                });
            } else {
                reject(false);
            }
        });
    }

    placeShips() {
        /* Set event listner for mouse clicks */
        if (debug) console.log("User ship placement method");
        if (debug) console.log(this.placements);
        
        while (this.placements !== this.placed) {
            /* Gotta place'em all! 
            * Await a change in variable lastCell
            * */
            console.log('Ship Placement');
            this.currentLength = this.shipLen[this.ships[placed].type];
            console.log(this.currentLength);
            promise = this.placeShip(this.currentLength);
            promise.then(callback => callback()).catch();
        }
    }
}

class Ai extends Player {
    constructor() {
        super();
        if (debug) console.log("Ai Player instance");
    }
}