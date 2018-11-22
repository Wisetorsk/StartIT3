class Main {
    constructor() {
        if (debug) console.log('Started main at ' + new Date().toLocaleString());
        this.user = new Player();
        this.ai = new Ai();
        this.painter = new Painter();
    }
}

