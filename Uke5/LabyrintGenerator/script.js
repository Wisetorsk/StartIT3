// JavaScript source code
class Labyrinth {
    constructor(x, y) {
        /*
         * Draw the entire labyrinth with closed wass, and go through and remove to create path.
         * */
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById('canvas');
        this.canvas.innerHTML = '';
        this.html = '';
        this.draw();
    }

    draw() {
        console.log('DRAWING BODY');
        for (var i = 0; i < this.y; i++) {
            this.drawWallsLayer();
            this.drawRoomLayer();
        }
        this.drawWallsLayer();
        this.canvas.innerHTML = this.html;
    }

    drawRoomLayer() {
        console.log('DRAW ROOMS');
        this.html += '<tr>';
        for (var i = 1; i < this.x; i++) {
            this.html += '<td class="wall high" onclick="noWall(this)"></td >';
            this.html += '<td class="room"></td>';
        }
        this.html += '<td class="wall high" onclick="noWall(this)"></td >';
        this.html += '</tr>';
    }

    drawWallsLayer() {
        console.log('DRAW WALLS');
        this.html += '<tr>';
        for (var i = 1; i < this.x; i++) {
            this.html += '<td class="wall small"></td>';
            this.html += '<td class="wall wide" onclick="noWall(this)"></td>'
        }
        this.html += '<td class="wall small"></td>';
        this.html += '</tr>';
    }
}


function noWall(element) {
    if (element.classList.contains("wall")) {
        element.classList.remove("wall");
        element.classList.add("noWall");
    } else {
        element.classList.remove("noWall");
        element.classList.add("wall");
    }
    
}

function main() {
    var labyrinth = new Labyrinth(10, 10);

}