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
            console.log('width: ' + this.width);
            console.log('content length: ' + content.length);
            console.log('content: ' + content);
            throw "Width does not match classlist length";
        }
        this.html += '<tr>';
        for (var i in createArray(this.width)) {
            this.html += '<td class="' + content[i] + '" onclick="show(this)" onContextMenu="flagCell(this)">' + ((content[i].includes("isBomb")) ? "" : bombsNear[i]) + '</td>'
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
                classes += (((current.flag) ? 'is' : 'not') + 'Flag');
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
        if (!document.getElementById('score')) {
            var newDiv = document.createElement('div');
            newDiv.id = "score";
            var node = document.createTextNode("SCOREBOARD");
            newDiv.appendChild(node);
            document.getElementById("userInputField").appendChild(newDiv);
        } else {
            document.getElementById("score").innerHTML = "SCOREBOARD";
            document.getElementById("score").style = "100%";
        }

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

    checkComplete() {
        for (var index in createArray(this.cells.length)) {
            if (this.cells[index].classList.contains("isBomb") && this.cells[index].classList.contains("isFlag")) {
                continue;
            } else if (this.cells[index].classList.contains("isBomb") && this.cells[index].classList.contains("notFlag") || this.cells[index].classList.contains("notBomb") && this.cells[index].classList.contains("isFlag") ) {
                return;
            }
        }
        console.log("Game complete");
        document.getElementById('score').innerHTML = 'GRATULERER!';
        document.getElementById('score').style.fontSize = "300%";
        this.uncoverAll();
    }

    uncoverClose(element) {
        var positionString = element.id;
        var x = parseInt(positionString[1]);
        var y = parseInt(positionString[3]);
        var closeIndexes = closeIndex(x, y, this.width, this.height);
        if (element.classList.contains("n0")) {
            for (var index in closeIndexes) { //Recursive portion? 
                var selected = document.getElementById('x' + closeIndexes[index].xClose + 'y' + closeIndexes[index].yClose);
                if (selected.classList.contains("notOpen") && !selected.classList.contains("isFlag") && !selected.classList.contains("isBomb")) {
                    selected.classList.add("isOpen");
                    selected.classList.remove("notOpen");
                    selected.click();
                }
             }
                
        }
    }
}