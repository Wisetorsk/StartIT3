// JavaScript source code
class KeyHandler {
    constructor() {
        this.newKeys = {};
        this.pressed = [];
        this.lastPressed = NaN;
        this.keys = { //Defualt keys
            187: ['Plus',],
            43: ['Plus',],
            45: ['Minus',],
            189: ['Minus',],
            13: ['Enter',],
            27: ['Escape', 'esc'],
            9: ['Tab', '\u21C6'],
            32: ['Space'],
            16: ['Shift'],
            18: ['Alt'],
            8: ['Bakcspace'],
            17: ['Control', 'ctrl']
        };
    }

    addListner(keys) {
        window.addEventListener('keydown', function (event) {
            var keyCode = event.keyCode.toString();
            if (keys[keyCode]) {
                console.log(keys[keyCode][0]);
                // Do something with the key that was just pressed!
                this.pressed.push(keys[keyCode][0]);
                this.lastPressed = keys[keyCode][0];
                //return keys[keyCode];
            }
        }, true);
    }

    removeListner() {
        window.addEventListener('keydown', function () {}, true);
    }

    map() {
        for (let x in this.newKeys) {
            this.keys[x] = this.newKeys[x];
        }
    }

    externalKeymap(externalKeys) {
        this.removeListner();
        this.keys = externalKeys;
        this.addListner(this.keys);
    }
}

class WASD extends KeyHandler{
    constructor() {
        super();
        this.newKeys = { 
            65: ['left'],
            68: ['right'],
            83: ['down'],
            87: ['up'],
            37: ['left'],
            38: ['up'],
            39: ['right'],
            40: ['down']
        };
        this.map();
        this.addListner(this.keys);
    }
}

class Letters extends KeyHandler {
    constructor() {
        super();
        this.newKeys = {  // Add Unicode
            65: ['a'],
            66: ['b'],
            67: ['c'],
            68: ['d'],
            69: ['e'],
            70: ['f'],
            71: ['g'],
            72: ['h'],
            73: ['i'],
            74: ['j'],
            75: ['k'],
            76: ['l'],
            77: ['m'],
            78: ['n'],
            79: ['o'],
            80: ['p'],
            81: ['q'],
            82: ['r'],
            83: ['s'],
            84: ['t'],
            85: ['u'],
            86: ['v'],
            87: ['w'],
            88: ['x'],
            89: ['y'],
            90: ['z'],
            222: ['\u00E5', 'æ'],
            192: ['\u00E6', 'ø'],
            221: ['\u00F8', 'å']
        };
        this.map();
        this.addListner(this.keys);
    }
}

class Numbers extends KeyHandler {
    constructor() {
        super();
        this.newKeys = {
            48: [0, 'zero'],
            96: [0, 'zero'],
            49: [1, 'one'],
            97: [1, 'one'],
            50: [2, 'two'],
            98: [2, 'two'],
            51: [3, 'three'],
            99: [3, 'three'],
            52: [4, 'four'],
            100: [4, 'four'],
            53: [5, 'five'],
            101: [5, 'five'],
            54: [6, 'six'],
            102: [6, 'six'],
            55: [7, 'seven'],
            103: [7, 'seven'],
            56: [8, 'eight'],
            104: [8, 'eight'],
            57: [9, 'nine'],
           105: [9, 'nine']
        };
        this.map();
        this.addListner(this.keys);
    }
}