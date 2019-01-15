function map(x, from_min, from_max, to_min, to_max) {
    return (x - from_min) / (from_max - from_min) * (to_max - to_min) + to_min;
}

function arr(x) {
    return [...Array(x).keys()];
}