/* The "Width" parameter refers to the game board width in pixels to display on screen
 * The "Height" parameter refers to the game board height in pixels to display on screen
 * The renderer needs to translate the width and height parameters to cellWidth and cellHeight according to the number of defined cells and total gamefield window width and height
 */
class Tetris {
    // Main game class
    constructor() {
        this.element;
        this.width;
        this.height;
        this.mode;
        this.board = [];
        try {
            this.findElement();
            this.parseParameters();
        } catch (exc) {
            if (exc instanceof FatalError || exc instanceof ParseError) {
                throw exc;
            } else {
                console.log(exc);
            }
        }
    }

    parseParameters() {
        /* Parse the <div> tag */
        var elements = document.getElementById().classList;
        this.mode = elemetns[0];
        this.width = elements[1];
        this.height = elements[2];
    }

    findElement() {
        // Locates the div element with class "tetris"
        var element = document.getElementsByClassName("tetris");
        if (element.length > 0) {
            throw new ParseError("The tetris class must only be defined once in HTML!", 1);
        } else if (element.length === 0 || element.length === NaN) {
            throw new ParseError("The tetris class was not found in HTML!", 2);
        } else {
            this.element = element[0];
        }
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
    console.log("Main call");
    var game = new Tetris();
}


//===============================================================================================================================================
// Custom errors
//===============================================================================================================================================

class ParseError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, ParseError);
    }
}

function FatalError() { // yay, prototypes... </sarcasm>
    Error.apply(this, arguments);
    this.name = "FatalError";
}
FatalError.prototype = Object.create(Error.prototype);
