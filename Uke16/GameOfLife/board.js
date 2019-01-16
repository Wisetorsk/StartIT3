function buildBoard(x, y) {
    let html = '';
    let board = document.getElementById('board');
    for (let j of [...Array(y).keys()]) {
        for (let i of [...Array(x).keys()]) {
            html += insertCell(i, j);
        }
    }
    board.innerHTML = html;
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