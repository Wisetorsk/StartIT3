//===============================================================================================================================================
// Game piece class and subclasses
//===============================================================================================================================================

class GamePiece {
    constructor(params) {
        this.x = width / 2; // Piece horizontal position on gamefield
        this.y = 0; // Piece vertical position on gamefield
        this.width = params.width; // Width of gamefield
        this.height = params.height; // Height of gamefield
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
    }
}

class Pyramid extends GamePiece {
    constructor(params) {
        super(params);
    }
}

class Rod extends GamePiece {
    constructor(params) {
        super(params);
    }
}

class L extends GamePiece {
    constructor(params) {
        super(params);
    }
}