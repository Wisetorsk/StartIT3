var board = document.getElementById('gameBoard');
var field = board.getElementsByTagName('div');

function check(element) {
    var field2 = [];
    if(element.innerHTML.toUpperCase() !== 'O' && element.innerHTML.toUpperCase() !== 'X') {
        element.innerHTML = 'X';

        // pc placement
        for (var i = 0; i < field.length; i++) {
            if (field[i].innerHTML.toUpperCase() === '') {
                field2.push(field[i]);
            }
        }
        completeCheck();
        var selected = Math.floor(Math.random() * field2.length);
        if (field2.length > 0) {
            field2[selected].innerHTML = 'O';
            field2[selected].style.color = 'blue';
            } else { console.log('Game is over');
        }
        completeCheck();

    } else {
        console.log('occupied');
    }
}

function completeCheck() {
    var corr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6, 4, 2],];

    var list = [[], [], [], [], [], [], [], [], ];

    var currentState = document.getElementById('gameBoard').getElementsByTagName('div');

    for (var solution = 0; solution < corr.length; solution++) {
        for (var index = 0; index < 3; index++) {
            list[solution][index] = currentState[corr[solution][index]].innerHTML;
        }
    }

    for (var x = 0; x < 8; x++) {
        xlist = '';
        for (var y = 0; y < 3; y++) {
            xlist += list[x][y];
        }
        if (xlist === 'XXX' || xlist === 'OOO') {
            console.log('Done');
            if (xlist === 'XXX') {
                document.getElementById('result').innerHTML = 'YOU WIN!';
                lockCells();
            } else {
                document.getElementById('result').innerHTML = 'YOU LOSE!';
                lockCells();
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