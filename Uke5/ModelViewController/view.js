class UI {

    /*Builds and manages the ui window*/

    constructor(width, height, board) {
        this.width = width;
        this.height = height;
        this.board = board;
        this.html = '';
        this.classes = [];
        this.bombs = [];

        this.loadClasses();
        this.loadNearbyBombs();
        this.buildBoard();

        this.cells = document.getElementsByTagName("td");
    }

    buildRow(content, bombsNear) {
        //Content is an array of cell object class list formatted as string with spaces
        if (this.width !== content.length) {
            throw "Width does not match classlist length";
        }
        this.html += '<tr>';
        for (var i in createArray(this.width)) {
            this.html += '<td class="' + content[i] + '" onclick=show(this)>' + ((content[i].includes("isBomb")) ? "" : bombsNear[i]) + '</td>'
        }
        this.html += '</tr>';
    }

    loadClasses() {
        for (var x in createArray(this.width)) {
            var classRow = [];
            for (var y in createArray(this.height)) {
                var classes = "cell ";
                var current = this.board.playfield[x][y];
                classes += 'n' + (current.bombsNear + ' ');
                classes += (((current.isBomb) ? 'is' : 'not') + 'Bomb ');
                classes += (((current.isOpen) ? 'is' : 'not') + 'Open ');
                classes += (((current.flag) ? 'is' : 'not') + 'Flag ');
                classes += ('"id="x' + x + 'y' + y + '"');
                classRow.push(classes);
            }
            this.classes.push(classRow);
        }
    }

    buildBoard() {
        this.html += '<table>';
        for (var i in createArray(this.height)) {
            this.buildRow(this.classes[i], this.bombs[i]);
        }
        this.html += '</table>';
        document.getElementById('board').innerHTML = this.html;
        var newDiv = document.createElement('div');
        newDiv.id = "score";
        var node = document.createTextNode("SCOREBOARD");
        newDiv.appendChild(node);
        document.body.appendChild(newDiv);
    }

    loadNearbyBombs() {
        for (var x in createArray(this.width)) {
            var rowBombs = [];
            for (var y in createArray(this.height)) {
                rowBombs.push(this.board.playfield[x][y].bombsNear);
            }
            this.bombs.push(rowBombs);
        }
    }

    gameOver() {
        var scoreBoard = document.getElementById('score');
        this.uncoverAll();
        scoreBoard.innerHTML = "GAME OVER!";
        scoreBoard.style.fontSize = "300%";
    }

    uncoverAll() {
        try {
            for (var index in this.cells) {
                this.cells[index].classList.add("isOpen");
            }
        } catch (err) {
            console.log(err);
        }
    }

    uncoverClose(element) {
        console.log("uncover");
        var positionString = element.id;
        var x = parseInt(positionString[1]);
        var y = parseInt(positionString[3]);
        console.log(x, y);
        var closeIndexes = closeIndex(x, y, this.width, this.height);
        console.log(closeIndexes);
        
        if (element.classList.contains("n0")) {
            console.log('This one is empty');
            for (var index in closeIndexes) {
                var selected = document.getElementById('x' + closeIndexes[index].xClose + 'y' + closeIndexes[index].yClose);
                
                selected.classList.add("isOpen");
                selected.classList.remove("notOpen");
            }
        }
    }
}