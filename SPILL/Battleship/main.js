class Main {
    constructor() {
        if (debug) console.log('Started main at ' + new Date().toLocaleString());
        this.painter = new Painter(); //LOAD ORDER!!!!!
        this.ai;
        this.user;

    }
}

