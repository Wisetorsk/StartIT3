//===============================================================================================================================================
// Game piece class and subclasses
//===============================================================================================================================================

class GamePiece {
    constructor(params) {
        this.x = width / 2; // Piece horizontal position on gamefield
        this.y = 0; // Piece vertical position on gamefield
        this.width = params.width; // Width of gamefield
        this.height = params.height; // Height of gamefield
        this.positions; // array of adjecent cell positions to complete element.
        this.color = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1)'; // Give the element a random rgba color value
    }

    rotate(direction) {
        if (direction) {
            // clockwise
        } else {
            // counterclockwise
        }
    }
}

class Square extends GamePiece {
    constructor(params) {
        super(params);
        this.positions = [
            { x: 0, y: 0},
            { x: 1, y: 0},
            { x: 0, y: 1},
            { x: 1, y: 1}
        ];
    }
}

class Pyramid extends GamePiece {
    constructor(params) {
        super(params);
        this.positions = [
            { x: 0, y: 0},
            { x: -1, y: 1},
            { x: 0, y: 1},
            { x: 1, y: 1}
        ];
    }
}

class Rod extends GamePiece {
    constructor(params) {
        super(params);
        this.positions = [
            { x: 0, y: 0},
            { x: 1, y: 0},
            { x: 2, y: 0},
            { x: 3, y: 0}
        ];
    }
}

class L extends GamePiece {
    constructor(params) {
        super(params);
        this.positions = [
            { x: 0, y: 0},
            { x: 0, y: 1},
            { x: 1, y: 1},
            { x: 2, y: 1}
        ];
    }
}