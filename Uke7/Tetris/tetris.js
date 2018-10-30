/* The "Width" parameter refers to the game board width in pixels to display on screen
 * The "Height" parameter refers to the game board height in pixels to display on screen
 * The renderer needs to translate the width and height parameters to cellWidth and cellHeight according to the number of defined cells and total gamefield window width and height
 */
class Tetris {
    // Main game class **TOP LEVEL**
    constructor(debug = true) {
        this.debug = debug;
        this.element; // Current div containing tetris
        this.board = NaN; // Board Object
        this.renderer = NaN; // Renderer
        this.params = {
            width: NaN, //Window Width
            height: NaN, //Window height
            mode: NaN, //Render mode
            xCells: 20, // Number of cells in horizontal dimention
            yCells: 50, //Number of cells in verticla dimention
            debug: debug
        };
        try {
            this.findElement();
            this.parseParameters();
            this.loadRenderer();
            this.loadBoard();
            if (this.debug) {
                console.log("Parameter dump");
                console.log("Parameters ", this.params);
                console.log(this.renderer);
                console.log(this.board);
                console.log(this.element);
            }
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
        if (this.debug) console.log("Parde parameters from div");
        var elements = this.element.classList;
        this.params.mode = elements[1];
        this.params.width = elements[2].slice(1);
        this.params.height = elements[3].slice(1);
        
    }

    loadRenderer() {
        if (this.debug) console.log("Loading renderer");
        this.renderer = new Renderer(this.params);
    }

    loadBoard() {
        if (this.debug) console.log("Loading board");
        this.board = new Board(this.params);
    }

    findElement() {
        // Locates the div element with class "tetris"
        if (this.debug) console.log("Locating Div element with 'tetris' class");
        var element = document.getElementsByClassName("tetris");
        if (element.length > 1) {
            throw new ParseError("The tetris class must only be defined once in HTML!", 1);
        } else if (element.length === 0 || element.length === NaN) {
            throw new ParseError("The tetris class was not found in HTML!", 2);
        } else {
            this.element = element[0];
        }
    }

    buildBoard() {

    }
}


//===============================================================================================================================================
// Main
//===============================================================================================================================================
function main() {
    console.log("Main call");
    var game = new Tetris();
}


function range(number) {return [...Array(number).keys()]}