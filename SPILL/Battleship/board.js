class Board {
    constructor() {
        this.field = []; // Nested array containing cells
        this.xDim = 10;
        this.yDim = 10;
        this.build();
        if (debug) console.log(this.field);
    }

    build() {
        if (debug) console.log("Create board object");
        for (var x in arr(this.xDim)) {
            let row = [];
            for (var y in arr(this.yDim)) {
                row.push(new Cell(x, y));
            }
            this.field.push(row);
        }
    }
}