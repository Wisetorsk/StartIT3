function buildBoard(x, y) {
    let board = document.getElementById('board');
    for (let j of [...Array(y).keys()]) {
        for (let i of [...Array(x).keys()]) {
            board.innerHTML += insertCell(i, j);
        }
    }
}

function insertCell(x, y) {
    return `<div class="cell dead" x="${x}" y="${y}" onclick="setCell(this)"></div>`
}

function setCell(element) {
    if (element.classList.contains('dead')) {
        element.classList.add('alive');
        element.classList.remove('dead');
    } else {
        element.classList.add('dead');
        element.classList.remove('alive');
    }

}