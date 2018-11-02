// JavaScript source code
class Renderer {
    constructor(params, element, board) {
        this.element = element;
        this.board = board;
        this.renderer = NaN;
        this.params = params;
        this.debug = params.debug;
        this.mode();
    }

    mode() {
        if (this.debug) console.log('Renderer mode select');
        switch (this.params.mode.toLowerCase()) {
            case "grid":
                this.renderer = new RenderGrid(this.params, this.element);
                break;
            case "canvas":
                this.renderer = new RenderCanvas(this.params, this.element);
                break;
            default:
                throw new ParseError("Unable to read render mode");
                break;
        }
    }

    
}

class RenderCanvas {
    // Draws the canvas for tetris render
    constructor(params, element) {
        if (params.debug) console.log('Canvas Render Mode');
        this.element = element;
        this.element.innerHTML = '<canvas height="' + this.params.height + '" width="' + this.params.width + '" id="tetrisCanvas"></canvas>';
        this.ctx = document.getElementById("tetrisCanvas").getContext("2d");
    }

    draw() {
        var style = '';
    }
}

class RenderGrid {
    // Draws the grid box layout for tetris render
    constructor(params, element) {
        if (params.debug) console.log('Grid Render Mode');
        this.params = params;
        this.element = element;
        this.divsRaw;
        this.divsFormat;
        this.element.style.display = "grid";
        this.cols = '';
        this.rows = '';
        this.loadRowCol();
        this.element.style.gridTemplateColumns = this.cols;
        this.element.style.gridTemplateRows = this.rows;
        this.element.style.width = this.params.width + "px";
        this.element.style.height = this.params.height + "px";
        this.element.style.backgroundColor = "Aqua";
        this.loadDivs();
        this.update();
    }

    loadRowCol() {
        for (var _ in range(this.params.xCells)) {
            this.cols += '1fr ';
        }

        for (var _ in range(this.params.yCells)) {
            this.rows += '1fr ';
        }
    }

    loadDivs() {
        for (var x in range(this.params.xCells)) {
            for (var y in range(this.params.yCells)) {
                this.element.innerHTML += '<div class="cell" id="x' + x + 'y' + y + '"></div>'; }
        };
        this.divsRaw = this.element.getElementsByTagName('div');
    }

    draw() {
        var html = '';
        var style = '';
    }

    update() {
        // Updates the elements in board array to div array
    }
}

