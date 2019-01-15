class Painter {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.color = "#FFFFFF";
    }

    setColor(color = false) {
        if (color) {
            this.ctx.strokeStyle = color;
        } else {
            this.ctx.strokeStyle = this.color;
        }
    }

    line(from, to) {
        if (typeof (from) != "object" || typeof (to) != "object") {
            throw "From / To, needs to be in object form with {x: 'X-coordinate', y: 'Y-coordiante'}"
        }
        if (!from.x || !from.y || !to.x || !to.y) throw "Both objects must contain x and y values with x and y keys. {x: 'X-coordinate', y: 'Y-coordiante'}"
        this.ctx.moveTo(from.x, from.y);
        this.ctx.lineTo(to.x, to.y);
    }

    drawArc(from, to, rotation = false) {
        this.ctx.beginPath();
        let radius = Math.abs(((to - from) / 2));
        let center = (from < to) ? (from + radius) : (from - radius);
        this.ctx.arc(center, 300, radius, 0, Math.PI, rotation);
        this.ctx.stroke();
    }

    drawShape(xy) {
        console.log('draw');
        this.ctx.clearRect(0, 0, 800, 800);
        for (let index = 0; index < xy.x.length; index++) {
            let x = xy.x[index];
            let y = xy.y[index];
            this.ctx.lineTo(x, y);
        }
        this.ctx.stroke();
    }

    pixelMap(dataset) {
        const imgData = new Uint8ClampedArray(this.width * this.height * 4);
        if (dataset.length === imgData.lenght) { // RGBA
            for (let i = 0; i < imgData.length; i += 4) {
                imgData[i + 0] = dataset[i + 0]; // R
                imgData[i + 1] = dataset[i + 1]; // G 
                imgData[i + 2] = dataset[i + 2]; // B
                imgData[i + 3] = dataset[i + 3]; // A
                index++;
            }
        } else { // GREYSCALE
            let index = 0;
            for (let i = 0; i < imgData.length; i += 4) {
                imgData[i + 0] = dataset[index];
                imgData[i + 1] = dataset[index];
                imgData[i + 2] = dataset[index];
                imgData[i + 3] = 255;
                index++;
            }
        }
        let image = new ImageData(imgData, this.width);
        this.ctx.putImageData(image, 0, 0);
    }
}