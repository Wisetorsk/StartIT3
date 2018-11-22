class Player {
    constructor() {
        if (debug) console.log("User Player instance");
        this.ships;
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
        document.getElementById('playfield').addEventListener('click', function () {
            /* Place ship 
             * Read lastX and lastY and control if they are free
             */
            console.log(lastCell);
            
            
        }, true);
        //while (!this.placements === placed) {
            /* Gotta place'em all! */
        //}
        document.getElementById("playfield").removeEventListener("click", function () { });
    }
}

class Ai extends Player {
    constructor() {
        super();
        if (debug) console.log("Ai Player instance");
    }
}