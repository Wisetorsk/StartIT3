// Globals


//Object definitions
class Controller {
    constructor(xDim = 10, yDim = 10, bombs = 10, map = false) {
        this.board = new Board(xDim, yDim, bombs, map);
        this.ui = new UI(xDim, yDim, this.board);
    }

    uncoverClose(selectedElement) {
        /*
         * Uncover all cells close to the one selected, if the close cell is also empty, uncover next layer
         */
        var close = closeIndex(selectedElement.x, selectedElement.y, xDim, yDim);

        console.log(close);
    }
}
