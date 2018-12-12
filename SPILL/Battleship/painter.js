class Painter { /*
 * HTML interface class
 * */
    constructor() {
        this.xCells = 10;
        this.yCells = 10;
        this.xIndexes = arr(11).map(i => i.toString());
        this.yIndexes = letters(10);
        this.containers = [document.getElementById('playfield'), document.getElementById('playfield2')];
        this.drawBoard();
    }

    drawBoard() {
        if (debug) console.log('Draw board on html');
        for (let element in this.containers) {
            for (var x in arr(this.xCells + 1)) {
                for (var y in arr(this.yCells + 1)) {
                    if (x === '0' && y !== '0') {
                        /*insert a yindex */
                        if (y > 0) {
                            this.containers[element].innerHTML += insertIndex(this.yIndexes[y - 1]);
                        }
                    } else if (y === '0' && x !== '0') {
                        /* Insert a xindex */
                        if (x > 0) this.containers[element].innerHTML += insertIndex(this.xIndexes[x]);
                    } else if (y === '0' && x === '0') {
                        /* Insert XY index */
                        this.containers[element].innerHTML += insertIndex('XY');
                    } else {
                        /* Insert a cell */
                        this.containers[element].innerHTML += insertCell(x, y, element, (element === '1') ? 'enemy' : 'player');
                    }
                }
            }
        }
    }

    updateBoard(board) {
        // Updates the content on page according to board object
    }


}