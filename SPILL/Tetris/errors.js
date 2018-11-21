//===============================================================================================================================================
// Custom errors
//===============================================================================================================================================

class ParseError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, ParseError);
    }
}

function FatalError() { // yay, prototypes... </sarcasm>
    Error.apply(this, arguments);
    this.name = "FatalError";
}
FatalError.prototype = Object.create(Error.prototype);
