class Life {
    constructor(width, height, state=false) {
        if (state) {
            this.setGameState(state);
        }
        this.height = height;
        this.width = width;
        this.cells = [];
        this.generation = 0;
    }

    getCells() {
        let rawCells = [...document.getElementById('board').childNodes];
        let index = 0;
        for (let _ in [...Array(this.width).keys()]) {
            let row = [];
            for (let _ in [...Array(this.height).keys()]) {
                row.push(rawCells[index]);
                index++;
            }
            this.cells.push(row);
        }
    }

    setRandom(amount) {
        for (let _ in [...Array(amount).keys()]) {
            let x = Math.floor(Math.random() * this.width);
            let y = Math.floor(Math.random() * this.height);
            while (this.cells[y][x].classList.contains('alive')) {
                x = Math.floor(Math.random() * this.width);
                y = Math.floor(Math.random() * this.height);
            }
            this.cells[y][x].classList.remove('dead');
            this.cells[y][x].classList.add('alive');
        }
    }

    setGameState(state=false, parse=false) {
        if (parse) {
            state = this.parseExternalState(state);
        }
        if (state) {
            for (let row in state) {
                for (let cell in state[row]) {
                    this.cells[row][cell].classList.remove('alive');
                    this.cells[row][cell].classList.remove('dead');
                    this.cells[row][cell].classList.add(state[row][cell]);
                }
            }
        } else {
            const dim = [...Array(100).keys()];
            for (let row in dim) {
                for (let cell in dim) {
                    this.cells[row][cell].classList.remove('alive');
                    this.cells[row][cell].classList.remove('dead');
                    this.cells[row][cell].classList.add('dead');
                }
            }
        }
    }

    parseExternalState(state) {
        let parsed = [];
        for (let row of state) {
            let r = [];
            for (let letter in row) {
                r.push((row[letter] == 'A') ? 'alive' : 'dead');
            }
            parsed.push(r);
        }
        return parsed;
    }

    saveState() {
        let state = [];
        for (let row of this.cells) {
            let r = '';
            for (let cell of row) {
                if (cell.classList.contains('alive')) {
                    r += 'A';
                } else {
                    r += 'D';
                }
            }
            state.push(r);
        }
        return state;
    }

    mapStates() {
        let states = [];
        for (let row of this.cells) {
            let r = [];
            for (let cell of row) {
                let adjecent = this.getSurroundingCells(parseInt(cell.getAttribute('x')), parseInt(cell.getAttribute('y')));
                let alive = 0;
                for (let neighbor of adjecent) {
                    if (neighbor.classList.contains('alive')) {
                        alive++;
                    } 
                }
                if (cell.classList.contains('alive')) {
                    if (alive < 2) {
                        r.push('dead');
                    } else if (alive >= 2 && alive < 4) {
                        r.push('alive');
                    } else {
                        r.push('dead');
                    }
                } else if (cell.classList.contains('dead')) {
                    if (alive == 3) {
                        r.push('alive');
                    } else {
                        r.push('dead');
                    }
                }
            }
            states.push(r);
        }
        return states;
    }

    getSurroundingCells(x, y) {
        let cellList = [];
        for (let j = -1; j < 2; j++) {
            for (let i = -1; i < 2; i++) {
                try {
                    if (i != 0 || j != 0) {
                        if (this.cells[parseInt(y + j)][parseInt(x + i)]) {
                            cellList.push(this.cells[parseInt(y + j)][parseInt(x + i)]);
                        }
                    } 
                } catch {
                    
                }
            }
        }
        return cellList;
    }

    oneStep() {
        //document.getElementById('generation').innerHTML = this.generation;
        let states = this.mapStates();
        this.setGameState(states);
        this.generation++;
    }

}