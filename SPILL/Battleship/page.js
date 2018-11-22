/* Globals */
let lastX = 0;
let lastY = 0;
let listX = [];
let listY = [];
let lastCell;
const debug = true;

/* Page functions*/
function arr(n) {
    return [...Array(n).keys()]
}

function letters(n) {
    if (n > 26) {
        n = 26;
        console.log('Exceeded max limit');
    } else if (n < 1 || !n) {
        console.log('Min limit is one');
        n = 1;
    }
    return [...Array(n)].map(_ => (++i).toString(10 + n).toUpperCase(), i = 9)
}

function insertIndex(val) {
    return '<index-element index-value="' + val + '"></index-element>';
}

function insertCell(x, y, boardNo) {
    return '<cell-element x="' + x + '" y="' + y + '" brd="' + boardNo +'"></cell-element>';
}

function openNav() {
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("mainPage").style.marginLeft = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("mainPage").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function clickCell(element) {
    lastX = element.getAttribute("xindex");
    lastY = element.getAttribute("yindex");
    lastCell = element;
    board = (element.getAttribute("brd") === '0') ? 'User' : 'Enemy';
    listX.push(lastX);
    listY.push(lastY);
    document.getElementById("lx").innerHTML = lastX;
    document.getElementById("ly").innerHTML = lastY;
    document.getElementById("brd").innerHTML = board
    if (board === 'Enemy') element.innerHTML = 'X';
}