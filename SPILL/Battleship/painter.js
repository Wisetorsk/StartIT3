class Painter { /*
 * HTML interface class
 * */
    constructor() {
        this.xCells = 10;
        this.yCells = 10;
        this.xIndexes = arr(10).map(i => i.toString());
        this.yIndexes = letters(10);
        this.container = document.getElementById('playfield');
        this.drawBoard();
    }

    drawBoard() {
        console.log('Draw board');
        for (var x in arr(this.xCells + 1)) {
            for (var y in arr(this.yCells + 1)) {
                if (x === '0' && y !== '0') {
                    /*insert a yindex */
                    if (y > 0) {
                        this.container.innerHTML += insertIndex(this.yIndexes[y - 1]);
                    }
                } else if (y === '0' && x !== '0') {
                    /* Insert a xindex */
                    if (x > 0) this.container.innerHTML += insertIndex(this.xIndexes[x - 1]);
                } else if (y === '0' && x === '0') {
                    /* Insert XY index */
                    this.container.innerHTML += insertIndex('XY');
                } else {
                    /* Insert a cell */
                    this.container.innerHTML += insertCell(x, y);
                }
            }
        }
    }

    updateBoard(board) {
        // Updates the content on page according to board object
    }


}