/* The "Width" parameter refers to the game board width in pixels to display on screen
 * The "Height" parameter refers to the game board height in pixels to display on screen
 * The renderer needs to translate the width and height parameters to cellWidth and cellHeight according to the number of defined cells and total gamefield window width and height
 */
class Tetris {
    // Main game class
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.board = [];
    }
}

class Board {
    // Main board class. Builds the board layout. 
    constructor(width, height, xCells, yCells) {
        this.width = width; // Gamefield width
        this.height = height; // Gamefield height
        this.xCells = xCells; // Number of cells in the horizontal dimention
        this.yCells = yCells; // Number of cells in the vertical dimention
    }
}

class Cell {
    // Cell class. 
    constructor(cW, cH) {
        // Gameboard cell
        this.cW = cW; // Cell Width
        this.cH = cH; // Cell Height
    }
}

class RenderCanvas {
    // Draws the canvas for tetris render
    constructor(width, height) {
        this.width = width; // Gamewindow width
        this.height = height; // Gamewindow height
    }
}

class RenderGrid {
    // Draws the grid box layout for tetris render
    constructor(width, height) {
        this.width = width; // Gamewindow width
        this.height = height; // Gamewindow height
    }
}


//===============================================================================================================================================
// Game piece class and subclasses
//===============================================================================================================================================

class GamePiece {
    constructor(width, height) {
        this.x = width/2; // Piece horizontal position on gamefield
        this.y = 0; // Piece vertical position on gamefield
        this.width = width; // Width of gamefield
        this.height = height; // Height of gamefield
    }

    rotate(direction) {
        if (direction) {
            // clockwise
        } else {
            // counterclockwise
        }
    }
}

class Square extends GamePiece {
    constructor(width, height) {
        super(width, height);
    }
}

class Pyramid extends GamePiece {
    constructor(width, height) {
        super(width, height);
    }
}

class Rod extends GamePiece {
    constructor(width, height) {
        super(width, height);
    }
}

class L extends GamePiece {
    constructor(width, height) {
        super(width, height);
    }
}

//===============================================================================================================================================
// Main
//===============================================================================================================================================
function main() {

}