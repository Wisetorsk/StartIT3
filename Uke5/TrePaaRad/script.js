var board = document.getElementById('gameBoard');
var field = board.getElementsByTagName('div');

function check(element) {
    var field2 = [];
    if(element.innerHTML.toUpperCase() !== 'O' && element.innerHTML.toUpperCase() !== 'X') {
        element.innerHTML = 'X';
        completeCheck(); //Check the game board for victory conditions

        // pc placement is executed only if the player has palced a point.
        for (var i = 0; i < field.length; i++) { // Get a list of the empty cells on the board
            if (field[i].innerHTML.toUpperCase() === '') { //strict!
                field2.push(field[i]);
            }
        }
        var selected = Math.floor(Math.random() * field2.length); //
        if (field2.length > 0) {
            field2[selected].innerHTML = 'O';
            field2[selected].style.color = 'blue';
            } else { console.log('Game is over'); // No empty cells found, the game must be over
        }
        completeCheck();

    } else { // Cell is not empty
        console.log('occupied');
    }
}

function completeCheck() { //Analyse the board state, and check against wictory conditions
    var corr = [ //List of cell indexes that equal a row. (horizontal, vertical and diagonal)
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6, 4, 2],];

    var list = [[], [], [], [], [], [], [], [],]; //Empty array for board object content (innerHTML per cell) (horizontal, vertical and diagonal)

    var currentState = document.getElementById('gameBoard').getElementsByTagName('div'); //load all cell objects into array

    for (var solution = 0; solution < corr.length; solution++) {
        for (var index = 0; index < 3; index++) {
            list[solution][index] = currentState[corr[solution][index]].innerHTML; //load cell content into "list" according to rows
        }
    }

    for (var x = 0; x < 8; x++) { //for row in list
        xlist = '';
        for (var y = 0; y < 3; y++) { //for element in row
            xlist += list[x][y];
        }
        if (xlist === 'XXX' || xlist === 'OOO') { // If a line of XXX or OOO is found, the game is over. 
            console.log('Done');
            lockCells(); //Disable the onclick function per cell
            if (xlist === 'XXX') {
                document.getElementById('result').innerHTML = 'YOU WIN!';
            } else {
                document.getElementById('result').innerHTML = 'YOU LOSE!';
            }
        } 
    }
    return false;
}

function lockCells() {
    for (var x = 0; x < field.length; x++) {
        field[x].onclick = null;
    }
}