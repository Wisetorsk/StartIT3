class Painter { /*
 * HTML interface class
 * */
    constructor() {
        this.xCells = 10;
        this.yCells = 10;
        this.xIndexes = arr(10).map(i => i.toString());
        this.yIndexes = letters(10);
        //this.drawBoard();
        this.container = document.getElementById('playfield');
    }

    drawBoard() {
        console.log('Draw board');
        for (var x in arr(this.xCells + 1)) {
            for (var y in arr(this.yCells + 1)) {
                if (x === 0) {
                    /*insert an index */
                } else {
                    /* Insert a cell */
                }
            }
        }
    }

    updateBoard(board) {
        // Updates the content on page according to board object
    }


}