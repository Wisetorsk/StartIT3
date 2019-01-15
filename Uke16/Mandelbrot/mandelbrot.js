class MandelbrotSet {
    constructor(width, height, n=100, threshold=10) {
        this.width = width; //Number of pixels in x direction
        this.height = height; // Number of pixels in y (b*i) direction
        this.threshold = threshold;
        this.n = n; // Number of iterations of the sequence
        this.results = [];
    }

    calculate() {
        for (let x of arr(this.width)) {
            for (let y of arr(this.height)) {
                let a = map(x, 0, this.width, -2, 2);
                let b = map(y, 0, this.height, -2, 2);

                let n = 0;
                let ca = a;
                let cb = b;

                for (let i in arr(this.n)) {
                    let aa = a * a - b * b;
                    let bb = 2 * a * b;

                    a = aa + ca;
                    b = bb + cb;

                    if ((aa + bb) > this.threshold) {
                        break;
                    }
                    n = i;
                }

                let brightness = map(n, 0, this.n-1, 0, 255);
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