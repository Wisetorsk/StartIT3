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

    placeShips() {
        /* Set event listner for mouse clicks */
        if (debug) console.log("User ship placement method");
        let placed = 0;
        console.log(this.placements);
        /*
        document.getElementById('playfield').addEventListener('click', function () {
            /* Place ship 
             * Read lastX and lastY and control if they are free
             *//*
            console.log(lastCell);
            
            
        }, true);
        */
        while (this.placements !== placed) {
            /* Gotta place'em all! 
            * Await a change in variable lastCell
            * */
            console.log('Ship Placement');
            var successfull = new Promise(function(resolve, reject) { // Set a promise to await user input
                resolve(''); // Resolve when a ship is placed properly
            });

            if (successfull) placed++;
        }
        //document.getElementById("playfield").removeEventListener("click", function () { });
    }
}

class Ai extends Player {
    constructor() {
        super();
        if (debug) console.log("Ai Player instance");
    }
}