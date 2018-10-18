class Controller {
    constructor(xDim = 10, yDim = 10, bombs = 10, map = false) {
        this.board = new Board(xDim, yDim, bombs, map);
        this.ui = new UI(xDim, yDim, this.board);
    }

}
