// Global variables and functions
var bombs = [
    { x: 5, y: 6 },
    { x: 7, y: 1 }
];
var game;


function show(element) {
    if (element.classList.contains('notOpen')) {
        element.classList.remove("notOpen");
        element.classList.add("isOpen");
        game.ui.uncoverClose(element);
        if (element.classList.contains("isBomb")) {
            game.ui.gameOver();
        }
    } else {
        console.log('Already open');
    }
}

function randInt(n) {
    return Math.floor(Math.random() * n);
}

function createArray(n) {
    return Array.from(Array(n).keys());
}

function closeIndex(x, y, xMax, yMax, xMin = 0, yMin = 0) {
    // Returns the indexes of closest neighbors as array
    var newIndexes = [];
    var closeIndexes = [
        { xClose: x - 1, yClose: y },
        { xClose: x + 1, yClose: y },

        { xClose: x - 1, yClose: y + 1 },
        { xClose: x + 1, yClose: y + 1 },
        { xClose: x - 1, yClose: y - 1 },
        { xClose: x + 1, yClose: y - 1 },

        { xClose: x, yClose: y - 1 },
        { xClose: x, yClose: y + 1 }
    ];

    for (var index in closeIndexes) {
        if (!(closeIndexes[index].xClose < xMin || closeIndexes[index].xClose >= xMax || closeIndexes[index].yClose < yMin || closeIndexes[index].yClose >= yMax)) {
            newIndexes.push(closeIndexes[index]);
        }
    }

    return newIndexes;
}


//MAIN

function main() {
    game = new Controller();
}
