/* Page functions & Vue*/
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

function insertCell(x, y) {
    return '<cell-element x="' + x + '" y="' + y + '"></cell-element>';
}


