class appError extends Error {
    constructor(e, msg, code) {
        super(e);
        this.e = e;
        this.msg = msg;
        this.status = code;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = appError;
