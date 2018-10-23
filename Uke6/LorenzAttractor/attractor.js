// JavaScript source code
let anim;

class Lorenz {
    constructor(rho = 28, sigma = 10, beta = 8 / 3, step = 0.01, frameTime = 50) {
        this._rho = rho;
        this._sigma = sigma;
        this._beta = beta;

        this.x = 1;
        this.y = 0;
        this.z = 0;
        this.t = 0;
        this._step = step; // :param step:
        this.animation;
        this.frameTime = frameTime;
        this.canvas = document.getElementById("lorenz");
        this.ctx = this.canvas.getContext("2d");
     
        this.ctx.fillStyle = '#FFFFFFFF';
        this.ctx.clearRect(0, 0, 800, 800);
    }


    updateFrame() {
        /*Runs the differential calculations to update x, y, and z values.*/
        this.x = this.x + this._step * this._sigma * (this.y - this.x);
        this.y = this.y + this._step * (this.x * (this._rho - this.z) - this.y);
        this.z = this.z + this._step * (this.x * this.y - this._beta * this.z);
        this.ctx.fillRect(15 * this.x + 400, 10 * this.y + 400, (this.z / 10), (this.z / 10)); //Values added are scaling factors and x-y offset to center element on canvas.
        //console.log("X value: %s \n Y value: %s \n Z value: %s", this.x, this.y, this.z);
    }

    updateVariable(variable, value) {
        switch (variable) {
            case "rho":
                this._rho = value;
                break;
            case "sigma":
                this._sigma = value;
                break;
            case "beta":
                this._beta = value;
                break;
            default:
                console.log("Error in parsing");
                break;
        }
    }

}

