﻿// JavaScript source code
var lab;
var interval;

class Labyrinth {
    constructor(x, y) {
        /*
         * Draw the entire labyrinth with closed walls.
         * */
        this.x = x;
        this.x++;
        this.y = y;
        this.maze = [];

        this.canvas = document.getElementById('canvas');
        this.canvas.innerHTML = '';
        this.html = '';
        this.draw();
        this.loadMaze();
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
            this.html += '<td class="wall high" ondragEnter="noWall(this)" onclick="noWall(this)"></td >';
            this.html += '<td class="room"></td>';
        }
        this.html += '<td class="wall high" ondragEnter="noWall(this)" onclick="noWall(this)"></td >';
        this.html += '</tr>';
    }

    drawWallsLayer() {
        console.log('DRAW WALLS');
        this.html += '<tr>';
        for (var i = 1; i < this.x; i++) {
            this.html += '<td class="wall small"></td>';
            this.html += '<td class="wall wide" ondragEnter="noWall(this)" onclick="noWall(this)"></td>'
        }
        this.html += '<td class="wall small"></td>';
        this.html += '</tr>';
    }

    randomize(chance=.5) {
        for (var index = 0; index < this.maze.length; index++) {
            if (Math.random() <= chance) {
                noWall(this.maze[index]);
            }
        }
    }

    loadMaze() {
        this.maze = document.getElementsByTagName('td');
        }
}


function noWall(element) {
    if (!element.classList.contains("room") && !element.classList.contains("small")) {
        if (element.classList.contains("wall")) {
            element.classList.remove("wall");
            element.classList.add("noWall");
        } else if (element.classList.contains("noWall")) {
            element.classList.remove("noWall");
            element.classList.add("wall");
        } else {
            console.log('ROOM or Node');
        }
    }
}
    

function main() {
    lab = new Labyrinth(15, 15);

}

function party() {
    lab.randomize(document.getElementById('randomness').value/1000);
}

function terje(el) {
    if (el.classList.contains('off')) {
        el.classList.remove('off');
        interval = setInterval(party, 100);
        el.classList.add('on');
        el.innerHTML = "Hva sa jeg?";
    } else {
        clearInterval(interval);
        el.classList.remove('on');
        el.classList.add('off');
        el.innerHTML = "Ikke trykk på meg";
    }
}