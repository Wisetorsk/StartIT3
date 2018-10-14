var board = document.getElementById('gameBoard');
var field = board.getElementsByTagName('div');
console.log(field);

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
        var selected = Math.floor(Math.random() * field2.length);
        if (field2.length > 0) {
            field2[selected].innerHTML = 'O';
            field2[selected].style.color = 'blue';
            } else { console.log('Game is over');
        }


    } else {
        console.log('occupied');
    }
}