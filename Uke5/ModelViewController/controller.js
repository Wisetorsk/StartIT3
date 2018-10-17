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
}

function main() {
    var game = new Controller();
}

function show(element) {
    if (element.classList.contains('notOpen')) {
        element.classList.remove("notOpen");
        element.classList.add("isOpen");
    } else {
        element.classList.remove("isOpen");
        element.classList.add("notOpen");
    }
}