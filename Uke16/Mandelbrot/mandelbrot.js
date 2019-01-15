class MandelbrotSet {
    /* This class creates a visualization of the set of complex numbers known as the Mandelbrot set by plotting the real component on the y plane, and the imaginary component on the x plane.
     */
    constructor(width, height, n=200, threshold=7) {
        this.width = width; //Number of pixels in x direction
        this.height = height; // Number of pixels in y (b*i) direction
        this.threshold = threshold;
        this.n = n; // Number of iterations of the sequence
        this.results = [];
    }

    calculate() {
        for (let x of arr(this.width)) {
            for (let y of arr(this.height)) {
                let a = map(x, 0, this.width, -3, 3);
                let b = map(y, 0, this.height, -3, 3);

                let iterations = 0;
                let c_base_a = a;
                let c_base_b = b;

                for (let i in arr(this.n)) {
                    let a_squared = a * a - b * b;
                    let b_squared = 2 * a * b;

                    a = a_squared + c_base_a;
                    b = b_squared + c_base_b;

                    if ((a_squared + b_squared) > this.threshold) {
                        break;
                    }
                    iterations = i;
                }
                let brightness;
                if (iterations == this.n-1) {
                    brightness = 0;
                } else {
                    brightness = map(iterations, 0, this.n - 1, 0, 255);
                }
                this.results.push(brightness);
            }
            
        }
    }
}

class Painter {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    pixelMap(dataset) {
        const imgData = new Uint8ClampedArray(this.width * this.height * 4);
        let index = 0;
        for (let i = 0; i < imgData.length; i += 4) {
            imgData[i + 0] = dataset[index];
            imgData[i + 1] = dataset[index];
            imgData[i + 2] = dataset[index];
            imgData[i + 3] = 255;
            index++;
        }
        let image = new ImageData(imgData, this.width);
        this.ctx.putImageData(image, 0, 0);
    }
}