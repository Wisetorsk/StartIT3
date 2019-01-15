function mandelbrot(c, n=20, th=10) {
    // returns true if the complex number c is part of the mandelbrot set.
    // c = a + b i
    // => c^2 => a^2 - b^2 + 2abi where 2ab is the imaginary number
    // **Param** c - The complex number
    // **Param** n - The number of iteration of the loop
    // **Param** th - Threshold value.

    let z = 0;
    for (let x of [...Array(n).keys()]) {
        let zn = z * z + c;
        console.log(zn);
        if (zn > th) {
            return false;
        }
        z = zn;
    }
    return true;
}

function map(x, from_min, from_max, to_min, to_max) {
    return (x - from_min) / (from_max - from_min) * (to_max - to_min) + to_min;
}