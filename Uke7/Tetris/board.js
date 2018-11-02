//===============================================================================================================================================
// Board 
//===============================================================================================================================================
class Board {
    // Main board class. Builds the board layout. 
    constructor(params) {
        this.width = params.width; // Gamefield width
        this.height = params.height; // Gamefield height
        this.xCells = params.xCells; // Number of cells in the horizontal dimention
        this.yCells = params.yCells; // Number of cells in the vertical dimention
        this.cW = Math.floor(this.width / this.xCells); // Cell width in pixels
        this.cH = Math.floor(this.height / this.yCells); // Cell height in pixels
        this.board = []; // Collection of cells in NxM array
        this.pieces = [];
        this.debug = params.debug;
        this.buildBoard();
        if (this.debug) console.log(this.board);
    }

    buildBoard() {
        if (this.debug) console.log("Building board");
        for (var _ in range(this.xCells)) {
            var row = [];
            for (var _ in range(this.yCells)) {
                row.push(new Cell(this.cW, this.cH));
            }
            this.board.push(row);
        }
    }
}

class Cell {
    // Cell class. 
    constructor(cW, cH) {
        // Gameboard cell
        this.cW = cW; // Cell Width in pixels
        this.cH = cH; // Cell Height in pixels
        this.occupied = false; // If a part of a game piece occupies this cell element
        this.color = NaN;
    }
}
