class Player {
    constructor() {
        this.ships;
        this.board = new Board();
    }
}

class Ai extends Player {
    constructor() {
        super();
        if (debug) console.log("Ai Player instance");
    }
}