// JavaScript source code
var bombs = [
    { x: 5, y: 6 },
    { x: 7, y: 1 }
    ];

class Controller {
    constructor(xDim = 10, yDim = 10, bombs = 10, map = false) {
        this.board = new Board(xDim, yDim, bombs, map);
        this.ui = new UI(xDim, yDim, this.board);

    }

    show() {

    }
}

function main() {
    var game = new Controller();
    console.log(game.board);
    console.log(game.ui.classes);
}