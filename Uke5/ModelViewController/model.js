//text
class Cell {
    constructor(x, y, isBomb = false, bombsNear = false, isOpen = false, flag = false) {
        this.x = x;
        this.y = y;
        this.isBomb = isBomb;
        this.bombsNear = bombsNear;
        this.isOpen = isOpen;
        this.flag = flag;
    }
}

class Board {
    constructor(xDim, yDim, bombs, map) {
        this.xDim = xDim;
        this.yDim = yDim;
        if (map) {
            this.bombs = map.length;
        } else {
            this.bombs = bombs;
        }
        this.map = map;
        this.bombArray = [];
        this.playfield = [];
        this.makeBoard();
        this.placeAllBombs();
        this.mapCloseBombs();
        
    }

    makeBoard() {
        for (var x in createArray(this.xDim)) {
            var playfieldRow = [];
            for (var y in createArray(this.yDim)) {
                playfieldRow.push(new Cell(x, y));
            }
            this.playfield.push(playfieldRow);
        }
    }

    placeBomb(x, y) {
        this.playfield[x][y].isBomb = true;
    }

    placeAllBombs() {
        /* If map, use an extrenal json with coordinates */
        if (this.map) {
            for (var position in createArray(this.map.length)) {
                console.log(this.map[position].x, this.map[position].y);
                this.placeBomb(this.map[position].x, this.map[position].y);
                this.bombArray.push(this.playfield[this.map[position].x][this.map[position].y]);
            }
        } else {
            for (var i in createArray(this.bombs)) {
                while (true) {
                    var xPosition = randInt(this.xDim);
                    var yPosition = randInt(this.yDim); 
                    if (!this.playfield[xPosition][yPosition].isBomb) {
                        this.playfield[xPosition][yPosition].isBomb = true;
                        this.bombArray.push(this.playfield[xPosition][yPosition]);
                        break;
                    } else {
                        console.log('Redraw');
                    }
                }              
            }
        }
    }

    mapCloseBombs() {
        for (var x in createArray(this.xDim)) {
            for (var y in createArray(this.yDim)) {
                this.closeBombs(parseInt(x), parseInt(y));
            }
        }
    }

    closeBombs(x, y) {
        var numberOfBombs = 0;
        var closeIndexes = closeIndex(x, y, this.xDim, this.yDim);
        for (var index in closeIndexes) {
            
            if (this.playfield[closeIndexes[index].xClose][closeIndexes[index].yClose].isBomb) {
                numberOfBombs++;
            }
        }
        this.playfield[x][y].bombsNear = numberOfBombs;
    }
}

