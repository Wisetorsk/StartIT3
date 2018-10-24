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


class Palette {
    /* This class draws and animates the canvas */
    constructor(canvasId, animationSteps=10) {
        this.id = canvasId;
        this.ctx = document.getElementById(this.id).getContext("2d");
        this.animationSteps = animationSteps;
        this.ctx.strokeStyle = "#FFFFFF";
    }

    drawArc(from, to, rotation=false) {
        let center;
        let radius = Math.abs((to - from / 2))*2;
        if (to < from) {
            // Negative direction
            center = from - radius;
        } else {
            center = from + radius;
        }
        this.ctx.arc(center, 300, radius, 0, Math.PI, rotation);
        this.ctx.stroke();
    }

    drawAnimatedArc(from, to, rotation=false) {
        let arcLength;
        let arcStart = 0;
        let arcEnd = 0;
        let center;
        let radius = Math.abs((to - from / 2));
        if (to < from) {
            // Negative direction
            center = from - radius;
        } else {
            center = from + radius;
        }
        for (let step = 0; step < this.animationSteps; step++) {
            arcLength = (Math.PI / this.animationSteps);
            //console.log(arcLength);
            arcEnd += arcLength;
            this.ctx.arc(center, 300, radius, arcStart, arcEnd, rotation);
            //console.log("center: %s \t radius: %s \t start: %s \t end: %s", center, radius, arcStart, arcEnd);
            this.ctx.stroke();
            arcStart = arcEnd;
        }
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
        let current = this.numbers[this.numbers.length - 1];
        this.generateStep();
        console.log("last: %s\t next: %s", this.lastNumber, current);
        if (this.numbers.length % 2 === 1) {
            this.palette.drawArc(this.lastNumber, current, false);
        } else {
            this.palette.drawArc(this.lastNumber, current, true);
        }
    }
}