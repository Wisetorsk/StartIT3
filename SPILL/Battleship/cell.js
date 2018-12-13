class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.occupied = false;
        this.div;
    }

    bind(div) {
        this.div = div;
    }
}