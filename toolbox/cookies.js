// JavaScript source code
class Cookies {
    /* Cookie handler object
     * 
     */
    constructor() {
        this.cookies = {};
        this.load();
        console.log("Cookie Handler started at: " + Date.now() + " Epoch Time")
    }

    set(cookie, value) {
        // Set the value of a cookie. If the cookie already exists update it, else create new cookie
        console.log("Set \ncookie: " + cookie + "\nValue: " + value);
        this.cookies[cookie] = value;
        document.cookie = cookie + '=' + value;
    }

    get(cookie) {
        // Return a single cookie
        this.load();
        console.log("Return this cookie: " + cookie);
        return this.cookies[cookie];
    }

    static remove() {
        // removes all cookies in page
        console.log("Remove cookies");
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"; // Set expepration date to 0 epoch time
        }
    }

    removeStored() {
        // removes all cookies in "local" memory
        this.cookies = {};
    }

    list() {
        // Displays all cookies loaded 
        console.log("Cookies in memory:");
        console.table(this.cookies);
        console.log("Cookies in page:");
        if (document.cookie.length <= 1) {console.log("No cookies in page")}
        console.log(document.cookie.replace(/;/g, '\n').replace(/ /g, ''), "\n\n\nIf there is a discrepancy between loaded and memory cookies, run 'CookiesObject'.load()");
    }

    load(all=false) {
        // Get all cookies from page
        // Set all flag to true if there are more cookies in memory than in page
        if (all) { this.removeStored(); }
        else {
            console.log("Load cookies from page into memory");
            var cookieString = document.cookie.replace(/ /g, '').split(';');
            if (document.cookie <= 1) { console.log("No cookies to load") } else {
                for (var cookie in cookieString) {
                    var crumbles = cookieString[cookie].split('=');
                    this.cookies[crumbles[0]] = crumbles[1];
                }
            }
        }
    }
}