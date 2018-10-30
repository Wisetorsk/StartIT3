// JavaScript source code
class Renderer {
    constructor(params) {
        this.renderer = NaN;
        this.params = params;
        this.debug = params.debug;
        this.mode();
    }

    mode() {
        switch (this.params.mode.toLowerCase()) {
            case "grid":
                this.renderer = new RenderGrid(this.params);
                break;
            case "canvas":
                this.renderer = new RenderCanvas(this.params);
                break;
            default:
                throw ParseError("Unable to read render mode");
                break;
        }
    }
}

class RenderCanvas {
    // Draws the canvas for tetris render
    constructor(params) {
        
    }
}

class RenderGrid {
    // Draws the grid box layout for tetris render
    constructor(params) {

    }
}

