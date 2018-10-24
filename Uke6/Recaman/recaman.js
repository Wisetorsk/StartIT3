// JavaScript source code
class Recaman { 
    /* Generates a Recamán sequence from zero to n */
    constructor(debug=false) {
        this.sequence = [0];
        this.debug = debug;
        }
    
    generate(endpoint) {
        /* Generates the sequence from zero to endpoint and returns it */
        if (endpoint > this.sequence.length) {
            for (let i = this.sequence.length; i < endpoint; i++) {
                this.oneStep();
            }
        } 
        return this.sequence;
    }

    oneStep() {
        // Adds one step to the sequence 
        let lastEntry = parseInt(this.sequence.slice(-1));
        let newNumber;
        let n = this.sequence.length;
        if (this.debug) console.log(lastEntry);
        if (this.sequence.includes(lastEntry - n)) {
            newNumber = lastEntry + n;
        } else if ((lastEntry - n) < 0) {
            newNumber = lastEntry + n;
        } else {
            newNumber = lastEntry - n;
        }
        this.sequence.push(newNumber);
        if (this.debug) console.log(this.sequence);
        return newNumber;
    }
}

//Update this

class Palette {
    /* This class draws and animates the canvas */
    constructor(canvasId, animationSteps=10) {
        this.id = canvasId;
        this.ctx = document.getElementById(this.id).getContext("2d");
        this.animationSteps = animationSteps;
        this.ctx.strokeStyle = "#FFFFFF";
    }

    drawArc(from, to, rotation = false) {
        this.ctx.beginPath();
        let radius = Math.abs(((to - from) / 2));
        let center = (from < to) ? (from + radius) : (from - radius);
        this.ctx.arc(center, 300, radius, 0, Math.PI, rotation);
        this.ctx.strokeStyle = "#000000";
        this.ctx.stroke();
        this.ctx.strokeStyle = "#FFFFFF";
    }

}

class Painter {
    constructor(canvasID) {
        this.palette = new Palette(canvasID);
        this.rec = new Recaman();
        this.numbers = [];
        this.lastNumber = 0;
    }

    generateStep() {
        this.lastNumber = this.current;
        this.current = this.rec.oneStep();
        this.numbers.push(this.current);
    }

    animateOneStep() {
        this.generateStep();
        let current = this.numbers[this.numbers.length - 1];
        this.palette.drawArc(this.lastNumber, current, (this.numbers.length % 2 === 1));
        this.palette.ctx.stroke();
    }
}